import MyTab from './MyTab';
import ProductList from './ProductList';

const ProductPage = (props) => (
  <div>
    <div>
      <div>{props.title}</div>
      <div>{props.dateRange}</div>
    </div>
    <div>
      <div>
        <MyTab tabs={props.tabs}/>
        <ProductList data={props.data}/>
      </div>
    </div>
  </div>
)

export default ProductPage