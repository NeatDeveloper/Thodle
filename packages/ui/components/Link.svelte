<script lang="ts">
    import { page } from '$app/stores';
    import type { Page } from '@sveltejs/kit';
    import { onMount, type Snippet } from 'svelte';
    import type { HTMLAnchorAttributes } from 'svelte/elements';

    interface Props {
        children: Snippet;
        class?: string;
        href?: string;
        isActive?: boolean;
        onactive?: (link: HTMLAnchorElement) => any;
        target?: HTMLAnchorAttributes['target'];
        rect?: DOMRect;
    }

    let {
        children,
        class: __class,
        href = '#',
        isActive = $bindable(false),
        onactive,
        target,
        rect = $bindable()
    }: Props = $props();

    let link = $state<HTMLAnchorElement>();

    const check = (pg: Page) => {
        if (href === '/') {
            if (pg.url.pathname === href) isActive = true;
            else isActive = false;
        } else if (pg.url.pathname.startsWith(href)) isActive = true;
        else isActive = false;
    };

    page.subscribe(check);

    $effect.root(() => {
        check($page);

        $effect(() => {
            if (isActive && link) {
                onactive?.(link);
                rect = link.getBoundingClientRect();
            }

        });
    });
</script>

<a
    bind:this={link}
    class="link{__class ? ' ' + __class : ''}{isActive ? ' active' : ''}"
    {target}
    {href}>{@render children()}</a
>


<style lang="scss">
    .link {
        color: inherit;
        text-decoration: none;
    }
</style>
