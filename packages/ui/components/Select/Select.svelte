<script lang="ts" generics="T">
    import { type Snippet } from 'svelte';
    import { setContext } from './context.svelte';

    interface Props {
        type?: 'default' | 'row';
        current: T;
        children: Snippet<[]>;
        onupdate?: (key: T) => Promise<void>;
    }

    let {
        type = 'default',
        current,
        children,
        onupdate,
    }: Props = $props();

    const context = setContext<T>();

    context._.current = current;

    if (onupdate) context.onupdate = onupdate;
</script>

<div class="select" {type}>
    <div class="select-list" bind:this={context._.selectElem}>
        <div
            class="carret"
            style="--width: {context._.elemRect?.width ||
                0}px; --left: {(context._.elemRect?.x || 0) -
                (context._.selectRect?.x || 0)}px;"
        ></div>
        {@render children()}
    </div>
</div>

<style lang="scss">
    .select {
        --select-transition: all 0.2s linear;
        --select-text-color: inherit;
        --select-bg-color: #232e3c;
        --select-border-radius: 6px;
        --select-accent-color: #6ab3f2;
        --select-text-current-color: white;

        background-color: var(--select-bg-color);
        border-radius: var(--select-border-radius);
        width: fit-content;

        &[type='row'] {
            .select {
                &-list {
                    position: relative;
                    display: flex;
                    gap: 4px;
                    padding: 4px;

                    .carret {
                        position: absolute;
                        top: 4px;
                        left: var(--left);
                        background-color: var(--select-accent-color);
                        height: calc(100% - 8px);
                        width: var(--width);
                        transition: all 0.2s ease;
                        border-radius: calc(var(--select-border-radius) * 0.8);
                    }
                }
            }
        }
    }
</style>
