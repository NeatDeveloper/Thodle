<script lang="ts">
    import { Icon, Select } from '@repo/ui/components';
    import { MiniApp, UI, User } from 'stores';

    const miniapp = MiniApp.getContext(),
        user = User.getContext(),
        ui = UI.getContext();
</script>

<section class="theme section settings">
    <div class="theme-content section-items theme">
        <div class="theme-item section-item">
            <div class="theme_key">
                <Icon name="theme" />
                <h3 class="theme_title">Тема</h3>
            </div>
            <div class="theme-data section-data">
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
            </div>
        </div>
        {#if ui.theme !== 'Default'}
            <div class="theme-item section-item">
                <div class="theme_key">
                    <Icon name={ui.schema === 'dark' ? 'moon' : 'sun'} />
                    <h3 class="theme_title">Схема</h3>
                </div>
                <div class="theme-data section-data">
                    <Select
                        type="row"
                        bind:current={ui.schema}
                        onupdate={async (key) => {
                            ui.setSchema(key);
                            await user.updateTheme(ui.theme, ui.schema);
                        }}
                    >
                        <Select.Option key="auto" value="Авто" />
                        <Select.Option key="light" value="Светлая" />
                        <Select.Option key="dark" value="Тёмная" />
                    </Select>
                </div>
            </div>
        {/if}
    </div>
</section>

<style lang="scss">
    .theme {
        &-item {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        &_key {
            display: flex;
            align-items: center;
            gap: 10px;

            :global .icon {
                aspect-ratio: 1;
                width: 22px;
                stroke: var(--accent-color);
                fill: none;
            }
        }

        &_title {
            font-size: 1.6rem;
            font-weight: 600;
        }


        :global .select {
            --select-bg-color: var(--secondary-bg-color);
            --select-text-current-color: var(--button-text-color);
            --select-text-color: var(--text-color);
            --select-accent-color: var(--accent-color);
        }
    }
</style>
