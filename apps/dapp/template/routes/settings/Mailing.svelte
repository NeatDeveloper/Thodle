<script lang="ts">
    import { Toggle } from '@repo/ui/components';
    import { Section } from 'components';
    import { User } from 'stores';

    const user = User.getContext();
</script>

<Section type={!user.settings.miniapp.rounded ? 'default' :
            user.settings.miniapp.roundedSettings ? 'rounded' : 'default'}>
    {#snippet title()}
        Рассылка
    {/snippet}

    <Section.Block
        icon={user.settings.mailing.isPossible ? 'mailbox-flag' : 'mailbox'}
        title={user.settings.mailing.isPossible ? 'Активирована' : 'Неактивна'}
    >
        <Toggle
            checked={user.settings.mailing.isPossible}
            update={async isPossible => {
                await user.updateSettings({
                    mailing: {
                        isPossible
                    }
                })
            }}
        />
    </Section.Block>

    {#if user.settings.mailing.isPossible}
        {@render notifications()}
    {/if}

    {#snippet description()}
        Работа с сообщениями и рассылкой
    {/snippet}
</Section>

{#snippet notifications()}
    <Section.Block icon="bell" title="Уведомления">
        <Toggle />
    </Section.Block>
{/snippet}

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
        }

        &_title {
            font-size: 1.6rem;
            font-weight: 600;
        }
    }
</style>
