<script lang="ts">
	import { Form, Button } from '@repo/ui/components';
	import { Core } from '@repo/utils/stores';

    const core = Core.getContext<App.Core>();

    interface Props {
        oncreate: () => Promise<void>;
        onfailed?: (status: number) => Promise<void>;
    }

    const { oncreate, onfailed }: Props = $props();
</script>

<Form
    title="Добавление университета"
	onsubmit={async (__event__) => {
		__event__.stopPropagation();
		__event__.preventDefault();

		const formData = new FormData(__event__.currentTarget);

        const response = await core.api.post('admin/university', {
            body: formData
        });

        if(response.status === 201) oncreate();
        else onfailed?.(response.status);

        __event__.currentTarget.reset();
	}}
	class="university-create"
>
	<Form.Field
		class="university-create_input"
		type="text"
		title="Название"
		id="name"
		name="name"
	/>
	<Form.Field
		class="university-create_input"
		type="text"
		title="Название(сокращённо)"
		id="shortName"
		name="shortName"
	/>
	<Form.Field
		class="university-create_input"
		type="text"
		title="Город"
		id="city"
		name="city"
	/>
	<Form.Field
		class="university-create_input"
		type="file"
		accept="image/*"
		title="Лого"
		id="file"
		name="file"
	/>

	<Button class="university-create_submit" type="submit">Добавить</Button>
</Form>
