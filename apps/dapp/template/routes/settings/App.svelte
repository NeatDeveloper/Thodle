<script lang="ts">
    import { Select, Toggle } from '@repo/ui/components';
    import { MiniApp, UI, User } from 'stores';
    import { Section } from 'components';

    const user = User.getContext(),
        miniapp = MiniApp.getContext(),
        ui = UI.getContext();
</script>

<Section type={user.settings.miniapp.roundedSettings ? 'rounded' : 'default'}>
    {#snippet title()}
        Приложение
    {/snippet}

    {#if miniapp.fullscreen.available}
        {@render fullscreen()}
    {/if}
    {@render toasts()}

    {@render theme()}

    {#if ui.theme !== 'Default'}
        {@render schema()}
    {/if}

    {@render rounded()}
    {@render roundedSettings()}

    {#snippet description()}
        Настройка оформления приложения: цветовая схема и тема
    {/snippet}
</Section>

{#snippet fullscreen()}
    <Section.Block
        icon={miniapp.fullscreen.active ? 'fullscreen' : 'fullscreen-exit'}
        title="Полный экран"
    >
        <Toggle
            checked={miniapp.fullscreen.active}
            update={async (status) => {
                miniapp.setFullscreen(await user.toggleFullscreen(status));
            }}
        />
    </Section.Block>
{/snippet}
{#snippet rounded()}
    <Section.Block
        icon={user.settings.miniapp.rounded ? 'square-fill' : 'square'}
        title="Скругления"
    >
        <Toggle
            checked={user.settings.miniapp.rounded}
            update={user.toggleRounded}
        />
    </Section.Block>
{/snippet}
{#snippet roundedSettings()}
    <Section.Block
        icon={user.settings.miniapp.roundedSettings ? 'square-fill' : 'square'}
        title="Скругления настроек"
    >
        <Toggle
            checked={user.settings.miniapp.roundedSettings}
            update={user.toggleRoundedSettings}
        />
    </Section.Block>
{/snippet}

{#snippet toasts()}
    <Section.Block icon="app" title="Тосты" class="toasts {user.settings.miniapp.toastPosition}">
        <Select
            type="row"
            bind:current={user.settings.miniapp.toastPosition}
            onupdate={async (key) => {
                await user.updateToastsPosition(key as 'T');
            }}
        >
            <Select.Option key="T" value="В" />
            <Select.Option key="B" value="Н" />
            <Select.Option key="TL" value="ВЛ" />
            <Select.Option key="TR" value="ВП" />
            <Select.Option key="BR" value="НП" />
            <Select.Option key="BL" value="НЛ" />
        </Select>
    </Section.Block>
{/snippet}

{#snippet theme()}
    <Section.Block icon="brush" title="Тема" start="Стили">
        <Select
            type="row"
            bind:current={ui.theme}
            onupdate={async (key) => {
                ui.setTheme(key);
                await user.updateTheme(ui.theme, ui.schema);
            }}
        >
            <Select.Option key="Default" value="Устройство" />
            <Select.Option key="Thodle" value="Thodle" />
            <Select.Option key="Mint" value="Mint" />
        </Select>
    </Section.Block>
{/snippet}

{#snippet schema()}
    {@const iconName: IconName =
        ui.schema === 'auto'
            ? 'circle-half'
            : ui.schema === 'dark'
              ? 'moon-stars'
              : 'sun'}
    <Section.Block icon={iconName} title="Схема">
        <Select
            type="row"
            bind:current={ui.schema}
            onupdate={async (key) => {
                ui.setSchema(key as 'auto');
                await user.updateTheme(ui.theme, ui.schema);
            }}
        >
            <Select.Option key="auto" value="Авто" />
            <Select.Option key="light" value="Светлая" />
            <Select.Option key="dark" value="Тёмная" />
        </Select>
    </Section.Block>
{/snippet}

<style lang="scss">
    // :global .toasts {
    //     position: relative;

    //     &::after {
    //         content: '';

    //         position: absolute;
    //         top: 0; left: 0;
    //         width: 4px; height: 4px;
    //         background-color: var(--accent-color);
    //     }
    // }
</style>
