
const rowStyle = {
  display: 'inline-block',
  width : '25%',
}

export default prop => (
  <li>
    <div style={rowStyle}>
      <div>{prop.data.name}</div>
      <div style={{opacity : '0.5'}}>{prop.data.code}</div>
    </div>
    <div style={rowStyle}>
      <div>{prop.data.dimensions.join(' x ')}</div>
      <div style={{opacity : '0.5'}}>{prop.data.number_combinations} combinations</div>
    </div>
    <div style={rowStyle}>
      <div>{prop.data.last_sync}</div>
      <div style={{opacity : '0.5'}}>{prop.data.last_sync_from}</div>
    </div>
    <div style={rowStyle}>
      <div>{prop.data.audit_coverage * 100}</div>
      <div style={{opacity : '0.5'}}>{prop.data.number_tried}</div>
    </div>
    <style jsx>{`
      li {
        list-style: none;
        margin: 20px 0;
      }
    `}</style>
  </li>
);
