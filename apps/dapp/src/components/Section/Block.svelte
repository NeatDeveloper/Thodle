<script lang="ts">
    import type { Snippet } from 'svelte';
    import { Icon } from '@repo/ui/components';

    interface Props {
        icon?: IconName;
        children: Snippet<[]>;
        title?: string;
        class?: string;
        start?: string;
    }

    const { icon, children, title, class: __class, start }: Props = $props();
</script>

<div class="block{__class ? ` ${__class}` : ''}" {start}>
    {#if title}
        <div class="block_title">
            {#if icon}
                <Icon name={icon} class="block_icon" />
            {/if}

            {title}
        </div>
    {/if}

    <div class="block-content">
        {@render children()}
    </div>
</div>

<style lang="scss">
    .block {
        padding: 10px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;

        &:not(:first-child) {
            border-top: 1px solid var(--section-separator-color);
        }

        &:first-child {
            padding-top: 0;
        }
        &:last-child {
            padding-bottom: 0;
        }

        &_title {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        &[start] {
            position: relative;
            padding-top: 16px;
            margin-top: 8px;

            border-top-color: var(--accent-color);

            &::before {
                content: attr(start);
                position: absolute;
                top: calc(-.6rem - 2px);
                left: 0;
                padding: 2px 8px;
                border-radius: 3px;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: var(--accent-color);
                color: var(--button-text-color);
                font-size: 1.2rem;
                line-height: 1.2rem;
            }
        }
    }
</style>
