import Component from '@ember/component';

export default Component.extend({
	isOpen: false,
	actions: {
    toggleImageSize() {
      this.toggleProperty('isOpen');
    }
  }
});
