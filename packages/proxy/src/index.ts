import { insert } from '@repo/utils/string';
import { getApp, getPorts } from '@repo/utils/env';

const
    ports = getPorts(),
    app = getApp();

try {
    const FormatedConfig = insert(await Bun.file(`${import.meta.dirname}/Caddyfile`).text(), {
        hostName: new URL(app.APP_HOST).hostname,
        sitePort: ports.SITE_PORT,
        botPort: ports.BOT_PORT,
        miniappPort: ports.MINIAPP_PORT,
        apiPort: ports.API_PORT,
        adminPort: ports.ADMIN_PORT,
    });

    const response = await fetch('http://localhost:2019/load', {
        method: 'post',
        headers: {
            'Content-Type': 'text/caddyfile',
        },
        body: FormatedConfig
    });

    if (response.status == 200) console.log('Proxy server upgrade!')
    else console.log(await response.text())

} catch {
    console.log('Ошибка при обновлении Caddyfile');
}
