import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
    filterBySkills(param) {
      if (param !== '') {
        return this.get('store').query('project', { skills: param });
      } else {
        return this.get('store').findAll('project');
      }
    }
  }
});
