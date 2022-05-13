import { writable } from 'svelte/store';

export const isDark = writable(false);
export const isSideMenuOpen = writable(false);
export const isNotificationsMenuOpen = writable(false);

export const isProfileMenuOpen = writable(false);
export const isMobileMenuOpen = writable(false);
export const pageMenus = writable([]);

export const togglePageMenu = (name) => {
	pageMenus.update((pages) => {
		if (typeof pages[name] === 'undefined') {
			pages[name] = true;
		} else {
			pages[name] = !pages[name];
		}

		return pages;
	});
};
