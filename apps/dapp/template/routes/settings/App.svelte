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

    {@render pressets()}

    {#if user.settings.miniapp.presset !== 'Custom'}
        {@render theme()}

        {#if ui.theme !== 'Device'}
            {@render schema()}
        {/if}

        {@render rounded()}

        {#if miniapp.fullscreen.available}
            {@render fullscreen()}
        {/if}

        {@render toasts()}
    {/if}

    {#snippet description()}
        Настройка оформления приложения: цветовая схема и тема
    {/snippet}
</Section>

{#snippet pressets()}
    <Section.Block icon="back" title="Прессеты" toPrev>
        <Select type="row" current={user.settings.miniapp.presset} onupdate={async key => {
            console.log(key)
            await user.updateSettings({
                miniapp: {
                    presset: key as 'Custom'
                }
            })
        }}>
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
            update={async (status) => {
                miniapp.setFullscreen(await user.updateSettings({
                    miniapp: {
                        fullscreen: status
                    }
                }));
            }}
        />
    </Section.Block>
{/snippet}

{#snippet rounded()}
    <Section.Block
        icon="calendar"
        title="Скругления"
        class="rounded{user.settings.miniapp.rounded ? ' iconRound' : ''}"
        start="Структура"
    >
        <Toggle
            checked={user.settings.miniapp.rounded}
            update={async status => {
                await user.updateSettings({
                    miniapp: {
                        rounded: status
                    }
                })
            }}
        />
    </Section.Block>
{/snippet}

{#snippet toasts()}
    <Section.Block
        title="Тосты"
        class="toasts {user.settings.miniapp.toastPosition}{user.settings
            .miniapp.rounded
            ? ' iconRound'
            : ''}"
        start="Уведомления"
    >
        <Select
            type="row"
            current={user.settings.miniapp.toastPosition}
            onupdate={async (key) => {
                await user.updateSettings({
                    miniapp: {
                        toastPosition: key as 'Top'
                    }
                })
            }}
        >
            <Select.Option key="Top" value="Верху" />
            <Select.Option key="Bottom" value="Внизу" />
        </Select>
    </Section.Block>
{/snippet}

{#snippet theme()}
    <Section.Block icon="brush" title="Тема" start="Стили">
        <Select
            type="row"
            current={ui.theme}
            onupdate={async (key) => {
                ui.setTheme(key);
                await user.updateSettings({
                    miniapp: {
                        theme: ui.theme as 'Thodle'
                    }
                })
            }}
        >
            <Select.Option key="Device" value="Устройство" />
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
    <Section.Block icon={iconName} title="Схема" toPrev>
        <Select
            type="row"
            current={ui.schema}
            onupdate={async (key) => {
                ui.setSchema(key as 'auto');
                await user.updateSettings({
                    miniapp: {
                        schema: ui.schema as 'Dark'
                    }
                })
            }}
        >
            <Select.Option key="Auto" value="Авто" />
            <Select.Option key="Light" value="Светлая" />
            <Select.Option key="Dark" value="Тёмная" />
        </Select>
    </Section.Block>
{/snippet}

<style lang="scss">
    @mixin icon {
        .icon {
            aspect-ratio: 1;
            padding: 4px;
            width: 24px;
            border: 1px solid var(--accent-color);
            transition: all 0.2s ease;
        }
    }
    @mixin rounded {
        @include icon();

        .icon {
            aspect-ratio: 1.2 / 1;
        }

        &.iconRound {
            .icon {
                aspect-ratio: 1;
                border-radius: 4px;
            }
        }
    }
    :global .roundedSettings {
        @include rounded();
    }
    :global .rounded {
        @include rounded();
    }

    :global .toasts {
        @include icon();

        .icon {
            position: relative;

            &::before {
                content: '';

                position: absolute;
                top: 50%;
                left: 50%;
                translate: -50% -50%;
                width: 13px;
                height: 7px;
                border-radius: 4px;
                border: 2px solid var(--section-bg-color);
                background-color: var(--accent-color);
                transition: all 0.2s ease;
            }
        }

        &.Top {
            .icon::before {
                translate: -50% -14px;
            }
        }
        &.Bottom {
            .icon::before {
                translate: -50% 3px;
            }
        }
        &.BottomRight {
            .icon::before {
                translate: -3px 3px;
            }
        }
        &.BottomLeft {
            .icon::before {
                translate: -14px 3px;
            }
        }
        &.TopLeft {
            .icon::before {
                translate: -14px -14px;
            }
        }
        &.TopRight {
            .icon::before {
                translate: -3px -14px;
            }
        }

        &.iconRound {
            .icon {
                border-radius: 4px;
            }
        }
    }
</style>
