import type { LayoutServerLoad } from "./$types";
import meta from '@repo/utils/meta';

export const load: LayoutServerLoad = async () => {
    return meta
};
