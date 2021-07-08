import '../styles/style.css';

function ColorBox(props) {
  return (
    <>
      <div className="outerBox flex">
        <div className="color-detail">
          <h2>{props.colorName}</h2>
        </div>
      </div>
    </>
  );
}

export default ColorBox;
