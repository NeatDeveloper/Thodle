import { factory } from 'helpers';
import prisma from '@repo/db';

const faculity = factory.createApp().basePath('/faculity');

faculity.get('/:universityID', async __context__ => {
    const universityID = __context__.req.param('universityID');

    const faculities = await prisma.faculity.findMany({
        where: {
            university: +universityID
        }
    });

    return __context__.json(faculities)
});

faculity.post('/', async __context__ => {
    const universities = await prisma.university.findMany();

    return __context__.json(universities)
});

export default faculity;
