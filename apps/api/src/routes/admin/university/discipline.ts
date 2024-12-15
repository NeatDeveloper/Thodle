import { CreateException, factory } from 'helpers';
import prisma from '@repo/db';
import { zValidator } from '@hono/zod-validator';
import { disciplineSchema, type DisciplineSchema } from '@repo/schemas';

const discipline = factory.createApp().basePath('/discipline');

discipline.get('/:id', async __context__ => {
    const id = __context__.req.param('id');

    const discipline = await prisma.discipline.findMany({
        where: { id: +id }
    });

    return __context__.json(discipline)
});
discipline.get('/', async __context__ => {

    const disciplines = await prisma.discipline.findMany();

    return __context__.json(disciplines)
});

discipline.post('/',
    zValidator('form', disciplineSchema, async result => {
        if (!result.success) throw CreateException('BAD_REQUEST', { message: result.error.message })
    }),
    async __context__ => {
        const form = await __context__.req.parseBody<DisciplineSchema>();

        let discipline = await prisma.discipline.findFirst({
            where: form
        });

        if (discipline) throw CreateException('BAD_REQUEST');

        discipline = await prisma.discipline.create({
            data: form
        });

        return __context__.json(discipline);
    });

export default discipline;
