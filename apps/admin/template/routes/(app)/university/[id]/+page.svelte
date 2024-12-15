<script lang="ts">
	import { page } from '$app/stores';
	import type {
		BuildingObject,
		DisciplineObject,
		FaculityObject,
		UniversityObject
	} from '@repo/schemas';
	import { Button, Form } from '@repo/ui/components';
	import { Core } from '@repo/utils/stores';
	import { onMount } from 'svelte';

	interface Univercity extends UniversityObject {
		buildings: BuildingObject[];
		faculities: FaculityObject[];
		disciplines: DisciplineObject[];
	}

	let university = $state<Univercity>();

	const core = Core.getContext<App.Core>();

	const updateUniversity = async () => {
		const response = await core.api.get(`admin/university/${$page.params.id}`, {
			searchParams: {
				buildings: '',
				faculities: '',
                disciplines: '',
                lectors: ''
			}
		});

		if (response.status === 200) university = await response.json();
	};

	onMount(updateUniversity);
</script>

<Form
	title="Добавление здания"
	class="building-create"
	onsubmit={async (__event__) => {
		__event__.preventDefault();
		__event__.stopPropagation();

		const formData = new FormData(__event__.currentTarget);

		const response = await core.api.post('admin/university/building', {
			body: formData
		});

		if (response.status === 200 && university?.buildings)
			university.buildings.push(await response.json());

		__event__.currentTarget.reset();
	}}
>
	<Form.Field class="building-create_field" title="Название здания" name="name" type="text" />
	<Form.Field
		class="building-create_field"
		title="Короткое название"
		name="shortName"
		type="text"
	/>
	<Form.Field class="building-create_field" title="адрес" name="address" type="text" />
	<Form.Field
		class="building-create_field university"
		value={$page.params.id}
		name="university"
		type="text"
	/>

	<Button>Добавить</Button>
</Form>

<ul class="buildings">
	{#if university?.buildings}
		{#each university.buildings as building, _ (_)}
			{building.name}
		{/each}
	{/if}
</ul>
<Form
	title="Добавление факультета"
	class="building-create"
	onsubmit={async (__event__) => {
		__event__.preventDefault();
		__event__.stopPropagation();

		const formData = new FormData(__event__.currentTarget);

		const response = await core.api.post('admin/university/faculity', {
			body: formData
		});

		if (response.status === 200 && university?.faculities)
			university.faculities.push(await response.json());

		__event__.currentTarget.reset();
	}}
>
	<Form.Field class="building-create_field" title="Название факультета" name="name" type="text" />
	<Form.Field
		class="building-create_field"
		title="Короткое название"
		name="shortName"
		type="text"
	/>
	<Form.Field
		class="building-create_field university"
		value={$page.params.id}
		name="university"
		type="text"
	/>

	<Button>Добавить</Button>
</Form>

<ul class="faculities">
	{#if university?.faculities}
		{#each university.faculities as faculity, _ (_)}
			{faculity.name}
		{/each}
	{/if}
</ul>
<Form
	title="Добавление дисциплин"
	class="building-create"
	onsubmit={async (__event__) => {
		__event__.preventDefault();
		__event__.stopPropagation();

		const formData = new FormData(__event__.currentTarget);

		const response = await core.api.post('admin/university/discipline', {
			body: formData
		});

		if (response.status === 200 && university?.disciplines)
			university.disciplines.push(await response.json());

		__event__.currentTarget.reset();
	}}
>
	<Form.Field class="building-create_field" title="Название дисицплины" name="name" type="text" />
	<Form.Field
		class="building-create_field"
		title="Короткое название"
		name="shortName"
		type="text"
	/>
	<Form.Field
		class="building-create_field university"
		value={$page.params.id}
		name="university"
		type="text"
	/>

	<Button>Добавить</Button>
</Form>

<ul class="faculities">
	{#if university?.disciplines}
		{#each university.disciplines as discipline, _ (_)}
			{discipline.name}
		{/each}
	{/if}
</ul>
<Form
	title="Добавление дисциплин"
	class="building-create"
	onsubmit={async (__event__) => {
		__event__.preventDefault();
		__event__.stopPropagation();

		const formData = new FormData(__event__.currentTarget);

		const response = await core.api.post('admin/university/discipline', {
			body: formData
		});

		if (response.status === 200 && university?.disciplines)
			university.disciplines.push(await response.json());

		__event__.currentTarget.reset();
	}}
>
	<Form.Field class="building-create_field" title="Название дисицплины" name="name" type="text" />
	<Form.Field
		class="building-create_field"
		title="Короткое название"
		name="shortName"
		type="text"
	/>
	<Form.Field
		class="building-create_field university"
		value={$page.params.id}
		name="university"
		type="text"
	/>

	<Button>Добавить</Button>
</Form>

<ul class="faculities">
	{#if university?.disciplines}
		{#each university.disciplines as discipline, _ (_)}
			{discipline.name}
		{/each}
	{/if}
</ul>

<style lang="scss">
	.building {
		:global &-create {
			&_field.university {
				display: none;
			}
		}
	}
</style>
