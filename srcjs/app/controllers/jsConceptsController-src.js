// JSConcepts Controller

define(["app"], function(sampleApp)    {
    
sampleApp.register.controller('jsconcepts', function($sce, $scope, $rootScope, exSrcConSrv, arryObjSrv, logOutputSrv)  {
    var jc = this;
        
    $rootScope.exSrcObj = new exSrcConSrv.exSrcCon(
	{
		"html" : {	
		"label":"HTML", 
		"src":"pages/jsconcepts.html", 
		"icon":"fa fa-html5"
		},
		"controller" : {	
		"label":"jsConceptsCtrlr", 
		"src":"srcjs/app/controllers/jsConceptsController-src.js", 
		"icon":"fa fa-dot-circle-o"
		},
		"css" : {
		"label":"SCSS", 
		"src":"scss/app/js-concepts.scss", 
		"psrc":"css/app/js-concepts.css",
		"icon":"fa fa-css3"
		}
	}); 
        
    $rootScope.exSrcLinkArray = arryObjSrv.parseObj($rootScope.exSrcObj);  
    
    
    
    $scope.trust = $sce.trustAsHtml;
    
    //IIFE Example
    var localGlobal = 0;
    var globalVariable = 5;
	var myIIFE = (function(localGlobal, localWindow)	{
 		localGlobal = 100;
 		setTimeout(function(){localWindow.document.getElementById(("iife")).innerHTML="YES"});
 		return localGlobal;
 	})(globalVariable, window);

	var iifeResult = 	"globalVariable = " + globalVariable + "<br>" +
						"localGlobal = " + localGlobal + "<br>"+
						"myIIFE = " + myIIFE + "<br>";
						
	// Namespacing
	
	var newSpace = newSpace || {};
	(function(o)	{
		//console.log(o);
		o.prop1 = "NewSpace Value";
		o.func1 = function()	{
			//console.log("----------------------");
			//console.log("| This is NewSpace func1");
			//console.log("| NewSpace prop1: "+o.prop1);
			//console.log("| Global prop1: "+prop1);
			//console.log("----------------------"); 
		}
	})(newSpace)
						
	var	prop1 = "Global Value";
	var func1 = function()	{
		//console.log("----------------------");
		//console.log("| This is Global func1");
		//console.log("| Global prop1: "+prop1);
		//console.log("| NewSpace prop1: "+newSpace.prop1);
		//console.log("----------------------");
	}()			
	newSpace.func1();
	
	var namespaceResult =	"----------------------" + "<br>"+
							"| This is Global func1" + "<br>"+
							"| Global prop1: "+prop1 + "<br>"+
							"| NewSpace prop1: "+newSpace.prop1 + "<br>"+
							"----------------------" + "<br>"+
							"----------------------" + "<br>" +
							"| This is NewSpace func1" + "<br>" +
							"| NewSpace prop1: "+newSpace.prop1 + "<br>" +
							"| Global prop1: "+prop1 + "<br>" +
							"----------------------" + "<br>";

    // Enclosure Example
    var arithmetic = (function () {
		var counter = 0;
		return {
			add: function(){
				counter += 1; 
				return  counter.toString();
			},
			subtract: function(){
				counter -= 1; 
				return counter.toString()
			}
		};
	})();
	
	
	// This Example
	
	var funcExp = function(invoType)	{
		this.name = "funcExp";
		thisResult += "| " + this.name + " " + invoType + "<br>";
		thisResult += "| this = " + this + "<br>";
	}
	
	function funcState(invoType)	{
		this.name = "funcState";
		thisResult += "| " + this.name + " " + invoType + "<br>";
		thisResult += "| this = " + this + "<br>";
	}
	
	var obj = {
			name : "obj",
			method1 : function(invoType)	{
				thisResult += "| " + this.name + " " + invoType + "<br>";
				thisResult += "| this = " + this + "<br>";
			}
	}
	
	var thisResult = "---------------------------" + "<br>";
	funcExp("Invoke As Function");
	thisResult += "| window.name: " + window.name + "<br>";
	var invoExpAsConst = new funcExp("Invoke with Constructor");
	thisResult += "| invoExpAsConst.name: " + invoExpAsConst.name + "<br>";
	thisResult += "---------------------------" + "<br>";
	
	thisResult += "---------------------------" + "<br>";	
	funcState("Invoke As Function");
	thisResult += "| window.name: " + window.name + "<br>";
	var invoStaAsConst = new funcState("Invoke with Constructor");
	thisResult += "| invoStaAsConst.name: " + invoStaAsConst.name + "<br>";
	thisResult += "---------------------------" + "<br>";	
	
	thisResult += "---------------------------" + "<br>";		
	obj.method1("Invoke As Method"); 
	thisResult += "| obj.name: " + obj.name + "<br>";
	var objAsConst = new obj.method1("Invoke with Constructor");
	thisResult += "| objAsConst.name: " + objAsConst.name + "<br>";
	thisResult += "---------------------------" + "<br>";	
	
	thisResult += "---------------------------" + "<br>";	
	funcExp.call(obj, "Invoke With Function Method");
	thisResult += "| obj.name: " + obj.name + "<br>";
	thisResult += "---------------------------" + "<br>";
	
	
	//Object Example
	
	function PersonObjConstr()	{
		this.firstname = "John";
		this.lastname = "Doe";
		this.greetFullName = function()	{
			return "PersonObjConstr says: Hello " + this.firstname + 
			" " + this.lastname;
		};
	}
	
	var personObjLit = {
		firstname : "John",
		lastname: "Doe",
		greetFullName : function() {
			return "personObjLit says: Hello " + this.firstname + 
			" " + this.lastname;	
		}
	};
	
	var james = new PersonObjConstr();
	console.log(james.greetFullName());
	james.firstname = "James";
	james.lastname = "Pabon";
	console.log(james.greetFullName());
	
	PersonObjConstr.prototype.formalGreet = function() {
		return "Good day " + this.lastname + ", " + this.firstname;
	};
	console.log(james.formalGreet());
	

	console.log(personObjLit.greetFullName());
	var valerie = Object.create(personObjLit);
	valerie.firstname = "Valerie";
	console.log("valerie.firstname: " + valerie.firstname);
	console.log(valerie.greetFullName());
	
    personObjLit.formalGreet = function() {
		return "Good day " + this.lastname + ", " + this.firstname;
	};
	
	console.log(valerie.formalGreet());
    
    
    jc.concept = [
    	
    {
	"name" : "IIFE",
	"def" :	"A <dfn><abbr title='Immediately Invoked Function Element'>IIFE</abbr></dfn> "+
			"is a JavaScript function that runs as soon as it is defined.",
	"cite" : "MDN - https://developer.mozilla.org/en-US/docs/Glossary/IIFE",
	"defDesc" : 
				"IIFE's are commonly used by JS libraries and frameworks to place "+
		        "their code within a local scope thus avoiding naming collisions with other "+
		        "libraries and application JavaScript code. "+
				"The code below shows how the IIFE creates a new execution context "+ 
		        "where a new varibale named <code>localGlobal</code> is mutated and "+
		        "the local reference of the window object is utalized to modify the DOM. "+
		        "Note that the two varibales named <code>localGlobal</code> point "+
		        "to seperate locations in memory for their values because of the "+
		        "differnt executions contexts in which they were created.",
		        
	"code" :	"\n"+
				"\t // IIFE\n"+
				"\n"+
				"\t var localGlobal = 0;\n"+
				"\t var globalVariable = 5;\n"+
				"\t var myIIFE = (function(localGlobal, localWindow) {\n"+
			 	"\t\t localGlobal = 100;\n"+
			 	"\t\t localWindow.document.getElementById((\"testDiv\")).innerHTML=\"YES\";\n"+ 
			 	"\t\t return localGlobal;\n"+
			 	"\t })(globalVariable, window);\n"+
				"\n"+
				"\t console.log(\"globalVariable = \" + globalVariable);\n"+
				"\t console.log(\"localGlobal = \" + localGlobal);\n"+
				"\t console.log(\"myIIFE = \" + myIIFE);\n",
	"resultsLabel" : "<b>console.log output</b><br>",
	"controls" :	{	"objPrpName" : "iife",
						"type": "test-div",
						"templateHead" : "Contents of testDiv"
					},
	"result" : iifeResult,
	"xboxDesc" : 	"The above shows the <code>globalVariable</code> maintaining  "+
            		"its value, two diffent values of the two <code>localGlobal</code> "+
            		"varibles, the value of <code>myIIFE</code> which is assigned "+
            		"the return value of the anonymous function and the window object referenced "+
            		"within the IIFE local scope setting the HTML of <code>#testDiv</code>"
	},	
	{
	"name" : "Namespacing",
	"def" :	"A <dfn>Namespace</dfn> is a seperate execution context which "+
			"encapsulates a block of code to avoid collisions with other "+
			"objects or variables.",
	"cite" : "Me",
	"defDesc" : "The code below shows a new execution context created by an  "+ 
		        "IFFE. An empty objected named <code>var newSpace</code> is defined, "+
		        "and set as an argument for the function. The "+
		        "<code>o.prop1 = \"NewSpace Value\"</code> property "+
		        "and the <code>o.func1 = function() {...}</code> method are defined  "+
		        "on the empty object and can then be accessed via "+
		        "<code>newSpace.prop1</code> &  "+ 
		        "<code>newSpace.func1</code> so as not to collide with the global "+
		        "<code>var prop1</code> & <code>var func1</code>.",
	"code" :	"\n"+					
				"\t // Namespacing\n"+
				"\n"+
				"\t var newSpace = newSpace || {};\n"+
				"\t (function(o) {\n"+
				"\t\t console.log(o);\n"+
				"\t\t o.prop1 = \"NewSpace Value\";\n"+
				"\t\t o.func1 = function() {\n"+
				"\t\t\t console.log(\"----------------------\");\n"+
				"\t\t\t console.log(\"| This is NewSpace func1\");\n"+
				"\t\t\t console.log(\"| NewSpace prop1: \"+o.prop1);\n"+
				"\t\t\t console.log(\"| Global prop1: \"+prop1);\n"+
				"\t\t\t console.log(\"----------------------\");\n"+
				"\t\t }\n"+
				"\t })(newSpace)\n"+
				"\n"+					
				"\t var	prop1 = \"Global Value\";\n"+
				"\t var func1 = function() {\n"+
				"\t\t console.log(\"----------------------\");\n"+
				"\t\t console.log(\"| This is Global func1\");\n"+
				"\t\t console.log(\"| Global prop1: \"+prop1);\n"+
				"\t\t console.log(\"| NewSpace prop1: \"+newSpace.prop1);\n"+
				"\t\t console.log(\"----------------------\");\n"+
				"\t }()\n"+			
				"\t newSpace.func1();\n",
	"resultsLabel" : "<b>console.log output</b><br>",
	"controls" :	{	"objPrpName" : "namespace"
					},
	"result" : namespaceResult,
	"xboxDesc" : 	"The above output shows how creating a name space prevents "+
            		"variables of the same name from colliding."
	},
	{
	"name" : "Closures",
	"def" :	"A <dfn>closure</dfn> is a special kind of object that combines "+
			"two things: a function, and the environment in which that function "+
			"was created.",
	"cite" : "MDN - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures",
	"defDesc" : "The code below shows a closure around the <code>add: function(){...}</code> "+ 
		        "and <code>subtract: function(){...}</code>. A closure is a special "+
		        "property of JavaScript which preserves the scope chain for functions "+
		        "which have utalized free variables that were created in execution contexts "+
		        "which are no longer in memeory. This allows the "+
		        "<code>add: function(){return counter += 1;}</code> and <code>subtract: "+ 
		        "function(){return counter -= 1;}</code> to retain access to the "+
		        "counter variable even after the anonymous execution context which created "+ 
		        "it has ended. In the example <code>var arithmetic</code> is assigned an "+
		        "<abbr title='Immediately Invoked Function Element'>IFFE</abbr>, "+
		        "however creating a closure does not need to utalize immediately invoked "+
		        "functions.",
	"code" :"\n"+
			"\t // Closures\n"+
			"\n"+
			"\t var arithmetic = (function () {\n"+
	        "\t\t var counter = 0;\n"+
			"\t\t return {\n"+
			"\t\t\t add: function(){return counter += 1;},\n"+
			"\t\t\t subtract: function(){return counter -= 1;}\n"+
			"\t\t }\n"+
			"\t })();",
	"resultsLabel" : "<b>count</b> = ",
	"controls" : {	"type": "button-two", 
					"objPrpName" : "closure", 
					"buttonProps" : {	"b1text": "Add", 
										"b1Func" : "add", 
										"b2text" : "subtract", 
										"b2Func" : "subtract"
									}
				},
	"result" : "0",
	"action" :	function(operation)	{
					this.result = arithmetic[operation]();	
	},
	"xboxDesc" : 	"Click the buttons above to modify the "+
            		"value of the <code>counter</code> variable made possible by "+
            		"the closure reference "+
            		"around <code>add()</code> & <code>subtract()</code> functions."
	},
	{
	"name" : "this",
	"def" :	"<dfn><code>this</code></dfn> is a JavaScript keyword with a value that "+
			"is determined by its lexical context and method of invocation.",
	"cite" : "Me",
	"defDesc" : "The code below shows three differnt function definitions, function "+ 
		        "expression, function statement & function as a method of an object. "+
		        "There are 4 different ways to invoke a function, as a function, with "+
		        "a constructor, as an object method and with a function method. "+
		        "When invoked as a function, <code>this</code> references the Global "+
		        "object. When invoked with a constructor <code>this</code> references  "+
		        "the an empy object created by use of the <code>new</code> keyword  "+
		        "which is returned to the variable in constructor assignment. When "+ 
		        "invoked as a method of an object <code>this</code> references the "+
		        "object the invoked method is sitting on. Note however that if a method "+
		        "is invoked with a constructor the <code>this</code> variable still references "+
		        "the empy object created by use of the <code>new</code> keyword which "+
		        "is why <code>objAsConst.name</code> "+
		        "is undefined in the output below. Finally when invoked with a function "+
		        "method this takes the value of the context passed to it which is why "+
		        "<code>obj.name</code> is equal to <code>funcExp</code> in the final "+
		        "example below.",
	"code" :	"\n"+					
				"\t // this Example\n"+
				"\n"+
				"\t var funcExp = function(invoType) {\n"+
				"\t\t this.name = \"funcExp\";\n"+
				"\t\t console.log(\"| \" + this.name + \" \" + invoType);\n"+
				"\t\t console.log(\"| this = \" + this);\n"+
				"\t }\n"+
				"\n"+
				"\t function funcState(invoType) {\n"+
				"\t\t this.name = \"funcState\";\n"+
				"\t\t console.log(\"| \" + this.name + \" \" + invoType);\n"+
				"\t\t console.log(\"| this = \" + this);\n"+
				"\t }\n"+
				"\n"+
				"\t var obj = {\n"+
				"\t\t name : \"obj\",\n"+
				"\t\t method1 : function(invoType) {\n"+
				"\t\t\t console.log(\"| \" + this.name + \" \" + invoType);\n"+
				"\t\t\t console.log(\"| this = \" + this);\n"+
				"\t\t }\n"+
				"\t }\n"+
				"\n"+
				"\t console.log(\"---------------------------\");\n"+
				"\t funcExp(\"Invoke As Function\");\n"+
				"\t console.log(\"| window.name: \" + window.name);\n"+
				"\t var invoExpAsConst = new funcExp(\"Invoke with Constructor\");\n"+
				"\t console.log(\"| invoExpAsConst.name: \" + invoExpAsConst.name);\n"+
				"\t console.log(\"---------------------------\");\n"+
				"\n"+
				"\t console.log(\"---------------------------\");\n"+
				"\t funcState(\"Invoke As Function\");\n"+
				"\t console.log(\"| window.name: \" + window.name);\n"+
				"\t var invoStaAsConst = new funcState(\"Invoke with Constructor\");\n"+
				"\t console.log(\"| invoStaAsConst.name: \" + invoStaAsConst.name);\n"+
				"\t console.log(\"---------------------------\");\n"+
				"\n"+
				"\t console.log(\"---------------------------\");\n"+		
				"\t obj.method1(\"Invoke As Method\");\n"+
				"\t console.log(\"| obj.name: \" + obj.name);\n"+
				"\t var objAsConst = new obj.method1(\"Invoke with Constructor\");\n"+
				"\t console.log(\"| objAsConst.name: \" + objAsConst.name);\n"+
				"\t console.log(\"---------------------------\");\n"+
				"\n"+
				"\t console.log(\"---------------------------\");\n"+
				"\t funcExp.call(obj, \"Invoke With Function Method\");\n"+
				"\t console.log(\"| obj.name: \" + obj.name);\n"+
				"\t console.log(\"---------------------------\");\n",
	"resultsLabel" : "<b>console.log output</b><br>",
	"controls" :	{	"objPrpName" : "namespace"
					},
	"result" : thisResult,
	"xboxDesc" : 	"The above output shows the value of <code>this</code> as well "+
            		"as the <code>name</code> variable under differnt lexical & invocation conditions."
	}
	];
	

    
    
	
		
		
            
    
        
    console.log("-----jc Controller Scope-----");
	console.log(jc);    
	
	
	
    	
        
});    
})