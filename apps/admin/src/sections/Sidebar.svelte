<script>
	import { Nav } from ".";

</script>

<aside class="sidebar">
    <div class="sidebar-content">
        <Nav />
    </div>
</aside>

<style lang="scss">
    .sidebar {
        grid-area: sidebar;
        padding-top: calc(var(--header-height) + 15px);

        &-content {
            padding-top: 10px;
            height: 100%;
            background-color: var(--bg-secondary-color);
            border-radius: var(--border-radius);
        }
    }
</style>
