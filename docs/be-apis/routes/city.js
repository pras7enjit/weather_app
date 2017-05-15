/**
 * APIs to work with cities
 * @namespace Cities
 */


/**
 * @summary Bulk City Register
 * @description Csv upload for storing cities into the databases(Pre-requisite before runnig the app)
 * @name POST /cities/bulkCityRegister
 * @function
 * @memberof Cities
 * @param {Text} _id - Unique id of the City.
 * @param {Text} name - name of the City.
 * @param {Text} searchedName - Searched name of the City.
 * @returns {JSON}
 * @example
 * // returns success
 * status 200
 * body [{
 *		    "__v": 0,
 *		    "name": "Bengaluru",
 *		    "_id": "5918c92cff730c6d3a3d8c1e",
 *		    "searchedName": ""
 *		  },
 *		  {
 *		    "__v": 0,
 *		    "name": "Ahmedabad",
 *		    "_id": "5918c92cff730c6d3a3d8c1f",
 *		    "searchedName": ""
 *		  },
 *		  {
 *		    "__v": 0,
 *		    "name": "Hyderabad",
 *		    "_id": "5918c92cff730c6d3a3d8c20",
 *		    "searchedName": ""
 *		  },..]
 * @example
 * // returns error
 * status 400 
 * body { message: 'Error during bulk cities Register.',err: "bulkRegisterErr"}
 */


 /**
 * @summary Get City Weather
 * @description Get cites weather report
 * @name POST /cities/getCity/Weather?page=0&limit=10&city=London
 * @function
 * @memberof Cities
 * @query {Text} page - Page no. give page=0 for getting first ten result from the db, then 1 and so on....(optional)
 * @query {Text} limit - maximum ten record per page, since per minute 60 api calls are possible.(optional)
 * @query {Text} city - Searched name of the City. 
 * @returns {JSON}
 * @example
 * // returns success
 * status 200
 * body [
  {
    "__v": 0,
    "cod": "200",
    "message": 1.0613255,
    "cnt": 14,
    "cityId": "5918c92cff730c6d3a3d8c1d",
    "_id": "5918c94aff730c6d3a3d8c89",
    "list": [
      {
        "dt": 1494741600,
        "pressure": 989.57,
        "humidity": 33,
        "speed": 5.36,
        "deg": 342,
        "clouds": 0,
        "_id": "5918c94aff730c6d3a3d8ca4",
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "sky is clear",
            "icon": "01n",
            "_id": "5918c94aff730c6d3a3d8ca5"
          }
        ],
        "temp": {
          "day": 306.15,
          "min": 306.15,
          "max": 306.15,
          "night": 306.15,
          "eve": 306.15,
          "morn": 306.15
        }
      },
      {
        "dt": 1494828000,
        "pressure": 990.62,
        "humidity": 30,
        "speed": 2.21,
        "deg": 334,
        "clouds": 0,
        "_id": "5918c94aff730c6d3a3d8ca2",
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "sky is clear",
            "icon": "01d",
            "_id": "5918c94aff730c6d3a3d8ca3"
          }
        ],
        "temp": {
          "day": 314.23,
          "min": 299.9,
          "max": 314.81,
          "night": 301.77,
          "eve": 313.69,
          "morn": 299.9
        }
      },
      {
        "dt": 1494914400,
        "pressure": 991.28,
        "humidity": 33,
        "speed": 2.06,
        "deg": 312,
        "clouds": 0,
        "_id": "5918c94aff730c6d3a3d8ca0",
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d",
            "_id": "5918c94aff730c6d3a3d8ca1"
          }
        ],
        "temp": {
          "day": 312.8,
          "min": 296.71,
          "max": 314.6,
          "night": 299.74,
          "eve": 311.76,
          "morn": 296.71
        }
      },
      {
        "dt": 1495000800,
        "pressure": 991.01,
        "humidity": 32,
        "speed": 3.71,
        "deg": 322,
        "clouds": 0,
        "_id": "5918c94aff730c6d3a3d8c9e",
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "sky is clear",
            "icon": "01d",
            "_id": "5918c94aff730c6d3a3d8c9f"
          }
        ],
        "temp": {
          "day": 311.73,
          "min": 296.58,
          "max": 313.09,
          "night": 304.21,
          "eve": 312.12,
          "morn": 296.58
        }
      },
      {
        "dt": 1495087200,
        "pressure": 987.41,
        "humidity": 0,
        "speed": 1.77,
        "deg": 258,
        "clouds": 0,
        "_id": "5918c94aff730c6d3a3d8c9c",
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "sky is clear",
            "icon": "01d",
            "_id": "5918c94aff730c6d3a3d8c9d"
          }
        ],
        "temp": {
          "day": 313.58,
          "min": 299.92,
          "max": 313.58,
          "night": 301.79,
          "eve": 313.43,
          "morn": 299.92
        }
      },
      {
        "dt": 1495173600,
        "pressure": 987.54,
        "humidity": 0,
        "speed": 1.75,
        "deg": 250,
        "clouds": 0,
        "_id": "5918c94aff730c6d3a3d8c9a",
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "sky is clear",
            "icon": "01d",
            "_id": "5918c94aff730c6d3a3d8c9b"
          }
        ],
        "temp": {
          "day": 315,
          "min": 298.69,
          "max": 315,
          "night": 301.94,
          "eve": 314.88,
          "morn": 298.69
        }
      },
      {
        "dt": 1495260000,
        "pressure": 987.83,
        "humidity": 0,
        "speed": 2.06,
        "deg": 257,
        "clouds": 0,
        "_id": "5918c94aff730c6d3a3d8c98",
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "sky is clear",
            "icon": "01d",
            "_id": "5918c94aff730c6d3a3d8c99"
          }
        ],
        "temp": {
          "day": 314.94,
          "min": 298.24,
          "max": 315.27,
          "night": 302.77,
          "eve": 315.27,
          "morn": 298.24
        }
      },
      {
        "dt": 1495346400,
        "pressure": 987.27,
        "humidity": 0,
        "speed": 8.5,
        "deg": 295,
        "clouds": 0,
        "_id": "5918c94aff730c6d3a3d8c96",
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d",
            "_id": "5918c94aff730c6d3a3d8c97"
          }
        ],
        "temp": {
          "day": 314.81,
          "min": 300.38,
          "max": 315.28,
          "night": 305.91,
          "eve": 315.28,
          "morn": 300.38
        }
      },
      {
        "dt": 1495432800,
        "pressure": 988.4,
        "humidity": 0,
        "speed": 7.03,
        "deg": 302,
        "clouds": 0,
        "_id": "5918c94aff730c6d3a3d8c94",
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "sky is clear",
            "icon": "01d",
            "_id": "5918c94aff730c6d3a3d8c95"
          }
        ],
        "temp": {
          "day": 315.35,
          "min": 303.66,
          "max": 315.72,
          "night": 306.14,
          "eve": 315.72,
          "morn": 303.66
        }
      },
      {
        "dt": 1495519200,
        "pressure": 989.63,
        "humidity": 0,
        "speed": 7.11,
        "deg": 300,
        "clouds": 45,
        "_id": "5918c94aff730c6d3a3d8c92",
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "sky is clear",
            "icon": "01d",
            "_id": "5918c94aff730c6d3a3d8c93"
          }
        ],
        "temp": {
          "day": 314.86,
          "min": 304.07,
          "max": 315.21,
          "night": 307.71,
          "eve": 315.21,
          "morn": 304.07
        }
      },
      {
        "dt": 1495605600,
        "pressure": 986.49,
        "humidity": 0,
        "speed": 5.27,
        "deg": 289,
        "clouds": 62,
        "_id": "5918c94aff730c6d3a3d8c90",
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d",
            "_id": "5918c94aff730c6d3a3d8c91"
          }
        ],
        "temp": {
          "day": 314.62,
          "min": 305.11,
          "max": 315.55,
          "night": 305.11,
          "eve": 315.55,
          "morn": 306.2
        }
      },
      {
        "dt": 1495692000,
        "pressure": 985.35,
        "humidity": 0,
        "speed": 3.11,
        "deg": 305,
        "clouds": 2,
        "_id": "5918c94aff730c6d3a3d8c8e",
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d",
            "_id": "5918c94aff730c6d3a3d8c8f"
          }
        ],
        "temp": {
          "day": 315.98,
          "min": 301.55,
          "max": 316.53,
          "night": 304.67,
          "eve": 316.53,
          "morn": 301.55
        }
      },
      {
        "dt": 1495778400,
        "pressure": 983.83,
        "humidity": 0,
        "speed": 2.97,
        "deg": 317,
        "clouds": 0,
        "_id": "5918c94aff730c6d3a3d8c8c",
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "sky is clear",
            "icon": "01d",
            "_id": "5918c94aff730c6d3a3d8c8d"
          }
        ],
        "temp": {
          "day": 316.97,
          "min": 301.28,
          "max": 316.97,
          "night": 306.73,
          "eve": 316.65,
          "morn": 301.28
        }
      },
      {
        "dt": 1495864800,
        "pressure": 982.46,
        "humidity": 0,
        "speed": 7.81,
        "deg": 288,
        "clouds": 0,
        "_id": "5918c94aff730c6d3a3d8c8a",
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "sky is clear",
            "icon": "01d",
            "_id": "5918c94aff730c6d3a3d8c8b"
          }
        ],
        "temp": {
          "day": 317.12,
          "min": 304.18,
          "max": 317.13,
          "night": 307.68,
          "eve": 317.13,
          "morn": 304.18
        }
      }
    ],
    "city": {
      "id": 1273294,
      "name": "Delhi",
      "country": "IN",
      "population": 0,
      "coord": {
        "lon": 77.2167,
        "lat": 28.6667
      }
    }
  },..]
 * @example
 * // returns error
 * status 500 
 * body {"err": "ScrollError", "message" : "Scroll down to get weather message for this city."}
 */