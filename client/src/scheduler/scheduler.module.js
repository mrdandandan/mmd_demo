(function() {
    ////
    // Module Definitions
    ////
    angular.module('scheduler', [
        'angularModalService'
    ]);

    ////
    // Constant
    ////
    angular.module('scheduler')
        .constant('API_CONFIG', {
            HOST: 'http://localhost',
            PORT: 8001
        });
})();