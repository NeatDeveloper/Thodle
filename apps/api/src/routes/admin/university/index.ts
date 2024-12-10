import { factory } from 'helpers';
import prisma from '@repo/db';
import faculity from './faculity';
import building from './building';

const university = factory.createApp().basePath('/university');

university.get('/', async __context__ => {
    const universities = await prisma.university.findMany();

    return __context__.json(universities)
});
university.get('/:id', async __context__ => {
    const id = __context__.req.param('id');

    const university = await prisma.university.findUnique({
        where: { id: +id }
    });

    return __context__.json(university)
});

university.post('/', async __context__ => {
    const data = await __context__.req.json<{
        name: string;
        shortName: string;
        city: string
    }>();

    const university = await prisma.university.create({
        data
    })

    return __context__.json(university)
});


university.route('/', faculity);
university.route('/', building);

export default university;
