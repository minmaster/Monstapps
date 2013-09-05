define(
	["underscore", 
	"backbone",
	"views/idea",
	"views/analisis"], function(_, Backbone, ideaView, analisisView) {

	var AppRouter = Backbone.Router.extend({
	        routes: {
	            "": "ideaAction",
	            "idea": "ideaAction",
	            "analisis": "analisisAction",
	            "creatividad": "creatividadAction",
	            "magia": "magiaAction",
	            "exito": "exitoAction",
	            "contacto": "contactoAction"
	        },  
	        ideaAction: function(e) {
	        	view = new ideaView();   
	        	return false;
	        },
	        analisisAction: function(e) {
	        	view = new analisisView();   
	        	return false;
	        }
	});

	return {
		AppRouter: AppRouter
	}

});