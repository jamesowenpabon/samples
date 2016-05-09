define(["app"],function(sampleApp){sampleApp.register.controller("geoAPI",function($rootScope,$scope,geolocateSvc,exSrcConSrv,arryObjSrv){var gl=this;$scope.$on("$viewContentLoaded",function(){gl.tracker=!0,gl.mapUrl="/images/loading1.gif",geolocateSvc.getCurrentGPS().then(gl.setCoords,gl.onerror)}),$rootScope.exSrcObj=exSrcConSrv,$rootScope.exSrcObj.exsrccon({html:{label:"HTML",src:"pages/htmlapi/geolocate.html",icon:"fa fa-html5"},controller:{label:"geoAPICtrlr",src:"srcjs/app/controllers/geoAPIController-src.js",icon:"fa fa-dot-circle-o"},css:{label:"SCSS",src:"scss/app/geolocate.scss",psrc:"css/app/geolocate.css",icon:"fa fa-css3"}}),$rootScope.exSrcLinkArray=arryObjSrv.parseObj($rootScope.exSrcObj),gl.mapsData=function(){function mapsdata(obj){this.uri=obj.uri,this.center=obj.center,this.heading=obj.heading,this.markers=obj.markers,this.zoom=obj.zoom,this.size=obj.size,this.mapType=obj.mapType,this.streetLocation=obj.streetLocation,this.visible=obj.visible}return mapsdata}(),gl.setPositionData=function(pos,callback){gl.gpsLocationData={lat:pos.coords.latitude,"long":pos.coords.longitude,latlon:pos.coords.latitude+","+pos.coords.longitude,accuracy:pos.coords.accuracy,altitude:pos.coords.altitude,heading:pos.coords.heading,speed:pos.coords.speed},callback()},gl.populateObjects=function(callback){gl.roadMap=new gl.mapsData({uri:"https://maps.googleapis.com/maps/api/staticmap",center:"gps",heading:"",markers:[{color:"blue",label:"U",position:"gps"}],zoom:"17",size:"400x300",mapType:"",streetLocation:"",visible:""}),gl.me=new gl.mapsData({uri:"https://maps.googleapis.com/maps/api/staticmap",center:"",heading:"",markers:[{color:"blue",label:"U",position:"gps"},{color:"red",label:"M",position:"stony+point,NY"}],zoom:"",size:"400x300",mapType:"",streetLocation:"",visible:"stony+point,NY"}),gl.streetView=new gl.mapsData({uri:"https://maps.googleapis.com/maps/api/streetview",center:"",heading:"gps",markers:[],zoom:"",size:"400x300",mapType:"",streetLocation:"gps",visible:""}),gl.satelliteMap=new gl.mapsData({uri:"https://maps.googleapis.com/maps/api/staticmap",center:"gps",heading:"",markers:[{color:"blue",label:"U",position:"gps"}],zoom:"17",size:"400x300",mapType:"satellite",streetLocation:"",visible:""}),gl.defaultMap=gl.roadMap,callback()},gl.generateMap=function(){gl.mapsData=gl.defaultMap,gl.constructMapUrl()},gl.constructMapUrl=function(arg){(isNaN(gl.gpsLocationData.heading)||null==gl.gpsLocationData.heading)&&(gl.gpsLocationData.heading="");for(var mapUri=gl.mapsData.uri+"?",maptype="maptype="+gl.mapsData.mapType+"&",mapLocation="gps"==gl.mapsData.streetLocation?"location="+gl.gpsLocationData.latlon+"&":"location="+gl.mapsData.streetLocation+"&",mapCenter="gps"==gl.mapsData.center?"center="+gl.gpsLocationData.latlon+"&":"center="+gl.mapsData.center+"&",mapHeading="gps"==gl.mapsData.heading?"heading="+gl.gpsLocationData.heading+"&":"heading="+gl.mapsData.heading+"&",mapZoom="zoom="+gl.mapsData.zoom+"&",mapSize="size="+gl.mapsData.size+"&",mapMarkers="",mapVisible="visible="+gl.mapsData.visible,i=0;i<gl.mapsData.markers.length;i++){var markerCoords="gps"==gl.mapsData.markers[i].position?gl.gpsLocationData.latlon:gl.mapsData.markers[i].position;mapMarkers+="markers=color:"+gl.mapsData.markers[i].color+"|label:"+gl.mapsData.markers[i].label+"|"+markerCoords+"&"}gl.mapUrl=mapUri+maptype+mapLocation+mapCenter+mapHeading+mapMarkers+mapSize+mapZoom+mapVisible},gl.watchMap=function(arg){"start"==arg?gl.watchID=navigator.geolocation.watchPosition(function(position){$scope.$apply(function(){$scope.position=position;var cords=$scope.position.coords;gl.gpsLocationData.lat=cords.latitude,gl.gpsLocationData["long"]=cords.longitude,gl.gpsLocationData.latlon=gl.gpsLocationData.lat+","+gl.gpsLocationData["long"],gl.gpsLocationData.accuracy=cords.accuracy,gl.gpsLocationData.altitude=cords.altitude,gl.gpsLocationData.altitudeAccuracy=cords.altitudeAccuracy,gl.gpsLocationData.heading=cords.heading,gl.gpsLocationData.speed=cords.speed,gl.constructMapUrl()})},gl.onerror,gl.geoOption):"stop"==arg&&navigator.geolocation.clearWatch(gl.watchID)},gl.setCoords=function(pos){gl.setPositionData(pos,function(){gl.populateObjects(function(){gl.generateMap()})})},gl.changeMap=function(obj){gl.mapsData=obj,gl.constructMapUrl()},gl.geoOption={enableHighAccuracy:!0},gl.onerror=function(err){gl.errorMessage=err.message},console.log("-----Controller Scope-----"),console.log($scope),console.log("-----gl Controller Scope-----"),console.log(gl)})});
//# sourceMappingURL=../maps/controllers/geoAPIController.js.map
