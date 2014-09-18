'use strict';

/* Controllers */

var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function($scope) {
    $scope.phones = [
        {'name': 'iHuman',
            'snippet': 'Better than a phone, it is a new friend.'},
        {'name': 'Clachel Tablet',
            'snippet': 'So great, it speaks for itself.'},
        {'name': 'AWES 4G',
            'snippet': 'You wish you had this phone.'},
        {'name': 'AMAZ LG 6S',
            'snippet': 'So amazing it flies right out of your hand.'}
    ];
});
