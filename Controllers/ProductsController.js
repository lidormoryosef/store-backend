
const productService = require('../Services/ProductsService');
const service = productService;

async function addProduct(request,response){
    const result = await service.addProduct(request.body);
    if(result === null ){
        response.status(500).send();
    }else if(result === "catalogNumber already exists"){
        response.status(400).send();
    }else if(result === "Not Valid"){
        response.status(401).send();
    }else{
        response.status(200).send();
    }
}
async function deleteProduct(request,response){
    const result = await service.deleteProduct(request.params.id);
    if(result === null ){
        response.status(500).send();
    }else if(result === "Id Not Exists"){
        response.status(404).send();
    }else{
        response.status(200).send();
    }
}
async function editProduct(request,response){
    const result = await service.editProduct(request.body);
    if(result === null ){
        response.status(500).send();
    }else if(result === "catalogNumber already exists"){
        response.status(400).send();
    }else if(result === "Id Not Exists"){
        response.status(404).send();
    }else if(result === "Not Valid"){
        response.status(401).send();
    }else{
        response.status(200).send(result);
    }
}
async function getProducts(request,response){
    const products = await service.getProducts(request.query);
    if(products === null ){
        response.status(500).send();
    }else{
        response.status(200).send(products);
    }
}
module.exports = {addProduct,deleteProduct,editProduct,getProducts};
