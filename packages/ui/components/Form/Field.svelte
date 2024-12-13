<script lang="ts">
    import type { Snippet } from "svelte";
    import type { HTMLInputAttributes } from "svelte/elements";
    import { generate } from '@repo/utils/crypto';


    type Props = {
        title?: string;
    } & HTMLInputAttributes;

    let { title, ...attr }: Props = $props();

    let id = generate(10);

    $effect.root(() => {
        if(attr?.id)  id += `-${attr.id}`;
    })
</script>

<div class="field">
    {#if id && title}
        <label class="field_label" for={id}>{ title }</label>
    {/if}
    <input {...attr} {id} class="field_input{attr.class ? ` ${attr.class}` : ''}" placeholder={title    }>
</div>


<style lang="scss">
    .field {
        display: flex;
        flex-direction: column;
        gap: 5px;

        &_input {
            border: none;
            background-color: var(--secondary-bg-color);
            color: inherit;
            padding: 4px 10px;
            border-radius: 6px;

        }
    }
</style>
