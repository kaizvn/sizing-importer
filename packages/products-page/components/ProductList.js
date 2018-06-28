import ProductItem from './ProductItem';

const labelStyle = {
  display: 'inline-block',
  width: '25%',
  fontWeight: 'bold',
};

export default props => (
  <div>
    <ul>
      <li>
        <div>Name</div>
        <div>Dimensions</div>
        <div>Last Sync</div>
        <div>Audit Coverage</div>
      </li>
      {(props.data || []).map((item, index) => (
        <ProductItem key={index} data={item} />
      ))}
    </ul>

    <style jsx>{`
      li div {
        display: inline-block;
        width: 25%;
        fontweight: bold;
      }
      li {
        list-style: none;
        margin: 5px 0;
      }
    `}</style>
  </div>
);
