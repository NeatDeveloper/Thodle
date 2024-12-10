<script lang="ts">
    import App from './App/App.svelte';
    import { onDestroy, onMount } from 'svelte';
    import { MiniApp } from 'stores';
    import Mailing from './Mailing.svelte';

    let mainButtonStatus = $state.raw(false);
    const miniapp = MiniApp.getContext();

    onMount(() => {
        mainButtonStatus = !!miniapp.mainButtonParams.is_visible;
        miniapp.mainButtonParams.is_visible = false;
    });

    onDestroy(() => {
        miniapp.mainButtonParams.is_visible = mainButtonStatus;
    });
</script>

<article class="settings">
    <App />
    <Mailing />
</article>
