import { writable } from 'svelte/store';
import { browser } from '$app/env';

export const USER_DETAILS = writable(
	browser &&
		((localStorage.getItem('USER_DETAILS') !== undefined &&
			JSON.parse(localStorage.getItem('USER_DETAILS'))) ||
			null)
);
USER_DETAILS.subscribe((value) => browser && (localStorage.USER_DETAILS = JSON.stringify(value)));
