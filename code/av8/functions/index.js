const functions = require('firebase-functions');
const request = require('request');

// ADS-B Exchange API Call
exports.apiCall = functions.https.onCall((data) => {

  const latitude = data.latitude;
  const longitude = data.longitude;
  const dist = data.dist;

  const URL = 'https://adsbexchange-com1.p.rapidapi.com/json/lat/' + latitude + '/lon/' + longitude + '/dist/' + dist + '/'

  var getJson = function(URL){
    var options = { 
      method: 'GET',
      url: URL,
      headers: {
      'x-rapidapi-host': 'adsbexchange-com1.p.rapidapi.com',
      'x-rapidapi-key': 'a7f5ea86famsh90c76e420e25c01p1a76d4jsne9b1f2e24284'
      }
    };
    return new Promise(function(resolve, reject) {

      request(options, function (error, response, body) {
        if(error) reject(error);
        else {
          resolve(JSON.parse(body));
        }
      });
    });
  };

  return getJson(URL).then(function(result) {
    console.log(result);
    return result;

  });

});

// Backup APICall Function
exports.adsbApiCall = functions.https.onCall((data) => {

  const latitude = data.latitude;
  const longitude = data.longitude;
  const dist = data.dist;

  const URL = 'https://adsbexchange-com1.p.rapidapi.com/json/lat/' + latitude + '/lon/' + longitude + '/dist/' + dist + '/'

  var getJson = function(URL){
    var options = { 
      method: 'GET',
      url: URL,
      headers: {
      'x-rapidapi-host': 'adsbexchange-com1.p.rapidapi.com',
      'x-rapidapi-key': 'a7f5ea86famsh90c76e420e25c01p1a76d4jsne9b1f2e24284'
      }
    };
    return new Promise(function(resolve, reject) {

      request(options, function (error, response, body) {
        if(error) reject(error);
        else {
          resolve(JSON.parse(body));
        }
      });
    });
  };

  return getJson(URL).then(function(result) {
    console.log(result);
    return result;

  });

});

// Get single aircraft position by registration
exports.getAircraftByReg = functions.https.onCall((data) => {

  const registration = data.registration;

  const URL = 'https://adsbexchange-com1.p.rapidapi.com/registration/' + registration + '/'

  var getJson = function(URL){
    var options = { 
      method: 'GET',
      url: URL,
      headers: {
      'x-rapidapi-host': 'adsbexchange-com1.p.rapidapi.com',
      'x-rapidapi-key': 'a7f5ea86famsh90c76e420e25c01p1a76d4jsne9b1f2e24284'
      }
    };
    return new Promise(function(resolve, reject) {

      request(options, function (error, response, body) {
        if(error) reject(error);
        else {
          resolve(JSON.parse(body));
        }
      });
    });
  };

  return getJson(URL).then(function(result) {
    console.log(result);
    return result;

  });

});

// Returns aircraft broadcasting specified squawk code
exports.getAircraftBySquawk = functions.https.onCall((data) => {

  const squawk = data.squawk;

  const URL = 'https://adsbexchange-com1.p.rapidapi.com/sqk/' + squawk + '/'

  var getJson = function(URL){
    var options = { 
      method: 'GET',
      url: URL,
      headers: {
      'x-rapidapi-host': 'adsbexchange-com1.p.rapidapi.com',
      'x-rapidapi-key': 'a7f5ea86famsh90c76e420e25c01p1a76d4jsne9b1f2e24284'
      }
    };
    return new Promise(function(resolve, reject) {

      request(options, function (error, response, body) {
        if(error) reject(error);
        else {
          resolve(JSON.parse(body));
        }
      });
    });
  };

  return getJson(URL).then(function(result) {
    console.log(result);
    return result;

  });

});

// Returns all military aircraft
exports.getMilitaryAircraft = functions.https.onCall((data) => {

  const empty = data.empty

  const URL = 'https://adsbexchange-com1.p.rapidapi.com/mil/'

  var getJson = function(URL){
    var options = { 
      method: 'GET',
      url: URL,
      headers: {
      'x-rapidapi-host': 'adsbexchange-com1.p.rapidapi.com',
      'x-rapidapi-key': 'a7f5ea86famsh90c76e420e25c01p1a76d4jsne9b1f2e24284'
      }
    };
    return new Promise(function(resolve, reject) {

      request(options, function (error, response, body) {
        if(error) reject(error);
        else {
          resolve(JSON.parse(body));
        }
      });
    });
  };

  return getJson(URL).then(function(result) {
    console.log(result);
    return result;

  });

});
