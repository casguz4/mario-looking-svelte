<script>
	// Components
	import SelectedPlayer from './SelectedPlayer.svelte';
	import CurrentPick from './CurrentPick.svelte';
	import PlayerRow from './PlayerRow.svelte';

	// Data
	import Players from '../../data/players';

	// Store
	import { teams, isDraftSet } from '../../store';

	// Santa's Lil Helpers
	import { calculateTalent } from '../../util/common';
	import { DRAFT_TABLE_HEADINGS } from '../../util/constants';


	$teams;
	$isDraftSet;
	let playerPool = [...Players];
	let round = 1;
	let currentDraftIndex = 0;
	let currentPick = $teams[currentDraftIndex];
	let selectedPlayer = null;

	function handleSelectedPlayerClick (id) {
		if (selectedPlayer?.id === id) {
			selectedPlayer = null;
		}
		
		else selectedPlayer = 
			playerPool.find(
				({ id: playerId }) => playerId === id
			);
	}

	function handleDraftPlayerClick (player) {
		currentPick.players = [...currentPick.players, player]
		selectedPlayer = null;
		playerPool = playerPool.filter(
			({ id }) => id !== player.id
		);
		currentPick.talent = {...calculateTalent(currentPick.players)};
		$teams = {
			...$teams,
			[currentDraftIndex]: {...currentPick}
		};
		// even round
		if (round % 2 === 0) {
			endOfTurn(0, -1);
		} else {
			endOfTurn(Object.keys($teams).length -1, 1)
		}
	}
	function endOfTurn (indexComparator, incrementDraftIndexBy) {
		if (currentDraftIndex === indexComparator) {
			round += 1;
			return;
		}
		currentDraftIndex += incrementDraftIndexBy;
		currentPick = $teams[currentDraftIndex];
	}
</script>

<main>
	<h1>Da Draft <sup>Round: {round}</sup></h1>
	<section>
		{#if currentPick}
			<CurrentPick {...currentPick}/>
		{/if}
		{#if selectedPlayer}
			<aside>
				<SelectedPlayer {...selectedPlayer} />
				<button on:click={() => {
					handleDraftPlayerClick(selectedPlayer)
				}}>
					Draft {selectedPlayer.name}
				</button>
			</aside>
		{/if}
		</section>
	<table>
		<thead>
			<tr>
				{#each DRAFT_TABLE_HEADINGS as head}
					<th id={head.id}>{head.label}</th>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each playerPool as player}
				<PlayerRow {...player} onClick={handleSelectedPlayerClick}/>
			{/each}
		</tbody>
	</table>
</main>

<style>
	sup {
		font-size: 16px;
	}
	table,
	th {
		border: 1px solid #d3dede;
	}
	
	table {
		border: 1px solid #d3dede;
		padding: 5px 8px;
		margin: 0 auto;
		box-shadow: 0 0 6px 0 rgba(255, 255, 255, 0.8);
	}
	thead {
		border-bottom: 1px solid #fff;
	}

	section {
		width: 100%;
		min-height: 165px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>
