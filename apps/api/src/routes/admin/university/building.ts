import { CreateException, factory } from 'helpers';
import prisma from '@repo/db';
import { zValidator } from '@hono/zod-validator';
import { buildingSchema, type BuildingSchema } from '@repo/schemas';

const building = factory.createApp().basePath('/building');


building.get('/:id', async __context__ => {
    const id = __context__.req.param('id');

    const building = await prisma.building.findMany({
        where: { id: +id }
    });

    return __context__.json(building)
});
building.get('/', async __context__ => {

    const buildings = await prisma.building.findMany();

    return __context__.json(buildings)
});

building.post('/',
    zValidator('form', buildingSchema, async result => {
        if (!result.success) throw CreateException('BAD_REQUEST', { message: result.error.message })
    }),
    async __context__ => {
        const form = await __context__.req.parseBody<BuildingSchema>();

        let building = await prisma.building.findFirst({
            where: {
                university: form.university,
                name: form.name,
            }
        });

        if (building) throw CreateException('BAD_REQUEST');

        building = await prisma.building.create({
            data: form
        });

        return __context__.json(building);
    });

export default building;
