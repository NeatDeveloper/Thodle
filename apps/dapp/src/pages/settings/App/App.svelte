<script lang="ts">
    import { Select, Toggle } from '@repo/ui/components';
    import { MiniApp, UI, User } from 'stores';
    import { Section } from 'components';
    import Styles from './Styles.svelte';
    import Rounded from './Rounded.svelte';
    import Toasts from './Toasts.svelte';

    const user = User.getContext(),
        miniapp = MiniApp.getContext(),
        ui = UI.getContext();
</script>

<Section
    type={user.settings.miniapp.roundedSettings ? 'rounded' : 'default'}
>
    {#snippet title()}
        Приложение
    {/snippet}

    {@render pressets()}


    {#if user.settings.miniapp.preset == 'Custom'}
        <Styles />

        <Rounded />

        <Toasts />

        {#if miniapp.fullscreen.available}
            {@render fullscreen()}
        {/if}
    {/if}

    {#snippet description()}
        Настройка оформления приложения: цветовая схема и тема
    {/snippet}
</Section>

{#snippet pressets()}
    <Section.Block icon="back" title="Пресет" toPrev>
        <Select
            type="row"
            current={user.settings.miniapp.preset}
            onupdate={async (preset) => {
                await user.updateSettings({
                    miniapp: {
                        preset,
                    },
                });
            }}
        >
            <Select.Option key="Thodle" value="Thodle" />
            <Select.Option key="Custom" value="Свой" />
        </Select>
    </Section.Block>
{/snippet}

{#snippet fullscreen()}
    <Section.Block
        icon={miniapp.fullscreen.active ? 'fullscreen' : 'fullscreen-exit'}
        title="Полный экран"
        toPrev
    >
        <Toggle
            checked={miniapp.fullscreen.active}
            update={async (fullscreen) => {
                const result = await user.updateSettings({
                    miniapp: {
                        fullscreen,
                    },
                });

                if (result) {
                    miniapp.setFullscreen(result.miniapp.fullscreen);
                } else {
                    miniapp.fullscreen.active = !fullscreen;
                }
            }}
        />
    </Section.Block>
{/snippet}
