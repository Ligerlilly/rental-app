import Ember from 'ember';

export default Ember.Component.extend({
  editCity: false,
  actions: {
    showCityEdit() {
      this.set("editCity", true);
    },
    saveCity() {
      var params = {
        name: this.get('name'),
        attractions: []
      };
      $(".attraction").each(function() {
        params.attractions.push($(this).val());
      });
      this.set("editCity", false);
      this.sendAction("saveTheCity", params);
    },
    addAttraction() {
      $(".attractions").last().append(
        '<div class="form-group attractions">' +
        '  <label for="attraction">Attraction</label>' +
        '  <input type="text" class="attraction">' +
        '</div>'
      );
    }
  }


});
