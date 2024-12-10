<script lang="ts">
    import { Select, ToastsStore, } from '@repo/ui/components';
    import { Section } from 'components';
    import { User } from 'stores';

    const
        user = User.getContext(),
        toasts = ToastsStore.getContext();
</script>

<Section.Block
        title="Тосты"
        class="toasts {user.settings.miniapp.toastPosition}{user.settings
            .miniapp.rounded
            ? ' iconRound'
            : ''}"
        start="Структура"
    >
        <Select
            type="row"
            current={user.settings.miniapp.toastPosition}
            onupdate={async toastPosition => {
                const result = await user.updateSettings({
                    miniapp: {
                        toastPosition,
                    },
                });

                if(result) {
                    toasts.position = result.miniapp.toastPosition;

                    toasts.createTestToast();
                }
            }}
        >
            <Select.Option key="Top" value="Верху" />
            <Select.Option key="Bottom" value="Внизу" />
        </Select>
    </Section.Block>

<style lang="scss">
    @use './styles.scss';

    :global .toasts {
        @include styles.icon();

        .icon {
            position: relative;

            &::before {
                content: '';

                position: absolute;
                top: 50%;
                left: 50%;
                translate: -50% -50%;
                width: 12px;
                height: 6px;
                border-radius: 4px;
                border: 2px solid var(--section-bg-color);
                background-color: var(--accent-color);
                transition: all 0.2s ease;
            }
        }

        &.Top {
            .icon::before {
                translate: -50% -14.6px;
            }
        }
        &.Bottom {
            .icon::before {
                translate: -50% 4.4px;
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
