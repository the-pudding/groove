<script>
	import Circular from "$components/Circular.svelte";
	import Range from "$components/helpers/Range.svelte";
	import Toggle from "$components/helpers/Toggle.svelte";

	let value = 0;
	let options = [
		"straight",
		"septuplet swing",
		"quintuplet swing",
		"triplet swing"
	];
	let showPercentage = false;
	let showDivisions = false;

	const swing = (ratio) => {
		// could have parameter "beats" if we want more
		return [0, ratio];
	};
	const straight = {
		hihat: swing(0.5)
	};
	const triplet = {
		hihat: swing(2 / 3)
	};
	const quintuplet = {
		hihat: swing(3 / 5)
	};
	const septuplet = {
		hihat: swing(4 / 7)
	};
	const data = [straight, septuplet, quintuplet, triplet];
	const divisions = [2, 7, 5, 3];
</script>

<Circular
	data={data[value]}
	beatsPerRotation={1}
	division={divisions[value]}
	bpm={60}
	{showPercentage}
	{showDivisions}
/>

<h2>{options[value]}</h2>
<div style="width: 50%">
	<Range
		min={0}
		max={options.length - 1}
		step={1}
		showTicks={true}
		ticks={[50, 57, 60, 66]}
		bind:value
	/>
</div>

{#if value === 0}
	<p>
		This rhythm is completely <strong>straight</strong>. Each beat is equally
		spaced apart.
	</p>
{:else}
	<p>
		This rhythm is <strong>swung</strong>. Swing means that there's a long-short
		pattern, so the first note takes up more space than the second.
	</p>
{/if}
<p>
	In this case, the first beat takes up <strong
		>{(data[value].hihat[1] * 100).toFixed(1)}%</strong
	> of the beat.
</p>
<Toggle label="Show percentage" style="inner" bind:value={showPercentage} />

{#if value !== 0}
	<p>
		It's called a <strong>{options[value]} swing</strong> because the beat is
		divided into {divisions[value]} parts. Since we're dividing the beat into an
		odd number of parts, it will be uneven and have this slightly off-kilter feeling.
	</p>
	<Toggle label="Show divisions" style="inner" bind:value={showDivisions} />
{/if}
