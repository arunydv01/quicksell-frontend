import img5 from "../Assets/img13.jpeg";
import { BsFillCircleFill } from "react-icons/bs";
import { userAvailabilityColor } from "./mapping";

const getUserIcon = (user) => {
  let url = user.photoURL
    ? user.photoURL
    : "https://firebasestorage.googleapis.com/v0/b/nextjs-firebase-auth-1a1b2.appspot.com/o/user.png?alt=media&token=8b4b2b9e-5b0e-4b0e-9b0e-5b0e4b0e9b0e";
  return (
    <div
      style={{
        position: "relative",
        width: "min-content",
      }}
    >
      <img
        src={img5}
        alt=''
        style={{
          borderRadius: "50%",
          height: "2rem",
          width: "2rem",
        }}
      />
      <BsFillCircleFill
        color= {userAvailabilityColor(user.available)}
        size={"0.7rem"}
        style={{
          position: "absolute",
          bottom: "0rem",
          right: "0rem",
          border: "2px white solid",
          borderRadius: "50%"
        }}
      />
    </div>
  );
};

export { getUserIcon };
