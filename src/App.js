import React, { useEffect, useState } from 'react';
import Layout from './layout/layout';
import ProductPage from './products/productPage';
import Body  from './layout/body';
import './App.css';


const App = () => {
  const [products, setProducts] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  
 
  useEffect(() => {
    const loadData = async () => {
      let headers = new Headers();
      fetch('https://drive.google.com/uc?export=view&id=13tTE7bKIN2XZ6BGLU3Yr9jNjHSWoA_r9', {
        method: 'GET',
        headers: headers
        }).then(response => response.json())
        .then(data => setData(data));
    }
    loadData();  
  }, []);

  useEffect(() => {
    setSelectedProduct(products.find(({id}) => id === selectedProductId ))
    setQuantity(1);
  }, [selectedProductId]);

  

  function setData(data){
    let products = data.map(p => p)
    setProducts(products);
  }

  return (
  <Layout products={products} setSelectedProductId={setSelectedProductId}>
    {!selectedProduct ? <Body/> : <ProductPage product={selectedProduct} quantity={quantity} setQuantity={setQuantity}/> }
  </Layout>
  )
}
export default App;