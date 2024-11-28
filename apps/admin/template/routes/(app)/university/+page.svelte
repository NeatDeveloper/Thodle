<script lang="ts">
	import { Core } from "@repo/utils/stores";
	import { onMount } from "svelte";

    let text = $state();
    const core = Core.getCoreContext<App.Core>();

    onMount(async () => {
        const response = await core.api.get('admin/university');

        if(response.status === 200) text = await response.json();
    })
</script>

{ JSON.stringify(text, null, 4) }

<form
	onsubmit={(__event__) => {
		__event__.stopPropagation();
		__event__.preventDefault();
	}}
>
    <input type="text" placeholder="Название университета(сокращённо)">
    <input type="text" placeholder="Название университета">

</form>
