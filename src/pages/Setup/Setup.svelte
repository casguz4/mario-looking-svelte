<script>
	import { useLocation, useNavigate } from 'svelte-navigator';
	import { isDraftSet, teams } from '../../store';

	const navigate = useNavigate();
	const location = useLocation();

	let numberOfTeams;
	let teamNames = [];
	let teamNameIsValid = [];

	function handleSetupSubmit(e) {
		e.preventDefault();
		teamNameIsValid = preSubmitValidation(teamNames);
		if (teamNameIsValid.some((name) => !name)) return;

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

	/**
	 *
	 * @param teamNames {[]}
	 * @returns {[boolean]}
	 */
	function preSubmitValidation(names) {
		return names.reduce((accum, name) => {
			if (!accum) return [...accum, false];
			if (!!name === false) return [...accum, false];
			const regex = /[A-Za-z]/gi;
			if (!regex.test(name)) return [...accum, false];
			return [...accum, true];
		}, []);
	}

	function handleNumberOfTeamsChange(e) {
		const {
			target: { value },
		} = e;
		teamNameIsValid = new Array(parseInt(value)).fill(true);
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
			<select on:change={handleNumberOfTeamsChange} bind:value={numberOfTeams} name="numberOfTeams" id="numberOfTeams">
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
					<label class:is-error={!teamNameIsValid[index]}>
						Team {index + 1}
						<input
							bind:value={teamNames[index]}
							class:is-error={!teamNameIsValid[index]}
							class:border={!teamNameIsValid[index]}
							required
							name="team-name"
							type="text"
						/>
						{#if !teamNameIsValid[index]}
							<div class="is-error">field is invalid!</div>
						{/if}
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
	label {
		margin-bottom: 15px;
	}
	label > input {
		margin-bottom: 0;
	}

	.is-error {
		color: var(--error);
	}
	.border:where(.is-error) {
		border: 1px solid var(--error);
	}
</style>
