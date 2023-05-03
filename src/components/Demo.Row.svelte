<script>
	import Note from "$components/Demo.Note.svelte";
	import { getContext, onMount } from "svelte";
	import { range } from "d3";

	export let i;
	export let id;
	export let data;
	export let action;

	const {
		songId,
		getAllParts,
		beatsPerMeasure,
		getXScale,
		getInstrumentToggles,
		getInstrumentStyles,
		getHighlightedNotes,
		getWidth,
		getXOffset,
		getCurrentAction,
		getStarted,
		actions,
		getAudioEls
	} = getContext("song");
	const allParts = getAllParts();
	const xScale = getXScale();
	const instrumentToggles = getInstrumentToggles();
	const instrumentStyles = getInstrumentStyles();
	const highlightedNotes = getHighlightedNotes();
	const width = getWidth();
	const xOffset = getXOffset();
	const currentAction = getCurrentAction();
	const started = getStarted();
	const audioEls = getAudioEls();

	let notesContainer;
	let actionOn = false;
	let startingData = data;

	const noteHeight = 20;
	const colors = {
		kick: "#f94144",
		snare: "#f3722c",
		hihat: "#f9c74f",
		bass: "#90be6d"
	};
	const shapes = {
		kick: "circle",
		snare: "square",
		hihat: "triangle",
		bass: "circle"
	};

	const mute = (id) => {
		$instrumentToggles[id] = $instrumentToggles[id] === "off" ? "on" : "off";
	};
	const doAction = async () => {
		if (actionOn) {
			$instrumentStyles[id] = songId === "straight" ? "missing" : "straight";
			if (songId !== "straight") $highlightedNotes[id] = [];
		} else {
			if (action === $currentAction) {
				const currentI = actions?.findIndex((d) => d === $currentAction);
				const nextAction =
					currentI + 1 < actions.length ? actions[currentI + 1] : null;
				$currentAction = nextAction;
			}

			$instrumentStyles[id] = action.style;
			const newNotes = $allParts.find(
				(d) => d.instrument === id && d.style === action.style
			).data;
			if (songId !== "straight")
				$highlightedNotes[id] = newNotes.filter(
					(d) => !startingData.includes(d)
				);
		}
		actionOn = !actionOn;
	};

	$: buttonText =
		action && actionOn
			? `un-${action.description}`
			: action && !actionOn
			? `${action.description}`
			: "";
	$: currentActionInstrumentIndex = [
		"bass",
		"hihat",
		"kick",
		"snare"
	].findIndex((d) => d === $currentAction?.instrument);

	onMount(() => {
		$xOffset = notesContainer.offsetLeft;
	});
</script>

<div class="instrument">
	<div class="label">{id}</div>

	<div
		class="notes"
		style:height={`${noteHeight}px`}
		bind:clientWidth={$width}
		bind:this={notesContainer}
		class:muted={$instrumentToggles[id] === "off"}
		on:click={() => mute(id)}
		on:keydown={() => mute(id)}
	>
		{#each data as note}
			{@const x = $xScale(note % beatsPerMeasure)}
			{@const color = colors[id]}
			{@const shape = shapes[id]}
			<Note
				noteData={note}
				instrumentId={id}
				{x}
				{color}
				{shape}
				height={noteHeight}
			/>
		{/each}

		{#each range(0, beatsPerMeasure, 0.5) as dot}
			{@const left = $xScale(dot)}
			<div class="dot" style:left={`${left}px`} />
		{/each}
	</div>

	<div class="action">
		<button
			class:visible={action &&
				$started &&
				(i <= currentActionInstrumentIndex ||
					($started && $currentAction === null))}
			class:pulse={i === currentActionInstrumentIndex}
			on:click={doAction}>{buttonText}</button
		>
	</div>
</div>

<style>
	.instrument {
		display: flex;
		align-items: center;
		margin: 1em 0;
	}
	.instrument:hover {
		cursor: pointer;
	}
	.muted {
		opacity: 0.5;
	}
	.notes {
		position: relative;
		width: 100%;
		margin: 0 1em 0 3em;
	}
	.label {
		width: 4em;
	}
	.action {
		font-family: var(--mono);
		font-size: var(--14px);
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.action button {
		visibility: hidden;
		width: 8em;
	}
	.action button.visible {
		visibility: visible;
	}
</style>