(function() {
    ////
    // Module Definitions
    ////
    angular.module('scheduler', []);

    ////
    // Constant
    ////
    angular.module('scheduler')
        .constant('API_CONFIG', {
            HOST: 'http://localhost',
            PORT: 8001
        });

    ////
    // Module Config
    ////
    angular.module('scheduler')
        .config(Config)
        .run(Run);

    Config.$inject = [];

    function Config() {

    }

    ////
    // Module Run
    ////
    Run.$inject = [];

    function Run() {

    }

})();