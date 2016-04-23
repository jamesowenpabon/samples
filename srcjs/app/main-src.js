//Main JS - Require JS config
require.config({
    "paths" : {
        "bundle" : "../lib/bundlelib.min",
        "app" : "app",
        "directives" : "./directives/directives",
        "services" : "./services/services",
        "detect" : "./controllers/detectController",
        "touchAPI" : "./controllers/touchAPIController",
        "geoAPI" : "./controllers/geoAPIController",
        "graphs" : "./controllers/graphController",
        "dynamicdata" : "./controllers/dynamicdataController",
        "rjsresponsive" : "./controllers/rjsResponsiveController",
        "contact" : "./controllers/contactController",
        "mqresponsive" : "./controllers/mqResponsiveController",
        "jsconcepts" : "./controllers/jsConceptsController"
    },
    "shim"  : {
         "app" : {
            "deps" : ['services','directives'] 
        },
         "services" : {
            "deps" : ['bundle']
        },
         "directives" : {
            "deps" : ['bundle']
        }
    }
});

require(['app'], function() {
    angular.bootstrap(document, ['codingExamples']);
});