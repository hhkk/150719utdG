'use strict';

// Configuring the Articles module
angular.module('microphones').run(['Menus',
	function(Menus) {
		// Set top bar menu items

		Menus.addMenuItem('topbar', 'Microphones', 'microphones', 'dropdown', '/microphones(/create)?');
		Menus.addSubMenuItem('topbar', 'microphones', 'List Microphones', 'microphones');
		Menus.addSubMenuItem('topbar', 'microphones', 'New Microphone', 'microphones/create');
	}
]);
