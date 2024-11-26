<script lang="ts">
    import erudaInit from 'lib/eruda';
    import { browser, dev } from '$app/environment';
    import { MiniApp } from 'stores';

    const { children } = $props();

    if (browser) {
        dev && erudaInit();
        const miniapp = MiniApp.setMiniAppContext();
    }
</script>

{@render children()}
