define(
	["jquery",
   "underscore",
   "backbone",
   "handlebars",
   "text!templates/twitter.html"], function($, _, Backbone, Handlebars, templateIndex){

		var templetesIndexView = Backbone.View.extend({
		el: $('footer'),
		initialize:function() {
			this.render();
		},
		render: function(){

			if ($('.tooltipFooter.twitter').length) {

				$('.tooltipFooter.twitter').find(".content").children().fadeOut("fast", function() {
					$('.tooltipFooter.twitter').transition({"width":"0", "left":"0", "opacity":"0"}, 150, "out", function() {
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

				$('.tooltipFooter.twitter').css({"width":0, "left":0});
				$('.tooltipFooter.twitter').find(".content").children().hide()
				$('.tooltipFooter.twitter').transition({"width":"725px", "left":"-735px"}, 300, "in", function() {
					$('.tooltipFooter.twitter').find(".content").children().fadeIn("fast");
				});

			}
		}
	});

return templetesIndexView;
});