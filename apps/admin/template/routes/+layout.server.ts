import meta from '@repo/utils/meta';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => {
    return meta;
};
