import Ember from 'ember';

export default Ember.Component.extend({
   addNewCity: false,

   actions: {
      addAttraction() {
        $(".attractions").last().append(
          '<div class="form-group attractions">' +
          '  <label for="attraction">Attraction</label>' +
          '  <input type="text" class="attraction">' +
          '</div>'
        );
      },
      cityFormShow() {
        this.set("addNewCity", true);
      },

      saveCity() {
        var params = {
          name: this.get('name'),
          attractions: []
        };
        console.log($('.attraction'));
        $(".attraction").each(function() {
          //console.log(attraction);
          params.attractions.push($(this).val());
        });
        this.set("addNewCity", false);
        this.sendAction("saveTheCity", params);
      }
   }
});
