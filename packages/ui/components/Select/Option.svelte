<script lang="ts">
    import { onMount, untrack } from 'svelte';
    import { getContext } from './context.svelte';

    interface Props {
        key: string;
        value: string;
    }

    const { key, value }: Props = $props();

    let option = $state<HTMLButtonElement>();

    const context = getContext();

    $effect(() => {
        if(key === context._.current && option) {
            context._.currentElem = option;
        }
    })
</script>

<button
    bind:this={option}
    class="option"
    current={key == context._.current}
    onclick={() => {
        context._.current = key;
        context.onupdate(key);
    }}
>
    {value}
</button>

<style lang="scss">
    .option {
        background: none;
        color: var(--select-text-color);
        border-radius: calc(var(--select-border-radius) * .8);
        padding: 4px 6px;
        letter-spacing: 4%;
        transition: var(--select-transition);
        position: relative;
        text-align: center;

        &[current=true] {
            color: var(--select-text-current-color);
        }
    }
</style>
