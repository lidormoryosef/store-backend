
const Product  = require('./ProductSchema');

async function checkIfCatalogNumberExists(catalogNumber) {
    try{
        return await Product.findOne({ where: { catalogNumber } });
    }catch(error){
        console.log(error);
        return false;
    }
}
async function addProduct(product) {
    try{
        return await Product.create(product);
    }catch(error){
        console.log(error);
        return null;
    }
}
async function getProduct(id) {
    try{
        return await Product.findByPk(id);
    }catch(error){
        console.log(error);
        return "Error";
    }
}
async function deleteProduct(id) {
    try{
        return await Product.destroy({ where: { id } });
    }catch(error){
        console.log(error);
        return null;
    }
}
async function editProduct(oldProduct,newProduct) {
    try{
        oldProduct.name = newProduct.name;
        oldProduct.catalogNumber = newProduct.catalogNumber;
        oldProduct.description = newProduct.description || '';
        oldProduct.type = newProduct.type;
        oldProduct.marketingDate = newProduct.marketingDate;
        return await oldProduct.save();
    }catch(error){
        console.log(error);
        return null;
    }
}


module.exports = {checkIfCatalogNumberExists,addProduct,getProduct,deleteProduct,editProduct};
