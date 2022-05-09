const { Router } = require('express');
const movieRoutes = require('./movie')

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();
router.use("/movies", movieRoutes);
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
