<script>
	import { Router, Route } from 'svelte-navigator';
	import Draftboard from './pages/Draftboard/Draftboard.svelte';
	import Roster from './pages/Roster/Roster.svelte';
	import Setup from './pages/Setup/Setup.svelte';
	import Home from './pages/Home/Home.svelte';
	import Navigation from './components/Navigation/Navigation.svelte';
	import PrivateRoute from './components/PrivateRoute/PrivateRoute.svelte';

	import { isDraftSet } from './store';
	$isDraftSet;
</script>

<Router>
	<Navigation />
	<main>
		<!-- {#if $isDraftSet}
			<Draftboard />
		{/if}
		{#if !$isDraftSet}
			<Setup />
		{/if} -->
		<!-- <Draftboard /> -->
		<Route path="/">
			<Home />
		</Route>
		<Route path="/setup">
			<Setup />
		</Route>
		<Route path="/roster">
			<Roster />
		</Route>
		<PrivateRoute path="/draft" let:location>
			<Draftboard />
		</PrivateRoute>
	</main>
</Router>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
