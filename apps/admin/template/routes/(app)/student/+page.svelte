<script lang="ts">
	import { Core } from "@repo/utils/stores";
	import { onMount } from "svelte";

    let students = $state();

    const core = Core.getCoreContext<App.Core>();

    onMount(async () => {
        const response = await core.api.get('admin/student');

        if(response.status === 200) students = await response.json();
    });
</script>

<section class="students">
    Студенты
    { JSON.stringify(students, null, 4) }
</section>
