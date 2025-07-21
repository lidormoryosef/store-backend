const productModel = require('../Models/ProductsModel');
const { checkDate, validate } = require('../Utils/Utils');
const model = productModel;

async function addProduct(product){
    if(!validate(product)){
        return "Not Valid";
    }
    checkDate(product);
    let exists = await model.checkIfCatalogNumberExists(product.catalogNumber);
    if(exists !== null){
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
    console.log(newProduct);
    if(!validate(newProduct)){
        return "Not Valid";
    }
    checkDate(newProduct);
    let oldProduct = await model.checkIfCatalogNumberExists(newProduct.catalogNumber);
    if(oldProduct !== null && oldProduct.id !== newProduct.id){
        return "catalogNumber already exists";
    }
    oldProduct = await model.getProduct(newProduct.id);
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
async function getProducts(query){
    return await model.getProducts(query);
}
module.exports ={addProduct,deleteProduct,editProduct,getProducts};