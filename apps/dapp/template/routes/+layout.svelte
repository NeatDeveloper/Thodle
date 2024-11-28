<script lang="ts">
    const { children, data } = $props();

    if (browser) dev && import('lib/eruda').then((erudaInit) => erudaInit.default());

    import '@repo/ui/reset';
    import 'styles/index.scss';

    import { browser, dev } from '$app/environment';
    import { MiniApp, User } from 'stores';
    import { Core } from '@repo/utils/stores';

    const miniapp = MiniApp.setMiniAppContext();
    const core = Core.setCoreContext<App.Core>();
    const user = User.setUserContext();

    core.meta = data;

    miniapp.onready(async () => {
        core.apiOptions = {
            hooks: {
                beforeRequest: [
                    (request) => {
                        request.headers.set(
                            'Authorization',
                            `tma ${miniapp.WebApp.initData}`
                        );
                    },
                ],
            },
        };

        user.api = core.api;

        await user.init();
    });
</script>

{@render children()}
