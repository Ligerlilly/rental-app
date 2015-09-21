import Ember from 'ember';

export default Ember.Component.extend({
  isAttractionShowing: false,
  actions: {
    attractionShow() {
      this.set('isAttractionShowing', true);
    },
    attractionHide() {
      this.set('isAttractionShowing', false);
    },
    delete(city) {
      if (confirm("Really?")){
        //console.log(city);
        this.sendAction("destroyCity", city);
      }

    },
    showCityEdit() {
      this.set("editCity", true);
    }
  }
});
