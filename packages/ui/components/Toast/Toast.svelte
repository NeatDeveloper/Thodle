<script lang="ts">
    import { getContext, type Toast } from './context.svelte';

    const toasts = getContext();
</script>

{#snippet item(toast: Toast)}
<div class="toast">
    { toast.title }
</div>
{/snippet}

<aside class="toasts">
    {#each toasts.list as toast, i(i)}
        {@render item(toast)}
    {/each}
</aside>


<style lang="scss">
    .toast {
        width: 50%; height: 30px;
        background-color: var(--accent-color);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
        font-size: 1.6rem;

        &s {
            position: absolute;
            top: 0; left: 0;
            padding: 10px;
            width: 100%; height: 100%;
            z-index: 100;
            pointer-events: none;
            user-select: none;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
</style>
