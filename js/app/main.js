//Main JS - Require JS config
require.config({
    "paths" : {
        "angular" : "../lib/angular.min",
        "angular-route" : "../lib/angular-route.min",
        "jquery" : "../lib/jquery.min",
        "bootstrap" : "../lib/bootstrap.min",
        "app" : "app",
        "detect" : "./controllers/detectController",
        "touchAPI" : "./controllers/touchAPIController",
        "geoAPI" : "./controllers/geoAPIController",
        "graphs" : "./controllers/graphController",
        "dynamicdata" : "./controllers/dynamicdataController",
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
        "ng-device-detector" : {
            "deps" : ['angular','re-tree']
        },
         "app" : {
            "deps" : ['angular','services','directives']
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