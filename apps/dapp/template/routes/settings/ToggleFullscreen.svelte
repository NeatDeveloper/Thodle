<script>
    import { Icon, Toggle } from "@repo/ui/components";
    import { MiniApp, User } from "stores";

    const
        miniapp = MiniApp.getContext(),
        user = User.getContext();
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
{#if miniapp.fullscreen.available}
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <div class="fullscreen" onclick={async () => {
         miniapp.setFullscreen(await user.toggleFullscreen(!user.settings?.fullscreen));
    }}>
        <Icon name="fullscreen{miniapp.fullscreen.active ? '-exit' : ''}" />
    </div>
{/if}

<style lang="scss">
    .fullscreen {
        position: absolute;
        right: 10px;

        :global .icon {
            fill: var(--accent-color);
        }
    }
</style>
