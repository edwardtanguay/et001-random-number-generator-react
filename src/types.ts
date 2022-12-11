export enum Phase {
	nobodySelectedYet = 'nobodySelectedYet',
	selectingNames = 'selectingNames',
	onlyOnePersonLeft = 'onlyOnePersonLeft',
	finished = 'finished'
}

export type Nullable<T> = T | null;