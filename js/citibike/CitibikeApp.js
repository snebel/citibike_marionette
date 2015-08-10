define([
  'marionette',
  'StationCollection',
  'citibike/views/CitibikeAppView'
], function(
  Marionette,
  StationCollection,
  CitibikeAppView
) {
  return Marionette.Application.extend({    

    initialize: function() {
      
      this.stations = new StationCollection();
      this.stations.fetch();
    },

    onStart: function() {
      var appView = new CitibikeAppView({
        stations: this.stations
      });    
      appView.render();  
    }

  });
});