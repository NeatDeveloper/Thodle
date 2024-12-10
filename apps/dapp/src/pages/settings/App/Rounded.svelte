<script lang="ts">
    import { Toggle } from '@repo/ui/components';
    import { Section } from 'components';
    import { User } from 'stores';

    const user = User.getContext();
</script>

<Section.Block
    icon="calendar"
    title="Скругление"
    class="rounded{user.settings.miniapp.rounded ? ' iconRound' : ''}"
>
    <Toggle
        checked={user.settings.miniapp.rounded}
        update={async (rounded) => {
            await user.updateSettings({
                miniapp: {
                    rounded,
                },
            });
        }}
    />
</Section.Block>

<Section.Block
    icon="gear"
    title="В настройках"
    class="rounded{user.settings.miniapp.roundedSettings ? ' iconRound' : ''}"
    toPrev
>
    <Toggle
        checked={user.settings.miniapp.roundedSettings}
        update={async (roundedSettings) => {
            await user.updateSettings({
                miniapp: {
                    roundedSettings,
                },
            });
        }}
    />
</Section.Block>


<style lang="scss">
    @use './styles.scss';

    :global .roundedSettings {
        @include styles.rounded();
    }
    :global .rounded {
        @include styles.rounded();
    }
</style>
