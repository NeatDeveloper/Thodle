import { factory } from 'helpers';

import { Unauthorized } from 'exceptions';

const v1 = factory.createApp().basePath('/v1');

v1.get('/', async __context__ => {
    throw Unauthorized();
    return __context__.json({ message: 'Hello, world!' });
});
v1.put('/', async __context__ => {
    return __context__.json({ message: 'Hello, world!' });
});

export default v1;
