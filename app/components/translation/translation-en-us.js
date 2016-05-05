'use strict';

angular.module('myApp.translation-en-us', [])

    .config(function ($translateProvider) {
        $translateProvider.translations('en-us', {
            Hello:      'Hello',
            View:       'View',
        });
    });