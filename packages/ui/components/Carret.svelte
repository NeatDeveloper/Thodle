<script lang="ts">
    interface Props {
        rect?: DOMRect;
    }

    let { rect }: Props = $props();
</script>

<div
    class="carret"
    style:--left="{rect?.left}px"
    style:--top="{rect?.top}px"
    style:--width="{rect?.width}px"
    style:--height="{rect?.height}px"
></div>

<style lang="scss">
    .carret {
        // --carret-bg-color: var(--accent-color);

        position: absolute;
        top: var(--top); left: var(--left);
        background-color: var(--carret-bg-color);
        width: var(--width); height: var(--height);
        border-radius: 8px;
        opacity: var(--carret-opacity, 1);
        transition: all .2s linear;
    }
</style>
