import dayjs from 'dayjs';

import 'dayjs/locale/ru';
import LocalizedFormat from 'dayjs/plugin/localizedFormat';

dayjs.extend(LocalizedFormat);
dayjs.locale('ru');

export default dayjs;
