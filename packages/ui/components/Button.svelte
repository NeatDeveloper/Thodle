<script lang="ts">
    import type { Snippet } from "svelte";
    import type { HTMLButtonAttributes } from "svelte/elements";

    type Props = {
        children: Snippet<[]>;
    } & HTMLButtonAttributes;

    let { children, ...attrs }: Props = $props();
</script>

<button
    {...attrs}
    class="button{attrs.class ? ` ${attrs.class}` : ''}"
>
    {@render children()}
</button>

<style lang="scss">
    .button {
        color: var(--button-text-color, inherit);
        background-color: var(--button-bg-color, #5289c1);
        border: none;
        font-size: 1.5rem;
        font-weight: 600;
        border-radius: var(--button-border-radius, 8px);
        padding: 5px 10px;
    }
</style>
