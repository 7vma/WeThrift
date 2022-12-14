const express = require('express')
const router = express.Router()
const {User} = require('../models')
///////////////////////////////
// ROUTES
////////////////////////////////

// PRODUCT INDEX ROUTE
router.get("/", async (req, res) => {
	try {
    // get all users
    res.json(await User.find({}));
    } catch (error) {
    //send error
    res.status(400).json(error);
    }
});

// PRODUCT CREATE ROUTE
router.post("/", async (req, res) => {
    try {
    res.json(await User.create(req.body));
    } catch (error) {
    //send error
    res.status(400).json(error);
    }
});

// PRODUCT SHOW ROUTE
router.get("/:id", async (req, res) => {
    try {
        res.json(await User.findById(req.params.id));
        } catch (error) {
        //send error
        res.status(400).json(error);
        }
});

// PRODUCT UPDATE ROUTE
router.put("/:id", async (req, res) => {
	try {
	  // update people by ID
	res.json(
	await User.findByIdAndUpdate(req.params.id, req.body, {new:true})
	);
	} catch (error) {
	  //send error
	res.status(400).json(error);
	}
});

  // PRODUCT DELETE ROUTE
router.delete("/:id", async (req, res) => {
	try {
	  // delete product by ID
	res.json(await User.findByIdAndRemove(req.params.id));
	} catch (error) {
	  //send error
	res.status(400).json(error);
	}
});

module.exports = router
