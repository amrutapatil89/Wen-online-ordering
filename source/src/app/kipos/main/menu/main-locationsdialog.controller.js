(function() {
    'use strict';

    angular
        .module('app.kipos.main')
        .controller('LocationsDialogController', LocationsDialogController);

    /* @ngInject */
    function LocationsDialogController($scope, $mdDialog, $http, $rootScope, $q, uiGmapGoogleMapApi) {

        var vm = this;

        //below is the url prefix required for all the APIs
        var urlPrefix = "http://52.23.209.206:3000";

        //below object stores url for API calls
        var urlObject = {
            merchant: urlPrefix + "/api/v1/" + $rootScope.merchantId,
            all_merchants: urlPrefix + "/api/v1/accounts/4y_TUf5Wl/merchants"
        };

        $scope.closeDialog = function() {

            $mdDialog.hide();
        }//end of closeDialog function

        //for getting locations of merchants
        $http.get(urlObject.all_merchants)
        .then(function(response) {
            $scope.merchants = response.data.elements;
        });

        //for setting selected location by merchant
        $scope.setLocation = function(merchantId) {

            $rootScope.merchantId = merchantId;

            //for calling merchant data
            $http.get(urlObject.merchant)
            .then(function(response) {
                $rootScope.merchantInfo = response.data;
            });

            $mdDialog.hide();
        }


        //for formatting phone number in US format
        $scope.formatPhoneNumber = function(phoneNumber) {

            var formattedPhoneNumber = phoneNumber.slice(0,3) + "-" + phoneNumber.slice(3,6) + "-" + phoneNumber.slice(6,10);
            // console.log("formatted phone number: "+formattedPhoneNumber);
            return formattedPhoneNumber;
        }//end of formatPhoneNumber function

        var addZero = function(value) {

            var str = "";

            if(value < 10) {

                str = "0"+value;
            } else {

                str = value;
            }

            return str;
        }

        //for getting today's operational hours
        $scope.getHours = function(hours) {

            var days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
            var today = new Date();
            var day = today.getDay();
            var dayIndex = days[day];

            if(hours[0][dayIndex].elements.length == 0) {

                return 'Store is closed today.';
            }

            var startTime = hours[0][dayIndex].elements[0].start;
            var endTime = hours[0][dayIndex].elements[0].end;

            var startTimeHrs = parseInt(startTime/100);
            var endTimeHrs = parseInt(endTime/100);
            var startTimeMins = parseInt(startTime % 100);
            var endTimeMins = parseInt(endTime % 100);
            var startTimeHrsString = addZero(startTimeHrs);
            var endTimeHrsString = addZero(endTimeHrs);
            var startTimeMinsString = addZero(startTimeMins);
            var endTimeMinsString = addZero(endTimeMins);
            
            var startTimeString = startTimeHrsString + ":" + startTimeMinsString;
            var endTimeString = endTimeHrsString + ":" + endTimeMinsString;

            var object = {

                start: startTimeString,
                end: endTimeString
            }

            return object;
        }//end of getHours function

        uiGmapGoogleMapApi.then(function(maps) {

            console.log("Map is called");

            vm.labeledMap = {
                center: {
                    latitude: 35.027469,
                    longitude: -111.022753
                },
                zoom: 4,
                marker: {
                    id:0,
                    coords: {
                        latitude: 35.027469,
                        longitude: -111.022753
                    },
                    options: {
                        icon: {
                            anchor: new maps.Point(36,36),
                            origin: new maps.Point(0,0),
                            url: 'assets/images/maps/blue_marker.png'
                        }
                    }
                },
                options:{
                    scrollwheel:false
                }
            };
        });

    }//end of controller
})();