(function() {
    'use strict';

    angular
        .module('app.kipos.main')
        .controller('LoginDialogController', LoginDialogController);

    /* @ngInject */
    function LoginDialogController($scope, $mdDialog, $http, $rootScope,DataService) {

        var vm = this;

        console.log("I am initiated");

        // Initializing flag for showing / hiding loading indicator
        $scope.showLoading = false;

        // Flag for showing code dialog box after sending user details while registering
        vm.showCodeDialog = false;

        // Object for holding user details
        vm.userObject = {};
        vm.userObject.firstName="";
        vm.userObject.lastName="";
        vm.userObject.fullName="";
        vm.userObject.phone="";
        vm.userObject.formattedPhone="";
        vm.userObject.email="";
        vm.userObject.account="4y_TUf5Wl";
        vm.userObject.mobileCode="";
        vm.userObject.hashKey="";

        // Function for showing country code when focused on phone field
        $scope.showCountryCode = function(){

            if(vm.userObject.phone.length == 0)
            {
                vm.userObject.phone="+1-";

            }
           
        }

        // Function for closing dialog box
        $scope.closeDialog = function() {

            console.log("I am in closeDialog");
            $mdDialog.hide();

        } //end of closeDialog function

       $scope.showCodeDialog = function(){

            //$scope.postUserRegistration();
            //vm.showCodeDialog = true;

            console.log("I am in showCodeDialog");
        }

        // Function to display user registration page again
        $scope.backToLogin = function(){

                vm.showCodeDialog = false;

        }

        // Function to resend code
        $scope.resendCode = function(){

            $scope.postUserRegistration();
        }

        // Function for registering user
        $scope.postUserRegistration = function(){

            console.log("User Details:"+JSON.stringify(vm.userObject));

            var name= vm.userObject.fullName.split(" ");

            if(name.length>1)
            {
                vm.userObject.firstName = name[0];
                vm.userObject.lastName = name[1]; 
            }
            else
            {
                console.log("Invalid Name:"+JSON.stringify(name));
                return;


            }

            if(vm.userObject.phone.length != 13){

                console.log("Invalid Phone:"+JSON.stringify(vm.userObject.phone));
                return;
            }
            
            $scope.showLoading = true;

            var appUrl="http://52.23.209.206:3000/api/v1/users/register";
            var payload ={
                "accountNumber":vm.userObject.account,
                "phone":vm.userObject.phone,
                "firstName":vm.userObject.firstName,
                "lastName":vm.userObject.lastName,
                "email":vm.userObject.email
            };

            // Service for making post API call
            DataService.postData(appUrl, payload, {})
            .then(function(data){

                console.log("Registration successful:"+JSON.stringify(data.data.data));
                $scope.showLoading = false;
                vm.showCodeDialog = true;
                vm.userObject.hashKey = data.data.data;

                
            })
            .catch(function(error){

                console.log("Errors while registration:"+JSON.stringify(error));
                $scope.showLoading = false;

            });
        }

        // Function for confirming code for user registration
        $scope.postCodeConfirmation = function(){

            $scope.showLoading = true;

            var appUrl="http://52.23.209.206:3000/api/v1/users/confirm_registration";

            var deviceInfo = {};
            deviceInfo.deviceId="WEBAPP";
            deviceInfo.devicePlatform="BLACKBERRY";
            deviceInfo.deviceOSVersion="1";


            var payload ={
                "code":parseInt(vm.userObject.mobileCode),
                "hash":vm.userObject.hashKey,
                "deviceInfo":deviceInfo
            };

            // Service for making post API call
            DataService.postData(appUrl, payload, {})
            .then(function(data){

                console.log("Code Confirmation successful:"+JSON.stringify(data));
                $scope.showLoading = false;
                $scope.closeDialog();

                
            })
            .catch(function(error){

                console.log("Error while code Confirmation:"+JSON.stringify(error));
                $scope.showLoading = false;

            });
        }
    }

})();