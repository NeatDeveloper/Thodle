<script lang="ts">
    import { date } from "@repo/utils/other";
    import Lesson from "./Lesson.svelte";

    interface Props {
        schedule: Schedule.Day;
    };

    const { schedule }: Props = $props();
</script>

<section class="schedule section">
    <h3 class="schedule_title section_title">Расписание({date().format('D MMMM')})</h3>
    <ul class="schedule-list section-items">
        {#each schedule.lessons as lesson}
            <Lesson {lesson} />
        {/each}
    </ul>
</section>

<style lang="scss">
    .schedule {
        &-list {
            padding-bottom: 0;
            padding-top: 0;
        }
    }
</style>
