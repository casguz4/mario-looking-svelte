<script>
  import { useLocation, useNavigate } from 'svelte-navigator';
  import { isDraftSet, teams } from '../../store';

  const navigate = useNavigate();
  const location = useLocation();

  let numberOfTeams;
  let teamNames = [];

  function handleSetupSubmit(e) {
    e.preventDefault();
    $isDraftSet = true;
    const draftTeams = teamNames.map((name) => ({ name, talent: {}, players: [] }));
    draftTeams.forEach((team, index) => {
      $teams[index] = team;
    });
    navigate('/draft', {
      state: { from: $location.pathname },
      replace: true,
    });
  }
</script>

<main>
  <h1>Setup Draft</h1>
  <h2>This is where we setup our draft or team builder</h2>
  <h2>
    The order names were entered will be the order of the draft. Draft is in SNAKE format (first to last, then next
    round last to first. And so on...), though we plan to add options for others draft styles.
  </h2>
  <form on:submit={handleSetupSubmit}>
    <label>
      Number of teams drafting?
      <select bind:value={numberOfTeams} name="numberOfTeams" id="numberOfTeams">
        <option selected disabled>How many teams?</option>
        {#each new Array(4) as _, index}
          <option value={index + 1}>{index + 1}</option>
        {/each}
      </select>
    </label>
    {#if numberOfTeams > 0}
      <fieldset>
        Team Names:

        {#each new Array(numberOfTeams) as _, index}
          <label>
            Team {index + 1}
            <input bind:value={teamNames[index]} name="team-name" type="text" />
          </label>
        {/each}
      </fieldset>

      <button>Go!</button>
    {/if}
  </form>
</main>

<style>
  fieldset {
    border: none;
  }
</style>
