<script>
    export let id, name, description, bats, throws, stats;
    export let onClick;
</script>

<tr on:click={() => {
    onClick(id);
}}>
    <td>{name}</td>
    <td>{description}</td>
    <td>{bats}/{throws}</td>
    <td>{stats.pitching}</td>
    <td>{stats.batting}</td>
    <td>{stats.fielding}</td>
    <td>{stats.running}</td>
    <td>{stats.pitching + stats.batting}</td>
    <td>{Object.values(stats).reduce((accum, curr) => accum + curr, 0)}</td>
</tr>

<style>
    tr {
        transition: all .2s ease;
    }
    tr:hover {
        background-color: var(--secondary-color);
        color: var(--background);
    }
</style>