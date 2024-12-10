import {
    getContext as getSvelteContext,
    setContext as setSvelteContext,
    onDestroy
} from 'svelte';
import { SvelteMap } from "svelte/reactivity";
import type { ToastPosition } from '@repo/schemas';

export interface Toast {
    id: string;
    title: string;
    description?: string;
    duration?: number;
    status?: 'default' | 'warning' | 'success' | 'error';
}

class ToastStore {
    list = $state<Toast[]>([]);
    timeoutsList = new SvelteMap<Toast['id'], Timer>();
    position = $state<ToastPosition>('Top');

    constructor() {
        onDestroy(() => {
            for (const timeout of this.timeoutsList.values())
                clearTimeout(timeout);

            this.timeoutsList.clear();
        });
    }

    createTestToast = () => {
        this.push({
            id: 'test',
            title: 'Test, toast',
            status: 'success',
            duration: 1000
        })
    }

    push = (data: Omit<Toast, 'id'> & { id?: string }) => {
        let id = data.id;

        if(this.timeoutsList.has(id || '')) {
            this.delete(id || '');
        }

        if(!id) id = crypto.randomUUID();

        this.list.push({
            id, ...data,
            status: data?.status || 'default'
        });

        this.timeoutsList.set(id, setTimeout(() => {
            this.delete(id);
        }, data.duration || 5000));
    }

    delete = (id: Toast['id']) => {
        const timeout = this.timeoutsList.get(id);

        if (timeout) {
            clearTimeout(timeout);
            this.timeoutsList.delete(id);
        }

        this.list = this.list.filter(toast => toast.id != id);
    }
}

export const
    TOAST_KEY = Symbol('TOAST_KEY'),
    setContext = () => setSvelteContext(TOAST_KEY, new ToastStore()),
    getContext = (): ReturnType<typeof setContext> => getSvelteContext(TOAST_KEY);
