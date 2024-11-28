<script lang="ts">
    const { children, data } = $props();

    import '@repo/ui/reset';
    import 'styles/index.scss';
    import 'components/Theme/themes.scss';

    import { Core } from '@repo/utils/stores';
	import { page } from '$app/stores';
	import { pages } from 'lib';

    const core = Core.setCoreContext<App.Core>({
        page: {
            title: ''
        }
    });

    core.meta = data;

    page.subscribe(pg => {
        if(Object.keys(pages).includes(pg.url.pathname))
            core.app.page.title = pages[pg.url.pathname as keyof typeof pages].title;
    })
</script>

<svelte:head>
    <title>{ core.app.page.title }</title>
</svelte:head>

{@render children()}
