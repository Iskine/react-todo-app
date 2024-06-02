import { Boxes, Circle } from "./style";

const Box = (props) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Boxes>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p>TODO DONE </p>

          <p style={{ fontSize: "20px", margin: "0" }}>Keep Up </p>
        </div>

        <Circle> 1/4 </Circle>
      </Boxes>
    </div>
  );
};

export default Box;
