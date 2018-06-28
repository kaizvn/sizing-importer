export default prop => (
  <li>
    <div>
      <div>{prop.data.name}</div>
      <div className="sub-content">{prop.data.code}</div>
    </div>
    <div>
      <div>{prop.data.dimensions.join(' x ')}</div>
      <div className="sub-content">
        {prop.data.number_combinations} combinations
      </div>
    </div>
    <div>
      <div>{prop.data.last_sync}</div>
      <div className="sub-content">{prop.data.last_sync_from}</div>
    </div>
    <div>
      <div>{prop.data.audit_coverage * 100}</div>
      <div className="sub-content">{prop.data.number_tried}</div>
    </div>
    <style jsx>{`
      li {
        list-style: none;
        margin: 20px 0;
      }
      li > div {
        display: inline-block;
        width: 24.5%;
      }
      .sub-content {
        opacity: 0.5;
      }
    `}</style>
  </li>
);
