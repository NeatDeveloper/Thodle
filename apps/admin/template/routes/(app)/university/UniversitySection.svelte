<script lang="ts">
	import type { UniversityObject } from '@repo/schemas';
	import { Avatar, Link } from '@repo/ui/components';
	import { Core } from '@repo/utils/stores';

	interface Props {
		university: UniversityObject;
	}

	const { university }: Props = $props();

	const core = Core.getContext<App.Core>();
</script>

<div class="university">
	<Link class="university_link" href="/university/{university.id}">
		<Avatar src="{core.meta?.s3}/{university.iconURL}" alt={university.name} size={70} />

		<div class="university-content">
			<div class="university-name">
				<p class="university_name">{university.name}</p>
				<p class="university_shortName">{university.shortName}</p>
			</div>
			<p class="university_city">{university.city}</p>
		</div>
	</Link>
</div>

<style lang="scss">
	.university {
		background-color: var(--section-bg-color);
        border-radius: 12px;

		:global &_link {
			display: flex;
			gap: 10px;
			align-self: center;
			padding: 10px;
            width: 100%; height: 100%;
		}
	}
</style>
