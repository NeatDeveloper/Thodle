import { CreateException, factory } from 'helpers';
import prisma from '@repo/db';
import { zValidator } from '@hono/zod-validator';
import { faculitySchema, type FaculitySchema } from '@repo/schemas';

const faculity = factory.createApp().basePath('/faculity');


faculity.get('/:id', async __context__ => {
    const id = __context__.req.param('id');

    const faculity = await prisma.faculity.findMany({
        where: { id: +id }
    });

    return __context__.json(faculity)
});

faculity.get('/', async __context__ => {

    const faculities = await prisma.faculity.findMany();

    return __context__.json(faculities)
});

faculity.post('/',
    zValidator('form', faculitySchema, async result => {
        if (!result.success) throw CreateException('BAD_REQUEST', { message: result.error.message })
    }),
    async __context__ => {
        const form = await __context__.req.parseBody<FaculitySchema>();

        let faculity = await prisma.faculity.findFirst({
            where: {
                university: form.university,
                name: form.name,
            }
        });

        if (faculity) throw CreateException('BAD_REQUEST');

        faculity = await prisma.faculity.create({
            data: form
        });

        return __context__.json(faculity);
    });

export default faculity;
