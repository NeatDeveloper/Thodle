<script lang="ts">
    import { beforeNavigate } from '$app/navigation';
    import { page } from '$app/stores';
    import { Icon, Link, Carret } from '@repo/ui/components';
    import { slide } from 'svelte/transition';
    import { MiniApp } from 'stores';
    import { date } from '@repo/utils/other';

    let show = $state.raw(true),
        carret = $state<DOMRect>();

    const miniapp = MiniApp.getContext(),
        unvisibles = ['/settings', '/profile'],
        blockPathnames: string[] = ['/university', '/group'],
        links: { icon: IconName; title: string; href: string }[] = [
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

    page.subscribe((pg) => {
        if (unvisibles.includes(pg.url.pathname)) show = false;
        else show = true;
    });

    beforeNavigate((nav) => {
        if (blockPathnames.includes(nav.to?.url.pathname || '')) {
            miniapp.WebApp.HapticFeedback.notificationOccurred('warning');
            miniapp.WebApp.showAlert('В разработке');
            nav.cancel();
        }
    });
</script>

{#if show}
    <nav class="nav" in:slide={{ duration: 100 }} out:slide={{ duration: 100 }}>
        <Carret rect={carret} />

        <ul class="nav-list">
            {#each links as link, i (i)}
                <li class="nav-item">
                    <Link
                        bind:rect={carret}
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
        position: relative;
        width: 100%;

        --carret-bg-color: var(--accent-color);
        --carret-opacity: 0.3;

        :global .carret {
            top: 5px !important;
            border-radius: var(--border-radius-small) !important;
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
            padding: 5px 10px 14px;
            background-color: var(--bottom-bar-bg-color);
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 8px;

            :global .link {
                position: relative;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 5px;
                padding: 4px 0;
                border-radius: var(--border-radius-small);
                font-size: 1.2rem;
                color: var(--accent-color);

                &.block {
                    opacity: 0.4;
                }

                transition: all 0.2s ease;
                width: 100%;

                &::before {
                    content: '';

                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    border-radius: var(--border-radius-small);
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
                }
            }
        }
    }

    :global :root[data-rounded] {
        .nav {
            &-list {
                margin: 0 10px 14px;
                padding: 5px;
                border-radius: var(--border-radius);
                gap: 8px;
            }
        }
    }
</style>
