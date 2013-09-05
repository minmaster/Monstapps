require.config({
  baseUrl: "js/",
  paths: {
    jquery: 'vendor/jquery',
    modernizr: 'vendor/modernizr', 
    backbone: 'vendor/backbone',
    underscore: 'vendor/underscore',
    handlebars: 'vendor/handlebars', 
    domReady: "plugins/domReady",
    jtransit: "plugins/jtransit",
    routes: "routes"
  },
  shim: {
        'handlebars': {
            exports: 'Handlebars'
    	}
  }
});


require([ 
        "domReady",
		 "jquery",
		 "jtransit", 
		 "modernizr",
		 "routes",
		 "views/twitter",
		 "views/facebook"
		], function(domReady, $, jtransit, Modernizr, r, viewTwitter, viewFacebook) {
		 	
	 	domReady(function () {

	 		appRouter = new r.AppRouter(); 
			Backbone.history.start();
	 		
			
			$('nav li').hover(
				function() {	
					$('.texto', this).stop().transition({ x: 175 }, 300, 'ease');					
				},
				function() {					
					$('.texto', this).stop().delay(100).transition({ x: -200 }, 300, 'ease');
					
				}
			)


			$('footer li').hover(
				function() {	
					$('.cuadro', this).stop().transition({scale: 1.1}, 300, 'ease');					
				},
				function() {					
					$('.cuadro', this).stop().delay(100).transition({scale: 1}, 300, 'ease');					
				}
			)	

			$('footer li.twitter').on("click", function(e) {
				vTwitter = new viewTwitter();
				return false;
			});

			$('footer li.facebook').on("click", function(e) {
				vFacebook = new viewFacebook();
				return false;
			});

			
					
	 	});
});