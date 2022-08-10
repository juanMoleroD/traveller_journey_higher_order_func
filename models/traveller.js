const Traveller = function (journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function () {
  return this.journeys.map((journey) => {
    return journey.startLocation;
  });
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journey) => {
    return journey.endLocation;
  });
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter( (journey) => {
    return journey.transport === transport
  });
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter( (journey) => {
    return journey.distance > minDistance;
  });
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  let totalDistance = this.journeys.reduce( (total, journey) => {
    return total + journey.distance;
  }, 0);
  return totalDistance;
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  let unique = [...new Set(
    this.journeys.map( (journey) => {
      return journey.transport;
    }))];
  return unique;
};


module.exports = Traveller;
