import '@repo/types/env';
import '@repo/types/index';
import '@repo/types/db';

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
