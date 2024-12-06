import './db/user';

declare global {
    namespace DB {
        type OmitAnotherFields<T> = Omit<T, 'id' | 'updatedAt' | 'createdAt'>;
    }
}

export {};
