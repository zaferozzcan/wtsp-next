import { Circle } from "better-react-spinkit";

export default function Loading() {
  return (
    <center>
      <div>
        <img
          src={img_url}
          style={{ marginBottom: 10, borderRadius: "50%" }}
          height={200}
        ></img>
        <Circle color="#FF4500" size={90} />
      </div>
    </center>
  );
}

const img_url =
  "https://www.nicepng.com/png/detail/12-121689_phone-logo-phone-png.png";
const styles = {
  display: "grid",
  placeItem: "center",
};
