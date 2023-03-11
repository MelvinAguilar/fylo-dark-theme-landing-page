import MotionComponent from "./MotionComponent";
import { fadeInVariants } from "../utils/motion";

const getMaxWidth = (index) => {
  switch (index) {
    case 0:
      return "max-w-card-1";
    case 1:
      return "max-w-card-2";
    default:
      return "max-w-card-default";
  }
};

const Card = ({ imageUrl, title, description, index, width, height }) => {
  return (
    <MotionComponent
      as="div"
      variants={fadeInVariants("up", 0.5, 0.8)}
      className={`text-center ${getMaxWidth(index)}`}
    >
      <div className="grid min-h-picture place-content-center">
        <img
          src={imageUrl}
          alt=""
          width={width}
          height={height}
          className="mx-auto"
        />
      </div>
      <div>
        <h3 className="mt-4 mb-2 font-raleway text-xl font-bold leading-[1.4375rem]">
          {title}
        </h3>
        <p className="leading-[150%]">{description}</p>
      </div>
    </MotionComponent>
  );
};

export default Card;
