import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async (): Promise<CORE.Meta> => {
    return {
        apiURL: 'https://api.thodle.tech',
        name: 'Thodle Admin Panel'
    };
};
