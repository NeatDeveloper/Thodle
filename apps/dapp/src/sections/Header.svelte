<script lang="ts">
    import { page } from '$app/stores';
    import { Link, Icon, Avatar } from '@repo/ui/components';
    import { MiniApp, User } from 'stores';
    import { slide } from 'svelte/transition';

    const
        user = User.getContext(),
        miniapp = MiniApp.getContext();

    let title = $state('Thodle');

    const pages = {
        '/': 'Thodle',
        '/schedule': 'Расписание',
        '/settings': 'Настройки'
    }

    page.subscribe(pg => {
        title = pages[pg.url.pathname as keyof typeof pages] || 'Thodle';
    });
</script>

<header class="header">
    {#if miniapp.fullscreen.available && miniapp.fullscreen.active}
        <div class="header-title">
            <h2 class="header-title_text">{ title }</h2>
        </div>
    {/if}
    {#if !['/settings', '/schedule'].includes($page.url.pathname)}
        <div
            class="header-content"
            in:slide={{ duration: 100 }}
        >
            <Link href="/settings">
                <Icon name="gear" />
            </Link>
            <h2 class="header_title">ИБ 2024 | 1 курс</h2>
            {#if user.isReady}
                <Avatar
                    src={user.profile.avatar || ''}
                    alt={user.profile.username || user.profile.firstName || ''}
                    size={20}
                />
            {/if}
        </div>
    {/if}
</header>

<style lang="scss">
    .header {
        position: relative;
        &-title {
            position: absolute;
            left: 50%; bottom: 100%;
            translate: -50% 0;
            background-color: var(--header-bg-color);
            width: 100%; height: calc(var(--tg-safe-area-inset-top) + var(--tg-content-safe-area-inset-top));
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
        }
    }
    :global :root[data-rounded] {
        .header {
            &-content {
                margin: 10px 10px 0;
                border-radius: 8px;
                gap: 8px;
            }
        }
    }
</style>
