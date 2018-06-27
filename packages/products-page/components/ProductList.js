import ProductItem from './ProductItem';

const labelStyle = {
  display: 'inline-block',
  width : '25%',
  fontWeight: 'bold',
}

export default props => (
  <div>
    <ul>
      <li>
        <div style={labelStyle}>Name</div>
        <div style={labelStyle}>Dimensions</div>
        <div style={labelStyle}>Last Sync</div>
        <div style={labelStyle}>Audit Coverage</div>
      </li>
      {(props.data || []).map((item, index) => (
        <ProductItem key={index} data={item} />
      ))}
    </ul>
    <style jsx>{`
      li {
        list-style: none;
        margin: 5px 0;
      }
    `}</style>
  </div>
);
