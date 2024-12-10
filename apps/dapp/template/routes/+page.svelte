<script lang="ts">
    import { Admin, MiniApp, User } from 'stores';
    import { Schedule } from 'components';

    const miniapp = MiniApp.getContext(),
        user = User.getContext(),
        admin = Admin.getContext();

    const schedule: Schedule.Day = {
        week: 'FIRST',
        dayOrder: 0,
        weekName: 'Красная неделя',
        lessons: [
            {
                forAllGroups: true,
                order: 0,
                name: 'Математический анализ',
                point: '410(глав)',
                shortName: 'Мат. анализ',
                type: 'LECTURE',
                lector: 'Артисевич А. Е.',
                time: '',
            },
            {
                forAllGroups: true,
                name: 'Физика',
                order: 1,
                point: '401(глав)',
                shortName: 'Физика',
                type: 'PRACTICE',
                lector: 'Хокон Р. М.',
                time: '',
            },
            {
                forAllGroups: true,
                name: 'История Россия',
                order: 2,
                point: '710(эконом)',
                shortName: 'История России',
                type: 'LECTURE',
                lector: 'проф. Малышева Е. М.',
                time: '',
            },
            {
                forAllGroups: true,
                name: 'Иностранный язык',
                order: 3,
                point: '315(глав)',
                shortName: 'Ин. яз',
                type: 'PRACTICE',
                lector: 'доц. Читало Л. Р.',
                time: '',
            },
        ],
    };
</script>

<article class="home">
    <Schedule {schedule} />
</article>

<style lang="scss">
    .top {
        position: relative;
        background-color: var(--bg-color);
        padding: 10px;
        // padding-top: 14px;
        // padding-right: 25px;
        &-group {
            position: relative;
            font-size: 2rem;
        }

        &-controls {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: space-between;

            :global .link {
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                width: 34px;
                aspect-ratio: 1;

                &::before {
                    content: '';

                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                    background-color: var(--accent-color);
                    opacity: 0.1;
                }

                svg {
                    width: 60%;
                    fill: var(--accent-color);
                }
            }
        }
    }


    :global :root[data-rounded] {
        .top {
            top: 8px;
            left: 10px;
            width: calc(100% - 20px);
            padding: 5px;
            border-radius: 10px;
        }
    }
</style>
