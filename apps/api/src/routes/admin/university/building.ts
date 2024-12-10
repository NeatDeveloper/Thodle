import { factory } from 'helpers';
import prisma from '@repo/db';

const building = factory.createApp().basePath('/building');

building.get('/:universityID', async __context__ => {
    const universityID = __context__.req.param('universityID');

    const buildings = await prisma.building.findMany({
        where: {
            university: +universityID
        }
    });

    return __context__.json(buildings)
});

building.post('/', async __context__ => {
    const universities = await prisma.university.findMany();

    return __context__.json(universities)
});

export default building;
