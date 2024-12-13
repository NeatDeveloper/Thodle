<script lang="ts">
    import { page } from '$app/stores';
    import { Link, Icon, Avatar } from '@repo/ui/components';
    import { MiniApp, User } from 'stores';
    import { slide } from 'svelte/transition';

    const user = User.getContext(),
        miniapp = MiniApp.getContext(),
        unvisible: string[] = ['/settings', '/schedule'];

    let title = $state('Thodle');

    const pages = {
        '/': 'Thodle',
        '/schedule': 'Расписание',
        '/settings': 'Настройки',
        '/profile': 'Профиль',
    };

    page.subscribe((pg) => {
        title = pages[pg.url.pathname as keyof typeof pages] || 'Thodle';
    });
</script>

<header class="header">
    {#if miniapp.fullscreen.available && miniapp.fullscreen.active}
        <div class="header-title">
            <h2 class="header-title_text">{title}</h2>
        </div>
    {/if}
    {#if !unvisible.includes($page.url.pathname)}
        <div class="header-content">
            <Link href="/settings" class="settings">
                <Icon name="gear" size={24} />
            </Link>
            <h2 class="header_title">ИБ 2024 | 1 курс</h2>
            {#if user.isReady}
                <Link href={$page.url.pathname == '/profile' ? '/' : '/profile'}>
                    <Avatar
                        src={user.profile.avatar || ''}
                        alt={user.profile.username ||
                            user.profile.firstName ||
                            ''}
                        size={30}
                    />
                </Link>
            {/if}
        </div>
    {/if}
</header>

<style lang="scss">
    .header {
        position: relative;

        &-title {
            position: absolute;
            left: 50%;
            bottom: 100%;
            translate: -50% 0;
            background-color: var(--header-bg-color);
            width: 100%;
            height: calc(
                var(--tg-safe-area-inset-top) +
                    var(--tg-content-safe-area-inset-top)
            );
            padding-bottom: 12px;
            display: flex;
            align-items: end;
            justify-content: center;
        }
        &_title {
            font-size: 1.8rem;
        }
        &-content {
            padding: 5px 10px;
            background-color: var(--section-bg-color);
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 10px;

            :global .settings {
                position: relative;
                display: flex;
                align-items: center;
                justify-self: center;

                &::before {
                    content: '';

                    position: absolute;
                    top: -3px;
                    left: -3px;
                    width: calc(100% + 6px);
                    height: calc(100% + 6px);
                    border-radius: var(--border-radius-small);
                    background-color: var(--accent-color);
                    opacity: 0.1;
                }
            }
        }
    }
    :global :root[data-rounded] {
        .header {
            &-content {
                margin: 10px 10px 0;
                border-radius: var(--border-radius);
                gap: 8px;
            }
        }
    }
</style>
