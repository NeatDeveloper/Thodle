<script lang="ts">
	import { Core } from '@repo/utils/stores';
	import { onMount } from 'svelte';
	import CreateUniversity from './CreateUniversity.svelte';
	import type { UniversityObject } from '@repo/schemas';
	import { Avatar } from '@repo/ui/components';
	import UniversitySection from './UniversitySection.svelte';

	let universities = $state<UniversityObject[]>([]);
	const core = Core.getContext<App.Core>();

	const updateUniversities = async () => {
		const response = await core.api.get('admin/university');

		if (response.status === 200) universities = await response.json();
	};

	onMount(updateUniversities);
</script>

<CreateUniversity
	oncreate={async () => {
		await updateUniversities();
	}}
/>

<section class="universities">
    <h2 class="universities_title">Список университетов</h2>
	{#if universities}
		<ul class="universities-list">
			{#each universities as university, _ (_)}
				<UniversitySection {university} />
			{/each}
		</ul>
	{/if}
</section>

<style lang="scss">
	.universities {
        margin-top: 40px;

        &_title {
            margin-bottom: 20px;
        }
        &-list {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: var(--app-gap);
        }
	}
</style>
