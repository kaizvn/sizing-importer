const tabStyle = isSelected => {
  return {
    fontWeight: isSelected ? 'bold' : 'normal',
  };
};

export default props => (
  <div style={{ padding: '10px 0' }}>
    <div
      className="tab-btn"
      style={tabStyle(!props.selected || props.selected === 'products')}
    >
      Products
    </div>
    <div className="tab-btn" style={tabStyle(props.selected === 'audit')}>
      Audit sections
    </div>
    <style jsx>{`
      .tab-btn {
        padding: 5px;
        border: 1px solid;
        cursor: pointer;
        width: inherit;
        display: inline-block;
      }
    `}</style>
  </div>
);
