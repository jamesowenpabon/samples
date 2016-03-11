//Main JS - Require JS config
require.config({
    "paths" : {
        "angular" : "//ajax.googleapis.com/ajax/libs/angularjs/1.4.9/angular.min",
        "angular-route" : "//ajax.googleapis.com/ajax/libs/angularjs/1.4.9/angular-route",
        "angular-animate" : "//ajax.googleapis.com/ajax/libs/angularjs/1.4.9/angular-animate",
        "jquery" : "//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min",
        "bootstrap" : "//maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min",
        "app" : "app",
        "controllers" : "./controllers/controllers",
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
        "angular-animate" : {
            "deps" : ['angular']
        },
        "ng-device-detector" : {
            "deps" : ['angular','re-tree']
        },
         "app" : {
            "deps" : ['angular','controllers','services','directives']
        },
         "controllers" : {
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