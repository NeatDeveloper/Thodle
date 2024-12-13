import { factory } from 'helpers';
import prisma from '@repo/db';

const student = factory.createApp().basePath('/student');

student.get('/', async __context__ => {
    const small = __context__.req.query('small');

    let students = [];

    if(typeof small === 'string')
        students = await prisma.profile.findMany();
    else
        students = await prisma.user.findMany();

    return __context__.json(students)
});

export default student;
