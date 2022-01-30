import { writable } from 'svelte/store';

export const isDraftSet = writable(false);

export const teams = writable({})