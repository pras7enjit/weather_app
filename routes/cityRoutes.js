var express = require('express');
var router = express.Router();
var cityController = require('../controllers/cityController.js');

/*
 * GET
 */
router.get('/', cityController.list);

/*
 * GET
 */
router.get('/:id', cityController.show);

/*
 * POST
 */
router.post('/', cityController.create);

/*
 * PUT
 */
router.put('/:id', cityController.update);

/*
 * DELETE
 */
router.delete('/:id', cityController.remove);

/*
* POST
*/
/**
 * @api {post} /cities/bulkCityRegister Request User information
 * @apiName bulkCityRegister
 * @apiGroup Cities
 *
 * @apiParam {Text} name City name.
 *
 * @apiSuccess {String} _id Unique of the City.
 * @apiSuccess {String} name name of the City.
 * @apiSuccess {String} searchedName Searched name of the City.	
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [{
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
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Internal Server Error
 *     {  
 *			message: 'Error during bulk cities Register.',
 *			err: "bulkRegisterErr"
 *		}
 */
router.post('/bulkCityRegister', cityController.bulkCityRegister);

/*
* GET
*/
router.get('/getCity/Weather', cityController.getCityWeather);
module.exports = router;
