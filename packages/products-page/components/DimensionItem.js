import { BODY_MEASURE_OPTIONS } from '../utils/mocks';

const garmentMeasureGenerator = measures => {
  return measures.map((measure, index) => {
    return (
      <div key={index}>
        <div>{measure.garment_measure}</div>
        <div className="description">{measure.description}</div>
        <style jsx>{`
          .description {
            opacity: 0.5;
          }
        `}</style>
      </div>
    );
  });
};

const buildOptions = optionList =>
  optionList.map((option, index) => (
    <option key={index} value={option.value}>
      {option.label}
    </option>
  ));

export default props => (
  <li>
    <div>
      <div>{props.data.name}</div>
    </div>
    <div>
      <div>{props.data.size_names.join(' , ')}</div>
    </div>
    <div>{garmentMeasureGenerator(props.data.measures)}</div>
    <div>
      <select>{buildOptions(BODY_MEASURE_OPTIONS)}</select>
    </div>
    <style jsx>{`
      li {
        list-style: none;
        border: 1px solid;
      }
      li div {
        position: : inherit;
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
