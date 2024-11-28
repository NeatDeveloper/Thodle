import { factory } from 'helpers';
import { validate, device } from 'middlewares';
import object from '@repo/utils/object'

const student = factory.createApp().basePath('/student');

student.use(validate);

student.get('/', device, async __context__ => {
    return __context__.json(object.serialize(__context__.get('user') || {}));
});


export default student;
