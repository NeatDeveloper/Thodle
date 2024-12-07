<script lang="ts">
    import { getContext } from './context.svelte';

    interface Props {
        key: string;
        value: string;
    }

    const { key, value }: Props = $props();

    const context = getContext();
</script>

<button
    class="option"
    current={key == context._.current}
    onclick={() => {
        context.click(key);
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

        &[current=true] {
            color: var(--select-text-current-color);
            background-color: var(--select-accent-color);
        }
    }
</style>
