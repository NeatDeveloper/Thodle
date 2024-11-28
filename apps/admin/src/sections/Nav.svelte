<script lang="ts">
    import { Link } from '@repo/ui/components';
</script>

<nav class="nav">
    <ul class="nav-list">
        <li class="nav_item">
            <Link href="/">Главная</Link>
        </li>
        <li class="nav_item">
            <Link href="/mailing">Рассылка</Link>
        </li>
        <li class="nav_item">
            <Link href="/schedule">Расписание</Link>
        </li>
        <li class="nav_item">
            <Link href="/student">Студенты</Link>
        </li>
        <li class="nav_item">
            <Link href="/university">Университеты</Link>
        </li>
    </ul>
</nav>

<style lang="scss">
    .nav {
        &-list {
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
                    background-color: var(--link-color);
                }
            }
        }
    }
</style>
