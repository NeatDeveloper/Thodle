import { factory } from 'helpers';
import prisma from '@repo/db';

const university = factory.createApp().basePath('/university');

university.get('/', async __context__ => {
    const universities = await prisma.university.findMany();

    return __context__.json(universities)
});

export default university;
