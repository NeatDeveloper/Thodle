import { factory } from 'helpers';

const users = factory.createApp().basePath('/users');

users.get('/', async __context__ => {
    const id = __context__.req.param('name');

    return __context__.json({ status: 'ok' })
})

users.get('/', async __context__ => {
    const id = __context__.req.query('sdf');

    return __context__.json({ status: 'ok' })
})

users.put('/', async __context__ => {
    return __context__.json({ status: 'ok' })
})

export default users;
