<script lang="ts">
    import { Link } from '@repo/ui/components';
	import { Carret } from '@repo/ui/components';

    let carret = $state<DOMRect>();
</script>

<nav class="nav">
    <Carret rect={carret} />
    <ul class="nav-list">
        <li class="nav_item">
            <Link bind:rect={carret} href="/">Главная</Link>
        </li>
        <li class="nav_item">
            <Link bind:rect={carret} href="/mailing">Рассылка</Link>
        </li>
        <li class="nav_item">
            <Link bind:rect={carret} href="/schedule">Расписание</Link>
        </li>
        <li class="nav_item">
            <Link bind:rect={carret} href="/student">Студенты</Link>
        </li>
        <li class="nav_item">
            <Link bind:rect={carret} href="/university">Университеты</Link>
        </li>
    </ul>
</nav>

<style lang="scss">
    .nav {
        --carret-bg-color: var(--accent-color);
        &-list {
            position: relative;
            display: flex;
            flex-direction: column;
            gap: 5px;

            :global .link {
                display: inline-block;
                padding: 10px;
                width: 100%;
                border-radius: 8px;
                font-size: 1.6rem;
                font-weight: 600;

                &.active {
                    color: var(--button-text-color);
                }
            }
        }
    }
</style>
