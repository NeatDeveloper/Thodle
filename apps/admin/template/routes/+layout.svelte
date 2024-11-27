<script lang="ts">
    const { children, data } = $props();

    import { Nav } from 'sections';
    import { Core } from 'stores';

    const core = Core.setCoreContext();

    core.meta = data;
</script>

<Nav />
{@render children()}
