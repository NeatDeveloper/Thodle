<script lang="ts">
	import type { FullProfileObject } from '@repo/schemas';
	import { Avatar, Icon, Link } from '@repo/ui/components';

	interface Props {
		profile: FullProfileObject;
	}

	const { profile }: Props = $props();
</script>

<div class="student">
    <Avatar
        src={profile.avatar || ''}
        alt={profile.username || ''}
        size={50}
    />
	<div class="student-content">
		<span class="student-name">
            <span class="student_lastName">{profile.lastName}</span>
            <span class="student_firstName">{profile.firstName}</span>
        </span>

		{#if profile.username}
			<Link target="_blank" href="https://t.me/{profile.username}" class="student_username">
				<Icon size={16} name="telegram" />{profile.username}
			</Link>
		{/if}
	</div>

    <Link class="student_link" href="/student/{profile.id}">
        <Icon name="person" />
    </Link>
</div>

<style lang="scss">
	.student {
		padding: 10px;
		border-radius: 12px;
		background-color: var(--section-bg-color);
		display: flex;
		align-items: center;
		gap: var(--app-gap);

        &-name {
            font-size: 1.6rem;
        }

		:global &_username {
			display: flex;
			align-items: center;
			gap: 6px;
		}

        :global &_link {
            background-color: var(--accent-color);
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 12px;
            padding: 10px;
            aspect-ratio: 1;

            svg {
                fill: white !important;
            }
        }

		&-content {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 5px;
		}
	}
</style>
