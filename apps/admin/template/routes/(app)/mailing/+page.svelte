<script lang="ts">
    import { Core } from '@repo/utils/stores';

    const core = Core.getContext();

    let message = $state('');

    const sendMessage = async () => {
        const response = await core.api.post('admin/mailing', {
            json: { message }
        });

        if(response.status === 200) alert('Сообщение доставлено!');
        else alert('Ошибка при отправке!')
    }
</script>

<form
    onsubmit={__event__ => {
        __event__.preventDefault();
        __event__.stopPropagation();
    }}
>
    <textarea bind:value={message} placeholder="Введите сообщение для рассылки"></textarea>

    <button type="submit" onclick={sendMessage}>Отправить</button>
</form>
