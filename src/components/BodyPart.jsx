import allIcon from "../assets/icons/all.png";
import backIcon from "../assets/icons/back.png";
import cardioIcon from "../assets/icons/cardio.png";
import chestIcon from "../assets/icons/chest.png";
import lowerArmsIcon from "../assets/icons/lower_arms.png";
import lowerLegsIcon from "../assets/icons/lower_legs.png";
import neckIcon from "../assets/icons/neck.png";
import shouldersIcon from "../assets/icons/shoulder.png";
import upperArmsIcon from "../assets/icons/upper_arms.png";
import upperLegsIcon from "../assets/icons/upper_legs.png";
import waistIcon from "../assets/icons/waist.png";

const bodyPartImages = {
  all: allIcon,
  back: backIcon,
  cardio: cardioIcon,
  chest: chestIcon,
  "lower arms": lowerArmsIcon,
  "lower legs": lowerLegsIcon,
  neck: neckIcon,
  shoulders: shouldersIcon,
  "upper arms": upperArmsIcon,
  "upper legs": upperLegsIcon,
  waist: waistIcon,
};

const BodyPart = ({ item, bodyPart, setBodyPart }) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? "4px solid #FF2625" : "",
        background: "#fff",
        borderBottomLeftRadius: "20px",
        width: "270px",
        height: "280px",
        cursor: "pointer",
        gap: "47px",
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
    >
      <img
        src={bodyPartImages[item]}
        alt={item}
        style={{ width: "60px", height: "60px" }}
      />{" "}
      <Typography
        fontSize="24px"
        color="#3a1212"
        textTransform="capitalize"
        className="normal-2"
      >
        {" "}
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
