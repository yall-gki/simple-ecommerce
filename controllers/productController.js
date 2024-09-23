import Product from '../models/Product.js'




export const getProducts = async (req,res)=>{

try {
    const products = await Product.find()
console.log(products);
res.status(200).json({message :"fetched all products succesfully",products})

 

} catch (error) {
    console.log(error,{message : `error while getting products`})
    res.status(500).json({error : "internal server error"})
}


}




export const getProductByCategory = async (req, res) => {
const {category} = req.params

  try {

    const products = await Product.find({
    
         category 
      


    });
    console.log(products);
    res
      .status(200)
      .json({ message: "fetched all products succesfully", products });
  } catch (error) {
    console.log(error, { message: `error while getting products` });
    res.status(500).json({ error: "internal server error" });
  }
};

export const getProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findById({id});
    console.log(product);
    res
      .status(200)
      .json({ message: "fetched productsuccesfully", product });
  } catch (error) {
    console.log(error, { message: `error while getting products` });
    res.status(500).json({ error: "internal server error" });
  }
};