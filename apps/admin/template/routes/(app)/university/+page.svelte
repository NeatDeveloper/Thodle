<script lang="ts">
	import { Core } from '@repo/utils/stores';
	import { onMount } from 'svelte';

	let universitiesList = $state([]);
	const core = Core.getContext<App.Core>();

	const updateUniversitiesList = async () => {
		const response = await core.api.get('admin/university');

		if (response.status === 200) universitiesList = await response.json();
	};

	let newUniversityData = $state({
		name: '',
		shortName: '',
		city: ''
	});

	onMount(updateUniversitiesList);
</script>

<form
	onsubmit={async __event__ => {
		__event__.stopPropagation();
		__event__.preventDefault();

        const response = await core.api.post('admin/university', {
            json: newUniversityData
        });

        if(response.status === 200) universitiesList.push(await response.json())
	}}
>
	<input
		type="text"
		bind:value={newUniversityData.shortName}
		placeholder="Название университета(сокращённо)"
	/>
	<input type="text" bind:value={newUniversityData.name} placeholder="Название университета" />
	<input type="text" bind:value={newUniversityData.city} placeholder="Город" />

    <button type="submit">Отправить</button>
</form>

{#each universitiesList as university, i(i)}
     <a href="/university/{university?.id}">{ university?.name }</a>
{:else}
     <h2>Пусто</h2>
{/each}
