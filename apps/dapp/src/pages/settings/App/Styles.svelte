<script lang="ts">
    import { Select } from "@repo/ui/components";
    import { Section } from "components";
    import { UI, User } from "stores";

    const
        ui = UI.getContext(),
        user = User.getContext();

    let schemaIconName = $derived<'circle-half' | 'moon-stars' | 'sun'>(ui.schema === 'Auto'
            ? 'circle-half'
            : ui.schema === 'Dark'
              ? 'moon-stars'
              : 'sun');

</script>

<Section.Block icon="brush" title="Тема" start="Стили">
    <Select
        type="row"
        current={ui.theme}
        onupdate={async (theme) => {
            ui.setTheme(theme);
            await user.updateSettings({
                miniapp: {
                    theme,
                },
            });
        }}
    >
        <Select.Option key="Device" value="Устройство" />
        <Select.Option key="Thodle" value="Thodle" />
        <Select.Option key="Mint" value="Mint" />
    </Select>
</Section.Block>

{#if ui.theme !== 'Device'}
<Section.Block icon={schemaIconName} title="Схема" toPrev>
    <Select
        type="row"
        current={ui.schema}
        onupdate={async (schema) => {
            ui.setSchema(schema);

            await user.updateSettings({
                miniapp: {
                    schema,
                },
            });
        }}
    >
        <Select.Option key="Auto" value="Авто" />
        <Select.Option key="Light" value="Светлая" />
        <Select.Option key="Dark" value="Тёмная" />
    </Select>
</Section.Block>

{/if}
