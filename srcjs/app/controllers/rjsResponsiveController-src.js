define (['app'] , function(sampleApp)    { 
    
    sampleApp.register.controller('rjsresponsive', function($scope)   {
        var rr = this;
        
        Response.ready(function($) {
            Response.create({
                prop: "width",
                prefix: "r",
                breakpoints : [0, 768, 992]
            });
            
        })
        
        console.log("-----rr Controller Scope-----");
	    console.log(rr);
    })
    
})