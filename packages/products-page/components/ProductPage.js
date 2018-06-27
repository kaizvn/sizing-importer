import MyTab from './MyTab';
import ProductList from './ProductList';
import { PRODUCTS } from '../utils/mocks'

const ProductPage = (props) => (
  <div style={{margin: '20px'}}>
    <div>
      <h2>{props.title}</h2>
      <div style={{opacity : 0.7}}>{props.dateFrom} - {props.dateTo}</div>
    </div>
    <div>
      <div>
        <MyTab tabs={props.tabs}/>
        <ProductList data={PRODUCTS}/>
      </div>
    </div>
  </div>
)

export default ProductPage
