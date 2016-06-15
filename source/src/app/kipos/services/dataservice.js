(function() {
    'use strict';

    angular
        .module('app.kipos.main')
        .factory('DataService', DataService);
// debugLogService
    function DataService($http, $q, $timeout, LogService) {
        var serverError = "Invalid response from Server";
        var requestFailError = "Request was rejected from server";
        var data;
        var obj;
        return {
            getData: function(url) {
                // the $http API is based on the deferred/promise APIs exposed by the $q service
                // so it returns a promise for us by default
                return $http.get(url)
                    .then(function(response) {
                        if (typeof response.data === 'object') {
                            return response.data;
                        } else {
                            // invalid response
                        
                            LogService.error({ message: serverError, data: response } );

                            return $q.reject(response.data);
                        }

                    }, function(response) {
                        // something went wrong
                        LogService.error({ message: requestFailError, data: response } );
                        return $q.reject(response.data);
                    });
            },

            postData: function(url, data, headers){
                var deferredObj = $q.defer();
                return $http.post(url, data)
                .success(function(data, status, headers, config) {
                    // this callback will be called asynchronously
                    // when the response is available
                    if (typeof data === 'object') {
                            return deferredObj.resolve(data);
                        } else {
                            // invalid response
                            LogService.error({ message: serverError, data: data } );
                            return deferredObj.reject(data);
                        }
                  })
                .error(function(data, status, headers, config) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                    // something went wrong
                    LogService.error({ message: requestFailError, data: data } );
                    return deferredObj.reject(data);
                  });
                return deferredObj;
            },

            putData: function(url, data, headers){
                var deferredObj = $q.defer();
                return $http.put(url, data)
                .success(function(data, status, headers, config) {
                    // this callback will be called asynchronously
                    // when the response is available
                    if (typeof data === 'object') {
                            return deferredObj.resolve(data);
                        } else {
                            // invalid response
                            LogService.error({ message: serverError, data: data } );
                            return deferredObj.reject(data);
                        }
                  })
                .error(function(data, status, headers, config) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                    // something went wrong
                    LogService.error({ message: requestFailError, data: data } );
                    return deferredObj.reject(data);
                  });
                return deferredObj;
            }, 

            deleteData: function(url){
                return $http.delete(url)
                    .then(function(response) {
                       return response.data;
                    }, function(response) {
                        LogService.error({ message: requestFailError, data: data } );
                        return $q.reject(response.data);
                    });
            }

        } // end of main return           

    }// end of DataService
})();
