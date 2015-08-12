'use strict';

// Configuring the Articles module
angular.module('ustodos').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		alert ('sdfsdfffffffffffff');
		Menus.addMenuItem('topbar', 'Ustodos', 'ustodos', 'dropdown', '/microphones(/create)?');
		Menus.addSubMenuItem('topbar', 'ustodos', 'List Microphones', 'microphones');
	}
]);
