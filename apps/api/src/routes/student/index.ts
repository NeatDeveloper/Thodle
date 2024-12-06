import { factory } from 'helpers';
import { validate, device, blockUnauth } from 'middlewares';
import settings from './settings';
import prisma from '@repo/db';

const student = factory.createApp().basePath('/student');

student.use(validate, blockUnauth);

student.get('/me', device, async __context__ => {
    const user = __context__.get('user');

    const me = await prisma.user.findUnique({
        where: { id: user.id }
    })
    return __context__.json(me);
});

student.route('/', settings);

export default student;
