<script lang="ts">
    interface Props {
        lesson: Schedule.GroupLesson;
    }
    const { lesson }: Props = $props();
</script>

<li class="lesson section-item">
    {#if lesson.forAllGroups}
    <img class="lesson_type" src="/{lesson.type.toLowerCase()}.png" width="30" height="30" alt="" />
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
            object-fit: cover;
            scale: 1.5;
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
