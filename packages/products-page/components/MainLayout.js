import Header from './Header'
import ProductPage from './ProductPage'

const MainLayout = (props) => (
  <div>
    <Header title={props.title} />
    <ProductPage />
  </div>
)

export default MainLayout
