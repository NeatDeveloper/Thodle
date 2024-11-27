import '@repo/types/env';

declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}

	}
    namespace CORE {
        interface Meta {
            name: string;
            apiURL: string;
        }
    }
}

export {};
