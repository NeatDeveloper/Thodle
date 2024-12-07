<script lang="ts">
    import { getContext, type Toast } from './context.svelte';

    const toasts = getContext();
</script>

{#snippet item(toast: Toast)}

{/snippet}

<aside class="toasts">
    {#each toasts.list as toast, i(i)}
        {@render item(toast)}
    {/each}
</aside>
