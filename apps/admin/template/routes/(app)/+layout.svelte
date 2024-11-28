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
    }
</style>
