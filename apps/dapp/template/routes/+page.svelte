<script lang="ts">
    import { MiniApp, User } from 'stores';

    const miniapp = MiniApp.getMiniAppContext();
    const user = User.getUserContext();
</script>

<svelte:head>
    <title>DAPP сервис</title>
</svelte:head>

<main class="root">
<pre>
{JSON.stringify(user.user, null, 4)}
</pre>
</main>

<style lang="scss">

</style>
