<script lang="ts">
    import { Admin, MiniApp, User } from 'stores';
    import { Schedule, Section } from 'components';

    const miniapp = MiniApp.getContext(),
        user = User.getContext(),
        admin = Admin.getContext();

    const schedule: Schedule.Group = {
        week: 'FIRST',
        day: 0,
        lessons: [
            {
                forAllGroups: true,
                order: 0,
                discipline: 'Математический анализ',
                auditorium: '410(глав)',
                disciplineShortName: 'Мат. анализ',
                type: 'LECTURE',
                lector: 'Артисевич А. Е.',
            },
            {
                forAllGroups: true,
                discipline: 'Физика',
                order: 1,
                auditorium: '401(глав)',
                disciplineShortName: 'Физика',
                type: 'PRACTICE',
                lector: 'Хокон Р. М.',
            },
            {
                forAllGroups: true,
                discipline: 'История Россия',
                order: 2,
                auditorium: '710(эконом)',
                disciplineShortName: 'История России',
                type: 'LECTURE',
                lector: 'проф. Малышева Е. М.',
            },
            {
                forAllGroups: true,
                discipline: 'Иностранный язык',
                order: 3,
                auditorium: '315(глав)',
                disciplineShortName: 'Ин. яз',
                type: 'PRACTICE',
                lector: 'доц. Читало Л. Р.',
            },
        ],
    };

</script>

<article class="home">
    <Schedule {schedule} />
</article>

<style lang="scss">
    .home {
        height: 100%;
        position: relative;

        :global .blockquote {
            p {
                padding: 6px;
                text-align: center;
                background-color: var(--section-bg-color);
                border-radius: 6px;
                // font-size: 1.5rem;

                span {
                    display: block;
                    padding-top: 10px;
                    font-size: 1.3rem;
                }
            }
        }
    }
    .poweredby {
        position: absolute;
        bottom: 10px; left: 50%;
        translate: -50% 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: grayscale($color: gray);

        p {
            margin-bottom: 2px;
        }

        &-links {
            display: flex;
            align-items: center;
        }

        &_link {
            color: inherit;
            background-color: transparent !important;
            font-size: 1.6rem;
            padding: 2px 5px;

            span {
                text-decoration: underline;
            }
        }
    }

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
