import Ember from 'ember';


export default Ember.Component.extend({
  isImageShowing: false,
  actions:  {
    imageShow() {
      this.set("isImageShowing", true);
    },
    imageHide() {
      this.set("isImageShowing", false);
    },
    delete(rental) {
      if (confirm('Delete this rental?')) {
        this.sendAction("destroyRental", rental);
      }
    }
  }

});
