<script>
	import { Link } from 'svelte-navigator';
</script>

<header>
	<div class="heading">
		<h1>Looking S.A.F.</h1>
	</div>
	<nav>
		<Link className="link" to="/">Home</Link>
		<Link to="/setup">Setup</Link>
		<Link to="/roster">Roster</Link>
		<Link to="/draft">Draft</Link>
	</nav>
</header>

<style>
	header {
		width: 100%;
		padding: 15px 8px 5px;
		display: grid;
		grid-template-areas: 'heading nav nav nav nav space';
		border-bottom: 1px solid #cecece;
		box-shadow: 0 1px 5px 0 rgba(255, 255, 255, 0.9);
	}
	h1 {
		margin: 0;
	}
	nav,
	.heading {
		display: flex;
		align-items: flex-end;
	}
	nav {
		grid-area: nav;
		display: flex;
		justify-content: space-around;
		align-items: flex-end;
	}
	.heading {
		grid-area: heading;
	}
</style>
