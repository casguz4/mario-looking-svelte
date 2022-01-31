<script>
	import { useNavigate, useLocation } from 'svelte-navigator';
	const navigate = useNavigate();
	const location = useLocation();

	const handleCategoryClick = (route) => {
		navigate(`/${route}`, {
			state: { from: $location.pathname },
			replace: true,
		});
	};
</script>

<main>
	<h1>Welcome!</h1>
	<h2>Draft and Team Building for Mario Super Sluggers!</h2>
	<p>
		This is a prototype for Svelte. The goal of this is to recreate a Mario Super Sluggers Draft. Some things we are
		using:
	</p>
	<section class="list">
		<ul>
			<li>svelte-navigator &mdash; this is our router</li>
			<li>rollup &mdash; this is like webpack</li>
			<li>typescript &mdash because backend people unjustly hate javascript</li>
		</ul>
	</section>
	<section class="categories">
		<div class="category">
			<heading>Setup</heading>
			<p>
				This is where we setup your draft. Choose 1 player to quickly setup a roster or select multiple players to
				decide <em>fair</em> and <strong>strong</strong> teams!
			</p>
			<button
				on:click={() => {
					handleCategoryClick('setup');
				}}>Let's Start!</button
			>
		</div>
		<div class="category">
			<heading>Roster</heading>
			<p>
				Search through the entire Mario Sluggers character list and see stats for your favorite players to assemble the
				best team!
			</p>
			<button
				on:click={() => {
					handleCategoryClick('roster');
				}}>View Roster</button
			>
		</div>
		<div class="category">
			<heading>Draft</heading>
			<p>
				Everything that you can do in the Roster page but now you can actually draft characters for your team and see
				overall team ratings
			</p>
			<button
				on:click={() => {
					handleCategoryClick('setup');
				}}>Go Setup!</button
			>
		</div>
	</section>
	<section>Well anyway, here it is. Enjoy :)</section>
</main>

<style>
	.list {
		display: flex;
		justify-content: center;
		margin-bottom: 15px;
	}
	li {
		text-align: left;
	}

	.categories {
		display: flex;
		justify-content: space-between;
		flex-flow: row wrap;
		margin-bottom: 30px;
	}

	.category {
		padding: 15px 10px;
	}

	.category:nth-of-type(2) {
		margin: 0 10px;
		border-left: 1px solid #fff;
		border-right: 1px solid #fff;
	}

	@media (min-width: 660px) {
	}
</style>
