<script lang="ts">
    import type { Snippet } from "svelte";

    interface Props {
        title?: Snippet<[]>;
        children: Snippet<[]>;
        description?: Snippet<[]>;
        type?: 'default' | 'rounded';
        class?: string;
    }

    const { children, description, title, type = 'rounded', class: __class }: Props = $props();
</script>

<section class="section{__class ? ` ${__class}` : ''}" {type}>
    {#if title}
        <h2 class="section_title">{@render title()}</h2>
    {/if}

    <div class="section-content">
        {@render children()}
    </div>

    {#if description}
        <div class="section_description">{@render description()}</div>
    {/if}
</section>


<style lang="scss">
    $class: ".section";

    #{$class} {
        padding: 15px 0 5px;
        transition: all .2s ease;

        &[type=rounded] {
            padding: 15px 10px 5px;

            #{$class} {
                &-content {
                    border-radius: 8px;
                }

                &_title {
                    padding: 0;
                }

                &_description {
                    padding-left: 0;
                }
            }
        }

        &_title {
            padding: 0 10px;
            font-size: 1.6rem;
            margin-bottom: 12px;
            transition: all .2s ease;
        }

        &-content {
            background-color: var(--section-bg-color);
            padding: 10px;
            display: flex;
            flex-direction: column;
        }


        &_description {
            padding: 5px 10px 0;
            color: var(--hint-color);
            font-size: 1.3rem;
        }
    }
</style>
