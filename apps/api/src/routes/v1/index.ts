import { factory } from 'helpers';

import { CreateException } from 'helpers';

const v1 = factory.createApp().basePath('/v1');


v1.get('/', async __context__ => {
    throw CreateException('BAD_GATEWAY', 'Опа, чирик...');
    return __context__.json({ message: 'Hello, world!' });
});














v1.put('/', async __context__ => {
    return __context__.json({ message: 'Hello, world!' });
});

export default v1;
