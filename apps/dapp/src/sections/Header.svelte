<script lang="ts">
    import { page } from "$app/stores";

    let title = $derived.by<string>(() => {
        const titles = {
            '/': 'Главная',
            '/week': 'Расписание',
            '/settings': 'Настройки'
        }
        return titles[$page.url.pathname as keyof typeof titles] || 'Thodle';
    });
</script>

<header class="header">
    <h2>{ title }</h2>
</header>

<style lang="scss">
    .header {
        display: flex;
        position: absolute;
        top: 0; left: 0;
        width: 100%; height: calc(var(--tg-safe-area-inset-top) + var(--tg-content-safe-area-inset-top));
        padding-bottom: 14px;
        background-color: var(--header-bg-color);

        justify-content: center;
        align-items: end;

        h2 {
            text-align: center;
            font-size: 2rem;
        }
    }
</style>
