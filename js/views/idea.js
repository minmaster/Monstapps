define(
	["jquery",
   "underscore",
   "backbone",
   "handlebars",
   "text!templates/idea.html"], function($, _, Backbone, Handlebars, templateIndex){

		var templetesIndexView = Backbone.View.extend({
		el: $('#ideaContent'),
		initialize:function() {
			this.render();
		},
		render: function(){
			var data = {};
			var source = templateIndex;
			var template = Handlebars.compile(source);
			var html = template(data);

			this.$el.html(html);

			var position = this.$el.position();
			$('#content').transition({  y: -position.top+'px' }, 300, 'in-out');
			
		}
	});

return templetesIndexView;
});