import { factory } from 'helpers';
import prisma from '@repo/db';

const student = factory.createApp().basePath('/student');

student.get('/', async __context__ => {
    const students = await prisma.user.findMany();

    return __context__.json(students)
});

export default student;

"127"
