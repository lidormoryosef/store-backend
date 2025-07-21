
const Product  = require('./ProductSchema');
const { Op } = require('sequelize');
async function checkIfCatalogNumberExists(catalogNumber) {
    try{
        return await Product.findOne({ where: { catalogNumber } });
    }catch(error){
        console.log(error);
        return null;
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
async function getProducts({ page = 0, limit = 7, search = '', sortBy = 'name', order = 'asc' }) {
  try {
    page = Number(page);
    limit = Number(limit);
    const offset = page * limit;
    const whereClause = search && search.length >= 3 ? { name: { [Op.like]: `%${search}%` } } : {};
    const { rows, count } = await Product.findAndCountAll({
      where: whereClause,
      order: [[sortBy, order]],
      limit,
      offset,
    });
    return { data: rows, totalItems: count };
  } catch (error) {
    console.log(error);
    return null;
  }
}


module.exports = {checkIfCatalogNumberExists,addProduct,getProduct,deleteProduct,editProduct,getProducts};
