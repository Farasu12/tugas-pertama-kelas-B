import Product from '../model/ProductModel.js';

export const getProducts = async (req, res) => {
    try {
        const response = await Product.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.messagge);
    }
};  

export const getProductById = async (req, res) => {};
  
export const createProduct = async (req, res) => {};
  
export const updateProduct = async (req, res) => {};
    
export const deleteProduct = async (req, res) => {};
  