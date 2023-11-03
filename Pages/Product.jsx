import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { HomeContext } from '../Context/HomeContext';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import AnimatedPage from '../Components/AnimatedPages/AnimatedPage'
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

const Product = () => {
  const {all_product} = useContext(HomeContext);
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id === Number (productId));
  return (
    <AnimatedPage>
    <div>
      <Breadcrum  product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox />
      <RelatedProducts />
    </div>
    </AnimatedPage>
  )
}

export default Product