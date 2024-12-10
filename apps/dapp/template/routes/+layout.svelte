<script lang="ts">
    const { children, data } = $props();

    import '@repo/ui/reset';
    import 'styles/index.scss';

    import { dev } from '$app/environment';
    import { Admin, MiniApp, UI, User } from 'stores';
    import { Core } from '@repo/utils/stores';
    import { page } from '$app/stores';
    import { ToastsStore, Toasts } from '@repo/ui/components';

    const miniapp = MiniApp.setContext(),
        core = Core.setContext<App.Core>(),
        user = User.setContext(),
        admin = Admin.setContext(),
        ui = UI.setContext(),
        toasts = ToastsStore.setContext();

    page.subscribe((pg) => {
        miniapp.page = pg;
        user.page = pg;
    });

    core.meta = data;

    const updateTheme = () => {
        if (user.settings.miniapp.preset === 'Thodle') {
            ui.setTheme('Thodle');
            user.settings.miniapp.rounded = true;
            user.settings.miniapp.roundedSettings = false;
            user.settings.miniapp.toastPosition = 'Top';
            user.settings.miniapp.fullscreen = false;
        } else {
            ui.setTheme(user.settings.miniapp.theme);
            ui.setSchema(user.settings.miniapp.schema);
            ui.setAppSchema(
                miniapp.WebApp.colorScheme === 'dark' ? 'Dark' : 'Light'
            );
        }

        if (user.settings.miniapp.rounded) {
            document.documentElement.dataset.rounded = '';

            if (user.settings.miniapp.roundedSettings)
                document.documentElement.dataset.roundedSettings = '';
            else
                document.documentElement.removeAttribute(
                    'data-rounded-settings'
                );
        } else {
            document.documentElement.removeAttribute('data-rounded-settings');
            document.documentElement.removeAttribute('data-rounded');
        }
    };

    user.onUpdateSettings = updateTheme;

    user.onready = async () => {
        if (+user.role?.split('_')[1] > 1) {
            admin.isAdmin = true;
            admin.init(miniapp);
        }

        if (miniapp.fullscreen.available)
            miniapp.setFullscreen(user.settings.miniapp.fullscreen);

        updateTheme();
    };

    miniapp.onready(async () => {
        if (dev && miniapp.mobPlatforms.includes(miniapp.WebApp.platform)) {
            const eruda = (await import('lib/eruda')).default;
            eruda();
        }

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

        ui.updateVars();

        miniapp.WebApp.onEvent('themeChanged', () => {
            ui.setAppSchema(
                miniapp.WebApp.colorScheme === 'dark' ? 'Dark' : 'Light'
            );
        });

        miniapp.mainButtonParams = {
            is_visible: false,
            text: 'Расписание',
        };

        miniapp.WebApp.MainButton.onClick(() => goto('/schedule'));

        await user.init();
    });

    ui.onupdate = (theme) => {
        miniapp.WebApp.setBottomBarColor(
            (theme
                ? theme.bottomBarBgColor
                : miniapp.WebApp.themeParams.bottom_bar_bg_color) || '#ff00ff'
        );
        miniapp.WebApp.setHeaderColor(
            (theme
                ? theme.headerBgColor
                : miniapp.WebApp.themeParams.header_bg_color) || '#ff00ff'
        );
        miniapp.WebApp.setBackgroundColor(
            (theme
                ? theme.headerBgColor
                : miniapp.WebApp.themeParams.bg_color) || '#ff00ff'
        );

        miniapp.mainButtonParams.color = theme
            ? theme.buttonBgColor
            : miniapp.WebApp.themeParams.button_color;
    };

    miniapp.onfullscreen = () => {
        ui.updateVars();
    };

    import { Nav, Header } from 'sections';
    import { goto } from '$app/navigation';
    import { Loader } from 'components';
</script>

<Loader show={!user.isReady} />
<Toasts />

{#if user.isReady}
    <Header />
    <main id="content">
        {@render children()}
    </main>
    <Nav />
{/if}
