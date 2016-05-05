'use strict';

angular.module('myApp.translation-zh-chs', [])

    .config(function ($translateProvider) {
        $translateProvider.translations('zh-chs', {
            Hello:      '你好',
            View:       '你好',
        });
    });