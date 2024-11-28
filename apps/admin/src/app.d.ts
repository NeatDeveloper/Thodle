import '@repo/types/env';

declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}

        interface Core {
            page: {
                title: string;
            }
        }
	}
}

export {};
