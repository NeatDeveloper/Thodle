<script lang="ts">
    const { children } = $props();

    import { Header, Sidebar } from 'sections';
    import { Me } from 'stores';

    const me = Me.setMeContext();
</script>

<Header />
<Sidebar />
<article class="root">
    {@render children()}
</article>

<style lang="scss">
    .root {
        grid-area: content;
        padding: var(--app-padding);
        border-radius: 12px;
        background-color: var(--secondary-bg-color);
        height: calc(100vh - (var(--header-height) + var(--app-gap) + var(--app-padding) * 2));
        width: calc(100vw - (var(--sidebar-width) + var(--app-gap) + var(--app-padding) * 2));
        overflow-y: scroll;
        overflow-x: hidden;
    }
</style>
