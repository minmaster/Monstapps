define(
	["jquery",
   "underscore",
   "backbone",
   "handlebars",
   "text!templates/analisis.html"], function($, _, Backbone, Handlebars, templateIndex){

		var templetesIndexView = Backbone.View.extend({
		el: $('#analisisContent'),
		initialize:function() {
			this.render();
		},
		render: function(){
			var data = {};
			var source = templateIndex;
			var template = Handlebars.compile(source);
			var html = template(data);

			this.$el.html(html);
			this.$el.addClass("active");

			var position = this.$el.position();
			$('#content').transition({  y: -position.top+'px' }, 300, 'in-out', function() {


			});

		}
	});

return templetesIndexView;
});