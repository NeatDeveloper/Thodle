import './db/user';
import type {
    Theme as _Theme,
    Schema as _Schema,
    Preset as _Preset,
    ToastPosition as _ToastPosition
} from '@repo/schemas';

declare global {
    namespace DB {
        type OmitAnotherFields<T> = Omit<T, 'id' | 'updatedAt' | 'createdAt'>;

        namespace UI {
            type Theme = _Theme;
            type Schema = _Schema;
            type Preset = _Preset;
            type ToastPosition = _ToastPosition;
        }
    }
}

export {};
