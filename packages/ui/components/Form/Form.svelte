<script lang="ts">
    import type { Snippet } from "svelte";
    import type { HTMLFormAttributes } from "svelte/elements";

    type Props = {
        children: Snippet<[]>;
        title?: string;
    } & HTMLFormAttributes;

    const { children, title, ...attrs }: Props = $props();
</script>

<form {...attrs} class="form{attrs.class ? ` ${attrs.class}` : ''}">
    {#if title}
        <h3 class="form_title">{ title }</h3>
    {/if}
    {@render children()}
</form>

<style lang="scss">
    .form {
        padding: 10px;
        border-radius: 12px;
        background-color: var(--section-bg-color);
        width: fit-content;
        display: flex;
        flex-direction: column;
        gap: 10px;

        &_title {
            margin-bottom: 10px;
        }
    }
</style>
