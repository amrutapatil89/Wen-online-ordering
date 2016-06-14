
(function() {
    // 'use strict';

angular
    .module('app.kipos.main')
    .factory("LogService", LogService);

    function LogService($log, $window, API_CONFIG) {

    return { 

            error: function(message,data){ 
            // preserve default behaviour 
            $log.error.apply($log, arguments); 

              try {
              // send server side 
                $.ajax({ 
                    type: "POST", 
                    url: API_CONFIG.url + "web_errors", 
                    contentType: "application/json", 
                    type: "POST",
                    data: angular.toJson({
                            level: "Error",
                            meta:{      
                                errorUrl       : $window.location.href,
                                merchantId     : $window.sessionStorage.merchant,
                                errorBody      : message.data,
                                data           : data
                            },
                        message: message.message,
                        appType: "WebOnlineOrdering"
                        })
                    })
                 } catch ( loggingError ) {
                        // For console
                        $log.warn( "Error logging failed" );
                        $log.log( loggingError );
                    }
            }, 
            debug: function(message){ 
                $log.log.apply($log, arguments); 

                $.ajax({ 
                    type: "POST", 
                    url: API_CONFIG.url + "web_errors",
                    contentType: "application/json", 
                    data: angular.toJson({ 
                        level: "Debugging",
                        meta:{
                             messageUrl   : $window.location.href,
                             merchantId   : $window.sessionStorage.merchant,
                             appType: "WebOnlineOrdering"
                        },
                        message: message.message
                        }) 
                }); 
        } 
    
    } // end of main return           
} 

})();