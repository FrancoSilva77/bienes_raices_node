import express from "express";
import {
  formularioLogin,
  formularioRegistro,
  formularioOlvidePassword,
  registrar,
  confirmar,
  resetPassoword,
  comprobarToken,
  nuevoPassword,
  autenticar,
  cerrarSesion
} from "../controllers/usuarioController.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hola mundo en express");
});

router.get("/login", formularioLogin);
router.post("/login", autenticar);

// Cerrar sesión
router.post('/cerrar-sesion', cerrarSesion)


router.get("/registro", formularioRegistro);
router.post("/registro", registrar);

router.get("/confirmar/:token", confirmar);

router.get("/olvide-password", formularioOlvidePassword);
router.post("/olvide-password", resetPassoword);

// Almacena la nueva contraseña
router.get("/olvide-password/:token", comprobarToken);
router.post("/olvide-password/:token", nuevoPassword);

export default router;
