<script>
	import { useNavigate, useLocation } from 'svelte-navigator';
	import { isDraftSet } from '../../store';

	const navigate = useNavigate();
	const location = useLocation();

	$: if (!$isDraftSet) {
		navigate('/setup', {
			state: { from: $location.pathname },
			replace: true,
		});
	}
</script>

<slot />
