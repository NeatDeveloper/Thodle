<script lang="ts">
    import ToggleFullscreen from './ToggleFullscreen.svelte';
    import Theme from './Theme.svelte';
    import { onDestroy, onMount } from 'svelte';
    import { MiniApp } from 'stores';

    let mainButtonStatus = $state.raw(false);
    const miniapp = MiniApp.getContext();

    onMount(() => {
        mainButtonStatus = !!miniapp.mainButtonParams.is_visible;
        miniapp.mainButtonParams.is_visible = false;
    });

    onDestroy(() => {
        miniapp.mainButtonParams.is_visible = mainButtonStatus;
    })
</script>

<article class="settings">
    <h2 class="settings_title">Оформление <ToggleFullscreen /></h2>
    <Theme />
</article>

<style lang="scss">
    .settings {
        &_title {
            position: relative;
            padding: 14px 10px 0;
            font-size: 1.6rem;
            color: var(--section-header-text-color);
            display: flex;
            align-items: center;
            gap: 10px;
            justify-content: center;
        }
    }
    :global .switch {
        --bg-color: var(--button-bg-color) !important;
    }

    :global .icon {
        fill: white;
    }
</style>
