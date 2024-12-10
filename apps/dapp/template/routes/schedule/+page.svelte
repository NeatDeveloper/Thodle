<script lang="ts">
    import { Admin, MiniApp, User } from 'stores';
    import { Schedule } from 'components';

    const
        miniapp = MiniApp.getContext(),
        user    = User.getContext(),
        admin   = Admin.getContext();
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

<Schedule schedule={schedule} />
<Schedule schedule={schedule} />
<Schedule schedule={schedule} />
<Schedule schedule={schedule} />
<Schedule schedule={schedule} />

<style lang="scss">

</style>
