import '@repo/types/index';
import '@repo/types/env';
import '@repo/types/miniapp';
import '@repo/types/db';
import '@repo/types/schedule';

import { MiniApp } from 'stores';

declare global {
    namespace App {
        // interface Error {}
        // interface Locals {}
        // interface PageData {}
        // interface PageState {}
        // interface Platform {}
        type MiniApp = MiniApp.MiniApp & Telegram;
        interface Core {

        }
    }
}

export {};
