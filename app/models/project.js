import DS from 'ember-data';

export default DS.Model.extend({
	title: DS.attr(),
	image: DS.attr(),
	summary: DS.attr(),
	description: DS.attr(),
	skills: DS.attr(),
	link: DS.attr()
});
