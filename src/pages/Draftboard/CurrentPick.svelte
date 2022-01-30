<script>
    export let name, talent, players;
</script>

<main>
    <h2>ON THE BOARD NOW: {name}</h2>
    {#if talent.avgPower}
        <div class="talent">
            {talent.avgPower} | {talent.avgTotal}
        </div>
    {/if}
    <div>
        {#each players as player}
            <span class:rostered-player="{
                players[players.length - 1].id !== player.id
            }">{player.name}</span>
        {/each}
    </div>
</main>

<style>
    .rostered-player {
        margin-right: 3px;
    }
    .rostered-player::after {
        content: ','
    }
    .talent {
        font-weight: 600;
        font-size: 18px;
        margin-bottom: 5px;
    }
</style>