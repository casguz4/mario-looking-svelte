<script>
    export let name, description, bats, throws, stats;
</script>

<article>
    <header>
        {name}
    </header>
    <main>
        <p>{description}</p>
        <p>{bats}/{throws}</p>
        <p>
            {#each Object.keys(stats) as stat}
                <span>{stats[stat]}</span>
            {/each}
        </p>
    </main>
</article>

<style>
    p {
        margin-bottom: 3px;
        padding: 0;
    }
    span {
        padding-right: 3px;
        border-right: 1px solid var(--secondary-color);
        margin-right: 3px;
    }
    span:last-of-type {
        border: none;
    }
    header {
        font-weight: 600;
    }
    main {
        font-weight: 400;
        font-size: 14px;
    }
</style>