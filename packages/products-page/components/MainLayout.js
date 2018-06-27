import Header from './Header'
import ProductPage from './ProductPage'

const state = {
    currentPage: 'ProductPage',
    project: 'Air Canada 2017',
    dateFrom: 'Feb 2017',
    dateTo: 'Jul 2017'
}

const MainLayout = (props) => (
  <div style={{  width: '70%', margin: '0 auto' }}>
    <Header title={props.title} />
    <ProductPage project={state.project} dateFrom={state.dateFrom} dateTo={state.dateTo}/>
  </div>
)

export default MainLayout
