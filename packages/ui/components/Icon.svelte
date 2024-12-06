<script lang="ts">
    interface Props {
        name: string;
    }

    const { name }: Props = $props();
</script>

<svg class="icon" viewBox="0 0 35 35">
    <use xlink:href="/sprite.svg#{name}"></use>
</svg>

<style lang="scss">
    .icon {
        width: 28px;
        stroke-width: 1;
        aspect-ratio: 1;
    }
</style>
