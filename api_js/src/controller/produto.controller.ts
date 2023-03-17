import { Request } from "express";
import { Response } from "express";
import { Produto } from './../models/produto.model';

const produtos : Produto[] = [];

export class ProdutoController {
  // Aqui iremos implementar a funcionalidade da listagem dos produtos
  list(req: Request, res: Response) {
    console.log("Listagem de produtos");
    return res.status(200).json({
      message: "ok",
      data: produtos,
    });
  }
  create(req: Request, res: Response) {
    const produto = req.body;
    produtos.push(produto);
    return res.status(201).json({
        message: "Produto cadastrado!",
        data: produto,
    });
  }
  find(req: Request, res: Response) {
    const { nome } = req.params;
    const produto: Produto = produtos.find(p => p.nome == nome)!;

    res.status(200).json({
        message: "Ok",
        data: produto,
    });

  }
  //Tentar completar o delete e o update 
  delete() {}
  update() {}
}
