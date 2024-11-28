import { factory } from 'helpers';
import prisma from '@repo/db';

const mailing = factory.createApp().basePath('/mailing');

mailing.get('/', async __context__ => {
    return __context__.text('API сервиса Thodle')
});

mailing.post('/', async __context__ => {
    const { message } = await __context__.req.json<{ message: string }>();

    const settings = await prisma.settings.findMany({
        where: {
            tgID: {
                not: 1934663397
            },
            mailing: {
                canISend: true
            }
        },
        select: {
            tgID: true
        }
    });


    const ids = settings.map(setting => setting.tgID);

    const mailing = __context__.get('queues').mailing;

    for(const id of ids)
        mailing.add({ id: Number(id), message });

    return __context__.text('ok');
})


export default mailing;
