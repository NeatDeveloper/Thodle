<script lang="ts">
    import { Admin, MiniApp, User } from 'stores';
    import { Schedule } from 'components';

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

<Schedule {schedule} />
<Schedule {schedule} />
<Schedule {schedule} />
<Schedule {schedule} />
<Schedule {schedule} />

<style lang="scss">
</style>
