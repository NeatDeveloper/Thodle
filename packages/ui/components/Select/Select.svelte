<script lang="ts">
    import type { Snippet } from 'svelte';
    import { setContext } from './context.svelte';

    interface Props {
        type?: 'default' | 'row';
        current: string;
        children: Snippet<[]>;
        onupdate?: (key: string) => Promise<void>;
    }

    let {
        type = 'default',
        current = $bindable(),
        children,
        onupdate,
    }: Props = $props();

    const context = setContext();
    if (onupdate) context.onupdate = onupdate;
    context._.current = current;
</script>

<div class="select" {type}>
    <div class="select-list">
        {@render children()}
    </div>
</div>

<style lang="scss">

    .select {
        --select-text-color: inherit;
        --select-bg-color: #232e3c;
        --select-border-radius: 6px;
        --select-accent-color: #6ab3f2;

        background-color: var(--select-bg-color);
        border-radius: var(--select-border-radius);
        width: fit-content;

        &[type='row'] {
            .select {
                &-list {
                    display: flex;
                    gap: 4px;
                    padding: 4px;
                }
            }
        }
    }
</style>
