<script lang="ts">
    import { date } from "@repo/utils/other";
    import Lesson from "./Lesson.svelte";
    import { Section } from 'components';
    import { User } from "stores";

    interface Props {
        schedule: Schedule.Day;
    };

    const user = User.getContext();

    const { schedule }: Props = $props();
</script>

<Section type={user.settings.miniapp.rounded ? 'rounded' : 'default'}>
    {#snippet title()}
        Расписание({date().format('D MMMM')})
    {/snippet}

    {#each schedule.lessons as lesson, _(_)}
        <Section.Block>
            <Lesson {lesson} />
        </Section.Block>
    {/each}
</Section>
