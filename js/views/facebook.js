define(
	["jquery",
   "underscore",
   "backbone",
   "handlebars",
   "text!templates/facebook.html"], function($, _, Backbone, Handlebars, templateIndex){

		var templetesIndexView = Backbone.View.extend({
		el: $('footer'),
		initialize:function() {
			this.render();
		},
		render: function(){

			if ($('.tooltipFooter.facebook').length) {

				$('.tooltipFooter.facebook').find(".content").children().fadeOut("fast", function() {
					$('.tooltipFooter.facebook').transition({"width":"0", "left":"0", "opacity":"0"}, 150, "out", function() {
						$(this).remove();
					});

				})
				


			} else {

				$('.tooltipFooter').remove();

				var data = {};
				var source = templateIndex;
				var template = Handlebars.compile(source);
				var html = template(data);
				this.$el.append(html);

				 $.getScript('http://connect.facebook.net/en_US/all.js', function() {
			          try{
			                FB.XFBML.parse();
			            } catch(ex) {}
			      });

				$('.tooltipFooter.facebook').css({"width":0, "left":0});
				$('.tooltipFooter.facebook').find(".content").children().hide()
				$('.tooltipFooter.facebook').transition({"width":"302px", "left":"-312px"}, 300, "in", function() {
					$('.tooltipFooter.facebook').find(".content").children().fadeIn("fast");
				});

			}
		}
	});

return templetesIndexView;
});