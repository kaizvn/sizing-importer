import Header from './Header'
import ProductPage from './ProductPage'

const MainLayout = (props) => (
  <div>
    <Header title={props.title} />
    <ProductPage title='Air Canada 2017' dateFrom='Feb 2017' dateTo='Jul 2017'/>
  </div>
)

export default MainLayout
