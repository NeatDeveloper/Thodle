import { CreateException, factory } from 'helpers';
import prisma from '@repo/db';
import { upload } from '@repo/db/s3';
import faculity from './faculity';
import building from './building';
import { zValidator } from '@hono/zod-validator';
import { universitySchema, type UniversitySchema } from '@repo/schemas';
import { generate } from '@repo/utils/crypto';
import discipline from './discipline';

const university = factory.createApp().basePath('/university');

university.get('/', async __context__ => {

    const universities = await prisma.university.findMany();

    return __context__.json(universities)
});
university.get('/:id', async __context__ => {
    const id = __context__.req.param('id');
    const buildings = __context__.req.query('buildings');
    const faculities = __context__.req.query('faculities');
    const disciplines = __context__.req.query('disciplines');

    const university = await prisma.university.findUnique({
        where: { id },
        include: {
            buildings: typeof buildings === 'string',
            faculities: typeof faculities === 'string',
            disciplines: typeof disciplines === 'string',
        }
    });

    return __context__.json(university)
});

university.post('/',
    zValidator('form', universitySchema, async result => {
        if (!result.success) throw CreateException('BAD_REQUEST', { message: result.error.message });
    }),
    async __context__ => {

        const form = await __context__.req.parseBody<UniversitySchema>();

        let university = await prisma.university.findUnique({
            where: {
                name: form.name
            }
        });

        if(!university) {
            const id = generate(10);

            const iconURL = `university/logo/${id}.${form.file.name.split('.').at(-1)}`;

            university = await prisma.university.create({
                data: {
                    id,
                    name: form.name,
                    shortName: form.shortName,
                    city: form.city,
                    iconURL
                }
            });

            await upload(iconURL, form.file);
        }

        return __context__.json({ message: 'Университет добавлен!' }, 201);
    });


university.route('/', faculity);
university.route('/', building);
university.route('/', discipline);

export default university;
