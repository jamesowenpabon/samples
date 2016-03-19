//Main JS - Require JS config
require.config({
    "paths" : {
        "angular" : "../lib/angular.min",
        "angular-route" : "../lib/angular-route.min",
        "angular-touch" : "../lib/angular-touch.min",
        "jquery" : "../lib/jquery.min",
        "bootstrap" : "../lib/bootstrap.min",
        "app" : "app",
        "coreController" : "./controllers/coreController",
        "detectController" : "./controllers/detectController",
        "htmlAPIController" : "./controllers/htmlAPIController",
        "graphController" : "./controllers/graphController",
        "dynamicdataController" : "./controllers/dynamicdataController",
        "services" : "./services/services",
        "directives" : "./directives/directives",
        "ng-device-detector" : "../lib/ng-device-detector",
        "re-tree" : "../lib/re-tree"
    },
    "shim"  : {
        "angular" : {
            "deps" : ['jquery','bootstrap']
        },
        "bootstrap" : {
            "deps" : ['jquery']
        },
        "angular-route" : {
            "deps" : ['angular']
        },
        "angular-touch" : {
            "deps" : ['angular']
        },
        "ng-device-detector" : {
            "deps" : ['angular','re-tree']
        },
         "app" : {
            "deps" : ['angular','coreController','services','directives']
        },
         "coreController" : {
            "deps" : [  'angular',
                        'graphController',
                        'dynamicdataController',
                        'detectController',
                        'htmlAPIController'
                    ]
        },
         "htmlAPIController" : {
            "deps" : ['angular']
        },
         "graphController" : {
            "deps" : ['angular']
        },
        "dynamicdataController" : {
            "deps" : ['angular']
        },
        "detectController" : {
            "deps" : ['angular']
        },
         "services" : {
            "deps" : ['angular']
        },
         "directives" : {
            "deps" : ['angular']
        }
    }
});

require(['app'], function() {
    angular.bootstrap(document, ['codingExamples']);
});