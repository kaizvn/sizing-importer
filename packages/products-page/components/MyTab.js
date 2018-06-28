const tabStyle = isSelected => {
  return {
    fontWeight: isSelected ? 'bold' : 'normal',
    padding: '5px',
    border: '1px solid',
    cursor: 'pointer',
    width: 'inherit',
    display: 'inline-block',
  };
};

export default props => (
  <div style={{ padding: '10px 0' }}>
    <div style={tabStyle(!props.selected || props.selected === 'products')}>
      {' '}
      Products{' '}
    </div>
    <div style={tabStyle(props.selected === 'audit')}>Audit sections</div>
  </div>
);
