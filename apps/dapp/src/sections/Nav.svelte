<script lang="ts">
    import { beforeNavigate } from '$app/navigation';
    import { page } from '$app/stores';
    import { Icon, Link } from '@repo/ui/components';
    import { slide } from 'svelte/transition';
    import { MiniApp } from 'stores';

    let show = $state.raw(true);
    const miniapp = MiniApp.getContext();

    const unvisibles = ['/settings'];
    const blockPathnames = ['/university', '/group'];

    page.subscribe((pg) => {
        if (unvisibles.includes(pg.url.pathname)) show = false;
        else show = true;
    });

    beforeNavigate((nav) => {
        if (blockPathnames.includes(nav.to?.url.pathname || '')) {
            miniapp.WebApp.HapticFeedback.notificationOccurred('warning');
            miniapp.WebApp.showAlert('Доступ ограничен');
            nav.cancel();
        }
    });

    const links = [
        {
            icon: 'house-door',
            title: 'Главная',
            href: '/',
        },
        {
            icon: 'calendar',
            title: 'Расписание',
            href: '/schedule',
        },
        {
            icon: 'building',
            title: 'Университет',
            href: '/university',
        },
        {
            icon: 'people',
            title: 'Группа',
            href: '/group',
        },
    ];
</script>

{#if show}
    <nav
        class="nav"
        out:slide={{ duration: 100, delay: 0 }}
        in:slide={{ duration: 200, delay: 200 }}
    >
        <ul class="nav-list">
            {#each links as link, i (i)}
                <li class="nav-item">
                    <Link
                        href={link.href}
                        class={blockPathnames.includes(link.href)
                            ? 'block'
                            : ''}
                    >
                        <Icon name={link.icon} />
                        {link.title}
                    </Link>
                </li>
            {/each}
        </ul>
    </nav>
{/if}

<style lang="scss">
    $class: '.nav';

    #{$class} {
        position: absolute;
        bottom: 0;
        left: 0;

        padding: 5px 10px 16px;
        width: 100%;

        background-color: var(--bottom-bar-bg-color);

        &-item {
            width: 100%;
        }

        &-list {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 10px;

            :global .link {
                position: relative;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 5px;
                padding: 4px;
                border-radius: 6px;
                font-size: 1.2rem;
                color: var(--accent-color);
                &.block {
                    opacity: 0.4;
                }

                // background-color: rgba(black, .05);
                transition: all 0.2s ease;
                width: 100%;

                &::before {
                    content: '';

                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    border-radius: 8px;
                    background-color: var(--accent-color);
                    opacity: 0.05;
                }

                svg {
                    width: 20px;
                    fill: var(--accent-color);
                }

                &.active {
                    svg {
                        fill: var(--text-color);
                    }
                    color: var(--text-color);
                    &::before {
                        opacity: 0.2;
                    }
                }
            }
        }
    }
</style>
