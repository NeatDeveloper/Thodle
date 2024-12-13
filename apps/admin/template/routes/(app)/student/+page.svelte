<script lang="ts">
	import { Core } from "@repo/utils/stores";
	import { onMount } from "svelte";
	import { StudentCard } from "components";
	import type { FullProfileObject } from "@repo/schemas";

    let profiles = $state<FullProfileObject[]>();

    const core = Core.getContext<App.Core>();

    onMount(async () => {
        const response = await core.api.get('admin/student', {
            searchParams: {
                small: ''
            }
        });

        if(response.status === 200) profiles = await response.json();
    });
</script>

<section class="students">
    {#if profiles}
        <ul class="students-list">
            {#each profiles as profile, _(_)}
                 <StudentCard {profile} />
            {/each}
        </ul>
    {:else}
        Пусто
    {/if}
</section>


<style lang="scss">
    .students {
        &-list {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: var(--app-gap);
        }
    }
</style>
