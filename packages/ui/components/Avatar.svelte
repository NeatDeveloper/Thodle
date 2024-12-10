<script lang="ts">
    interface Props {
        src?: string;
        alt?: string;
        size?: 20 | 24 | 28 | 40 | 48 | 96;
    };

    const { src = '', alt = '', size = 24 }: Props = $props();
</script>


<div class="avatar" style="--size: {size};">
    <img {src} {alt} class="avatar_image">
</div>

<style lang="scss">
    .avatar {
        position: relative;
        &_image {
            aspect-ratio: 1;
            object-fit: contain;
            width: calc(var(--size) * 2px);
            border-radius: 50%;
        }
    }
</style>
