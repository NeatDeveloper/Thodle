<script lang="ts">
	import { page } from '$app/stores';
	import { Form } from '@repo/ui/components';
    import { Core } from '@repo/utils/stores';
	import { onMount } from 'svelte';

	let university = $state([]);
	const core = Core.getContext<App.Core>();

	const updateUniversity = async () => {
		const response = await core.api.get(`admin/university/${$page.params.id}`);

		if (response.status === 200) university = await response.json();
	};

    onMount(updateUniversity)
</script>


<Form

>
    <Form.Field type="text" />
</Form>
