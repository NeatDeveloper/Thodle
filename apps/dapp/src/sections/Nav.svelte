<script lang="ts">
    import { beforeNavigate } from '$app/navigation';
    import { page } from '$app/stores';
    import { Icon, Link } from '@repo/ui/components';
    import { slide } from 'svelte/transition';
    import { MiniApp, User } from 'stores';
    import { date } from '@repo/utils/other';

    let show = $state.raw(true);
    const miniapp = MiniApp.getContext();
    const user = User.getContext();

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
            icon: 'calendar2',
            title: 'Расписание',
            href: '/schedule',
        },
        {
            icon: 'building',
            title: 'АГУ',
            href: '/university',
        },
        {
            icon: 'people',
            title: 'ИБ 2024',
            href: '/group',
        },
    ];

    let carret = $state({
        left: 0,
        width: 0,
        height: 0,
        top: 0
    });

    let nav = $state<HTMLElement>();
</script>

{#if show}
    <nav
    bind:this={nav}
        class="nav"
        out:slide={{ duration: 100, delay: 0 }}
        in:slide={{ duration: 200, delay: 200 }}
    >
    <div class="nav_carret" style="--left: {carret.left}px;--width: {carret.width}px;--height: {carret.height}px;"></div>

        <ul class="nav-list">
            {#each links as link, i (i)}
                <li class="nav-item">
                    <Link
                        onactivate={link => {
                            const rect = link.getBoundingClientRect()
                            carret.left = rect.x - (nav?.getBoundingClientRect().left || 0);
                            carret.width = rect.width;
                            carret.top = rect.top;
                            carret.height = rect.height;
                        }}
                        href={link.href}
                        class={blockPathnames.includes(link.href)
                            ? 'block'
                            : ''}
                    >
                        {#if link.title === 'Расписание'}
                            <span class="nav-item_date"
                                >{date().format('D')}</span
                            >
                        {/if}
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

        &_carret {
            position: absolute;
            top: var(--top); left: (var(--left));
            width: var(--width);
            height: var(--height);
            background-color: var(--accent-color);
            opacity: .2;
            border-radius: 8px;
            transition: all .2s ease;

        }

        &-item {
            width: 100%;

            :global &_date {
                position: absolute;
                top: 11px;
                left: 50%;
                translate: -50% 0;
                font-size: 0.9rem;
                text-align: center;
            }
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
                    // &::before {
                    //     opacity: 0.2;
                    // }
                }
            }
        }
    }

    :global :root[data-rounded] {
        .nav {
            bottom: 11px;
            left: 10px;
            width: calc(100% - 20px);
            padding: 5px;
            border-radius: 10px;

            .nav-list {
                gap: 6px;
            }
        }
    }
</style>
