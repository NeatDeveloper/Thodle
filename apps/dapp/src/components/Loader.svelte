<script lang="ts">
    import { fade } from "svelte/transition";

    interface Props {
        show: boolean;
    }

    let { show }: Props = $props();

</script>

{#if show}
<aside class="loader" out:fade>
    <h2>Загрузка</h2>
</aside>
{/if}

<style lang="scss">
    .loader {
        position: absolute;
        top: 0; left: 0;
        width: 100%; height: 100%;
        background-color: var(--secondary-bg-color);
        z-index: 1000;

        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--text-color, white)
    }
</style>
