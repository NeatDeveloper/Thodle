<script lang="ts">
    interface Props {
        lesson: Schedule.GroupLesson;
    }
    const { lesson }: Props = $props();
</script>

<li class="lesson section-item">
    {#if lesson.forAllGroups}
        <span class="lesson_type">
            {#if lesson.type === 'LECTURE'}
                👨‍🏫
            {:else if lesson.type === 'PRACTICE'}
                📝
            {/if}
        </span>
        <div class="lesson-data section-data">
            <span class="lesson_name">{lesson.discipline}</span>
            <span class="lesson_lector">{lesson.lector}</span>
        </div>
    {/if}
</li>

<style lang="scss">
    .lesson {
        display: flex;
        align-items: center;
        gap: 14px;

        &_type {
            font-size: 2.8rem;
        }

        &_lector {
            grid-area: lector;
            font-size: 1.2rem;
            color: var(--subtitle-text-color);
        }

        &_name {
            grid-area: name;
            font-size: 1.5rem;
            font-weight: 600;
        }

        &-data {
            width: 100%;
            gap: 4px;
            display: grid;
            grid-template-areas:
                'name'
                'lector';
        }
    }
</style>
