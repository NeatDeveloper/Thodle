<script lang="ts">
    import { slide } from 'svelte/transition';
    import { getContext, type Toast } from './context.svelte';

    const toasts = getContext();
</script>

{#snippet item(toast: Toast)}
    <div class="toast" in:slide={{ axis: 'y', duration: 200 }} out:slide={{ axis: 'y' }}>
        {toast.title}
    </div>
{/snippet}

<aside class="toasts" data-position={toasts.position}>
    {#each toasts.list as toast, i (i)}
        {@render item(toast)}
    {/each}
</aside>

<style lang="scss">
    .toast {
        position: relative;
        width: 50%;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.6rem;
        color: white;

        &::before {
            content: "";

            position: absolute;
            top: 0; left: 0;
            width: 100%; height: 100%;
            border-radius: 8px;
            background-color: var(--accent-color);
            opacity: .8;
            backdrop-filter: blur(10px);
            z-index: -1;
        }

        &s {
            --toast-top-padding: 20px;

            position: absolute;
            top: var(--toast-top-padding);
            left: 0;
            padding: 10px;
            width: 100%;
            height: calc(100% - var(--toast-top-padding));
            z-index: 10;
            pointer-events: none;
            user-select: none;
            display: flex;
            justify-content: center;

            &[data-position=Bottom] {
                align-items: end;
            }
        }
    }
</style>
