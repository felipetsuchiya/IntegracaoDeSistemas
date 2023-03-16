export class ProdutoController {
    // Aqui iremos implementar a funcionalidade da listagem dos produtos
    list(){
        console.log("Listagem de produtos")
        app.get("/", (request, response) => {
            return response.
                status(200).
                json({
                    message: "ok",
                    data: produtos
                });
        });
        
    }
    create() {
        app.post("/", (request, response) => {
            const produto = request.body;
            produtos.push(produto);
            return response.
                status(201).
                json({
                    message: "Produto cadastrado!",
                    data: produto
                });
        });
    }
    find(){}
    delete(){}
    update(){}
}



