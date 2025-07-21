const productModel = require('../Models/ProductsModel');
const model = productModel;
async function addProduct(product){
    if(!model.checkIfCatalogNumberExists(product.catalogNumber)){
        return "catalogNumber already exists";
    }
    return model.addProduct(product);
}
async function deleteProduct(id){
    let product = await model.getProduct(id);
    if(product === null){
        return "Id Not Exists";
    }else if(product === "Error"){
        return null;
    }
    let result = model.deleteProduct(id);
    if(result === null){
        return null;
    }
    return "Ok";
}
async function editProduct(newProduct){
    let oldProduct = await model.getProduct(newProduct.id);
    if(oldProduct === null){
        return "Id Not Exists";
    }else if(oldProduct === "Error"){
        return null;
    }
    let result = await model.editProduct(oldProduct,newProduct);
    if(result === null){
        return null;
    }
    return result;
}
module.exports ={addProduct,deleteProduct,editProduct};