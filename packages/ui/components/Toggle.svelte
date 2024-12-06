<script lang="ts">
    const id = crypto.randomUUID();

    interface Props {
        checked?: boolean;
        update?: (active: boolean) => void;
    }

    let { checked = $bindable(false), update }: Props = $props();
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<label for={id} class="switch" onclick={() => {
    checked = !checked;
    update?.(checked);
}}>
    <input type="checkbox" bind:checked />
    <span class="switch-slider"></span>
</label>

<style lang="scss">
    .switch {

        position: relative;
        display: inline-block;
        width: 50px;
        height: 28px;

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
            background-color: #ccc;
            transition: all .2s ease-in;
            border-radius: 34px;

            &:before {
                position: absolute;
                content: '';
                height: 20px;
                width: 20px;
                left: 4px;
                bottom: 4px;
                background-color: white;
                transition: all .1s ease-in;
                border-radius: 50%;
            }
        }
        input:checked + &-slider {
            background-color: var(--bg-color, #2196f3);
        }

        input:focus + &-slider {
            box-shadow: 0 0 1px var(--bg-color, #2196f3);
        }

        input:checked + &-slider:before {
            transform: translateX(20px);
        }
    }
</style>
