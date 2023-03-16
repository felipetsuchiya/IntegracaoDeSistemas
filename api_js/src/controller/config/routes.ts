import { Router } from "express";
import { ProdutoController } from './../produto.controller';

const router: Router = Router();

//Rotas do Produto
router.get("/", new ProdutoController().list);
router.get("/id", new ProdutoController().find);
router.post("/", new ProdutoController().create);
router.delete("/", new ProdutoController().delete);
router.put("/", new ProdutoController().update);

export { router };