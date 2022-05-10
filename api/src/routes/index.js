const { Router } = require('express');
const genreRouter = require('./genres');
const movieRouter = require('./movie')
//const charactersRouter = require('./characters')
const loadRouter = require("./loadData");
const charactersRouter = require('./characters');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.use("/load-data", loadRouter);
router.use("/movies", movieRouter);
router.use("/genres",  genreRouter);
router.use("/characters", charactersRouter);
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
