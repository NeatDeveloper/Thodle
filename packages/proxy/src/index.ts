import { insert } from '@repo/utils/string';


try {
    const FormatedConfig = insert(await Bun.file(`${import.meta.dirname}/Caddyfile`).text(), {
        hostName: Bun.env.APP_HOST,
        sitePort: Bun.env.SITE_PORT,
        botPort: Bun.env.BOT_PORT,
        dappPort: Bun.env.DAPP_PORT,
        docPort: Bun.env.DOC_PORT,
        apiPort: Bun.env.API_PORT,
        adminPort: Bun.env.ADMIN_PORT,
    });

    const response = await fetch('http://localhost:2019/load', {
        method: 'post',
        headers: {
            'Content-Type': 'text/caddyfile',
        },
        body: FormatedConfig
    });

    if (response.status == 200) console.log('Proxy server upgrade!')
    else console.log("It's not upgrade!")

} catch {
    console.log('Ошибка при обновлении Caddyfile');
}
