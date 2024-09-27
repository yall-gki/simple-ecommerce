import Product from "../models/Product";

 const  createProduct= async (req, res) => {
  try {
const { name, price, sizes, stock, images, status, description, category } =
  req.body;
    // Hash password

    // Create user
    const user = await Product.create({
      name,
      price,
      sizes,
      stock,
      images,
      status,
      description,
      category,
    });

    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating user", error: error.message });
  }


};
const updateProduct = async (req, res) => {
  try {
    const { productId } = req.params;
const modification  = req.body
    // Check if user exists

    if (!productId) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Delete the user
    await Product.findByIdAndModify(productId,modification,{ new: true, runValidators: true });

    res.status(200).json({ message: "Prouduct updated successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating Proudct", error: error.message });
  }
};


const deleteProduct = async (req, res) => {
  try {
    const { procutId } = req.params;

    // Check if user exists
 
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Delete the user
    await Product.findByIdAndDelete(productId);

    res.status(200).json({ message: "Prouduct deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting Proudct", error: error.message });
  }
};




export { deleteProduct, createProduct };