<script lang="ts">
    interface Props {
        src?: string;
        alt?: string;
        size?: number;
    };

    const { src = '', alt = '', size = 24 }: Props = $props();
</script>


<div class="avatar" style="--size: {size}px;">
    <img {src} {alt} class="avatar_image">
</div>

<style lang="scss">
    .avatar {
        position: relative;
        &_image {
            aspect-ratio: 1;
            object-fit: contain;
            width: var(--size);
            height: var(--size);
            object-fit: cover;
            border-radius: 50%;
        }
    }
</style>
