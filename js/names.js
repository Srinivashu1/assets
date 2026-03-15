//  Initials.js - This script is used to generate initials for users.

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.user-initials').forEach(function (el) {
        let name = el.getAttribute('data-name-initials').trim();
        let words = name.split(/\s+/);
        let initials = '';

        words.forEach(function (word) {
            initials += word.charAt(0).toUpperCase();
        });

        el.textContent = initials;
    });
});
