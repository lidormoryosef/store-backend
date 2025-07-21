  function validate(product){
    if (!product.name?.trim()){
        return false;
    }
    if (product.name.length > 50){
        return false;
    }
    if (product.catalogNumber === '' || product.catalogNumber === null || product.catalogNumber === undefined) {
      return false;
    }
    if (isNaN(product.catalogNumber) || Number(product.catalogNumber) < 0) {
      return false;
    }
    if (product.type !== "Fruit" && product.type !== "Vegetable" && product.type !== "Field crops"){
        return false;
    }
    return true;
  };
function checkDate(product){
    if (product.marketingDate === null){
        product.marketingDate = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    };
}
module.exports = {validate,checkDate};