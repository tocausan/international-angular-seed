'use strict';

angular.module('myApp.main', ['pascalprecht.translate'])

    .controller('mainCtrl', function($scope, $translate) {

            $scope.language = 'fr-fr';

            /**
             * change language translation
             * */
            $scope.changeLanguage = function (key) {
                $translate.use(key);
            };

            /**
             * watch language translation
             */
            $scope.$watch('language',function(){
                $translate.use($scope.language);
            });

    });