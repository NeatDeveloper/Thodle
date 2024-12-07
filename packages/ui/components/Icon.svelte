<script lang="ts">
    interface Props {
        name: IconName;
        size?: number;
        class?: string;
    }

    const { name, size = 24, class: __class }: Props = $props();
</script>

<svg class="icon{__class ? ` ${__class}` : ''}" viewBox="0 0 35 35" style="--size: {size}px;">
    <use xlink:href="/icons.svg#{name}"></use>
</svg>

<style lang="scss">
    .icon {
        width: var(--size);
        aspect-ratio: 1;
        fill: var(--accent-color);
    }
</style>
