<script lang="ts">
    const id = crypto.randomUUID();

    interface Props {
        checked?: boolean;
        update?: (active: boolean) => void;
    }

    let { checked = $bindable(false), update }: Props = $props();

    let anim = $state(false);
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<label for={id} class="switch" onclick={() => {
    checked = !checked;
    anim = true;
    setTimeout(() => {
        anim = false;
    }, 250);
    update?.(checked);
}}>
    <input type="checkbox" bind:checked />
    <span class="switch-slider" class:anim={anim}></span>
</label>

<style lang="scss">
    .switch {
        --toggle-accent-color: var(--accent-color, #2196f3);
        --toggle-point-color: white;
        --toggle-bg-color: var(---secondary-bg-color, #ccc);
        --toggle-transition: background-color .2s linear;

        position: relative;
        display: inline-block;
        width: 46px;
        height: 26px;

        input {
            opacity: 0;
            width: 0;
            height: 0;
        }

        &-slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: var(--toggle-bg-color);
            transition: all .2s ease-in;
            border-radius: 34px;

            &::before {
                position: absolute;
                content: '';
                height: 18px;
                width: 18px;
                left: 4px;
                bottom: 4px;
                background-color: var(--toggle-point-color);
                transition: all .1s ease-in;
                border-radius: 50%;
            }

            &.anim {
                &::before {
                    animation: anim .2s ease;
                }
            }
        }
        input:checked + &-slider {
            background-color: var(--toggle-accent-color);
        }

        input:focus + &-slider {
            box-shadow: 0 0 1px var(--toggle-accent-color);
        }
        input:checked + &-slider::before {
            transform: translateX(20px);
        }
    }

    @keyframes anim {
        from {
            scale: 1 1;
        } 50% {
            scale: 1 .94;
        } to {
            scale: 1 1;
        }
    }
</style>
