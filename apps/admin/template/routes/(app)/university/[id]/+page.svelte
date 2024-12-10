<script lang="ts">
	import { page } from '$app/stores';
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

<pre>
{JSON.stringify(university, null, 4)}
</pre>


<form
	onsubmit={async __event__ => {
		__event__.stopPropagation();
		__event__.preventDefault();

	}}
>

    <button type="submit">Отправить</button>
</form>
