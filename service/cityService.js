(function (cityService) {
	var cityModel = require('../models/cityModel.js');
	var common = require('./common');
	var config = require('../config/config'),
	queryPager = require('./queryPager'),
	weatherModel = require('../models/weatherModel.js');
	error = require('./err');
	var allcities, dayCount=config.days; 
	var pageArray = [];
	cityService.bulkCityRegister = function(cities, callback) {
		console.log("In bulk City Register service");
		cityModel.insertMany(cities)
        .then(function(docs) {
             // return res.status(201).json(docs);
             callback(null, docs);return;
        })
        .catch(function(err) {
        	console.log("err ", err)
            callback(error.bulkRegisterErr, null);return;
        });
	}

	cityService.getCityWeather = function(page, limit, callback) {
		console.log("In function getCityWeather");
		var q="Duragpur",  cities = [], c=0, weather=[];
		var url = config.cityByNameUrl+"q="+q+"&cnt="+dayCount+"&APPID="+config.APPID;
		console.log("pageArray", pageArray)
		if(pageArray.indexOf(Number(page))!==-1){
			console.log("In page array ",pageArray.indexOf(Number(page)), pageArray, Number(page), Number(limit))//pageArray.push(Number(page));
			queryPager.pager(Number(page), Number(limit), config.defaultLimit, config.maxLimit, function (_skip, _limit) {
	            skip = _skip;
	            if(skip===0) {
	            	page=0;
	            }
	            limit = _limit;
	        });
	        weatherModel
	        .find()
	        .skip(skip)
	        .limit(limit)
	        .exec(function(err, weatherReport) {
	        	if(err) {
	        		callback(err); return;
	        	}
	        	callback(null, weatherReport);return;
	        })
		}
		else {
			pageArray.push(Number(page));
			queryPager.pager(page, limit, config.defaultLimit, config.maxLimit, function (_skip, _limit) {
            skip = _skip;
            if(skip===0) {
            	page=0;
            }
            limit = _limit;
        });
        console.log("skip", skip);
        console.log("limit", limit);
        removeAllDoc(page, function(err) {

        	if(err) {
        		callback(err);return;
        	}
			cityModel
			.find()
			.skip(skip)
			.limit(Number(limit))
			.exec(function(err, listOfCities) {
				if(err) {
					callback(err); return;
				}
				console.log("listOfCities length", listOfCities.length);
				cities = listOfCities;
				for (var i = 0; i < cities.length; i++) {
					// cities[i].name;
					url = config.cityByNameUrl+"q="+cities[i].name+"&cnt="+dayCount+"&APPID="+config.APPID;
					console.log("url : ", url);				
					common.get(url, {}, function(err, res) {
						if(err) {
							console.log("err in getting city weather", err);	
							callback(err);
							return;
						}
						c++;
						weather.push(JSON.parse(res.body));
						if(c===listOfCities.length) {
							// callback(null, weather)
							arrayOfCitiesAndWeather(weather, cities, function(err, response) {
								if(err) {
									callback(err);return;
								}
								callback(null, response);
							})
						}
						// callback(null, JSON.parse(res.body))//res.body
					})
				}
				// callback(null, listOfCities);
			})
		})

		}
		
	}
	function removeAllDoc(page, callback) {
		console.log("page ==>", typeof page)
		if(Number(page)===0) {
			weatherModel.remove({}, callback);
		}else {
			callback();
		}
		
	}
	function arrayOfCitiesAndWeather(weather, cities, callback) {
		console.log("In function arrayOfCitiesAndWeather");
		var finalWeather = [], count=0, createWeatherCount=0, finalResponse = [];
		// callback(null, weather)		
		for (var i = 0; i < weather.length; i++) {

			for (var j = 0; j < cities.length; j++) {
				if(weather[i].city.name.toUpperCase() === cities[j].name.toUpperCase()) {
					console.log(weather[i].city.name.toUpperCase(),"------------------",cities[j].name.toUpperCase(), cities[j]._id)
					weather[i].cityId = cities[j]._id;
					finalWeather.push(weather[i]);
				}
			}
			// console.log("weather obj ", weather[i]);
		}
		for (var k = 0; k < finalWeather.length; k++) {
			var weatherObj = new weatherModel(finalWeather[k]);
			console.log("weatherObj before create",weatherObj );
			weatherObj.save(function(err, weatherCreateResponse) {
				if(err) {
					callback(err); return;
				}
				console.log("weatherObj after create",weatherCreateResponse.cityId );
				finalResponse.push(weatherCreateResponse);
				createWeatherCount++;
				if(createWeatherCount === finalWeather.length) {
					callback(null, finalResponse);
				}
			})
		}
		
	}

	cityService.getCityWeatherByName = function(city, callback) {
		console.log("In function getCityWeatherByName");
		console.log("city", city);
		var cityObjId, jsonObject, objOfCity={}, cityModelObj, weatherModelObj, resArray=[];
		getAllCities(city, function(err, getCityRes) {
			if(err) {
				callback(err); return;
			}
			console.log("getCityRes ==>", getCityRes)
			cityObjId=getCityRes;
			console.log("cityObjId", cityObjId);
			if(cityObjId!==undefined) {
				console.log("hiii")
				weatherModel
				.findOne({cityId: cityObjId})
				.exec(function(err, cityWeather) {
					if(err) {
						callback(err); return;
					}
					if(!cityWeather) {
					console.log("err.scrollErr", error.scrollErr)
					callback(error.scrollErr, null);return;
					}
					resArray.push(cityWeather)
					callback(null, resArray); return;
				})
			} 
			else {
				console.log("hello")
				url = config.cityByNameUrl+"q="+city+"&cnt="+dayCount+"&APPID="+config.APPID;
				console.log("url =+=+=", url)
				common.get(url, {}, function(err, res) {
					if(err) {
						console.log("err in getting city weather", err);	
						callback(err);
						return;
					}
					jsonObject = JSON.parse(res.body);

					// console.log("jsonObject ====>", jsonObject)
					if(!jsonObject.hasOwnProperty('city')){
						callback(JSON.parse(res.body), null); return;
					}
					jsonObject = JSON.parse(res.body);
					
					objOfCity.name = jsonObject.city.name//city;
					objOfCity.searchedName = city;
					cityModelObj = new cityModel(objOfCity);
					cityModelObj.save(function(err, createCityRes) {
						if(err) {
							callback(err); return;
						}
						console.log("createCityRes._id ===>", createCityRes._id);
						jsonObject.cityId = createCityRes._id;
						weatherModelObj = new weatherModel(jsonObject);
						weatherModelObj.save(function(err, newCityWeatherObj) {
							if(err) {
								callback(err); return;
							}
							resArray.push(newCityWeatherObj)
							// callback(null, newCityWeatherObj);return
							callback(null, resArray);return
						})
						// callback(null, weatherModelObj); return;
					})
					// callback(null, jsonObject)//res.body

				})
			}
		})
	}


	function getAllCities(city, callback) {
		var count=0, cityObjId;
		cityModel
		.find()
		.exec(function(err, allCitiesResponse) {
			if(err) {
				callback(err); return;
			}
			for (var i = 0; i < allCitiesResponse.length; i++) {
				count++;
				// console.log("city by name", allcities[i].name)
				if(city.toUpperCase() === allCitiesResponse[i].name.toUpperCase()||city.toUpperCase() === allCitiesResponse[i].searchedName.toUpperCase()){
					console.log("allcities[i]._id ===", allCitiesResponse[i]._id, allCitiesResponse[i].name) 
					cityObjId = allCitiesResponse[i]._id;

				}

			}
			console.log("count in getAllCities",count, allCitiesResponse.length);
			if(count===allCitiesResponse.length) {
				callback(null, cityObjId);
			}
		})
	}
	cityService.getAllCities = (function() {
        cityModel
        .find()
        .exec(function(err, allCitiesResponse) {
            if(err) {
                console.log('err in getting cities in self invoke function');
            }
            allcities = allCitiesResponse;
            // console.log('selfInvokeRoleResponse of getAllCities---> ', allCitiesResponse);
        })
    })();
})(module.exports);