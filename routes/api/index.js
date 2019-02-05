const router = require("express").Router();
const articleRoutes = require("./articles.js");

/////////////////////////////////////////////// /* Add New Routes Here */ //////////////////////////////////////////////////////////
router.use("/", articleRoutes);

/////////////////////////////////////////////// /* Exports */ //////////////////////////////////////////////////////////
module.exports = router;