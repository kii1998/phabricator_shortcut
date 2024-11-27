// ==UserScript==
// @name         phabbutton
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Press Command+S to submit multiple buttons on phab.almostnewz.com
// @author       You
// @match        *://phab.almostnewz.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Add an event listener for the keydown event
    document.addEventListener('keydown', function(event) {
        // Check if Command (Meta on Mac) and 'S' are pressed
        if (event.metaKey && event.key === 's') {
            event.preventDefault(); // Prevent the default save behavior

            // Find the "Set Sail for Adventure" button
            const adventureButton = document.querySelector('button[data-sigil="submit-transactions"]');

            // Find the "Save Changes" button
            const saveChangesButton = document.querySelector('button[name="__submit__"]:not([data-sigil])');

            // Click the "Set Sail for Adventure" button if it exists
            if (adventureButton) {
                adventureButton.click();
                console.log('Command+S pressed. "Set Sail for Adventure" button clicked!');
            }

            // Click the "Save Changes" button if it exists
            if (saveChangesButton) {
                saveChangesButton.click();
                console.log('Command+S pressed. "Save Changes" button clicked!');
            }

            // If neither button is found
            if (!adventureButton && !saveChangesButton) {
                console.warn('No matching buttons found!');
            }
        }
    });
})();
