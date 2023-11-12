import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => {
  return (
    <div
      className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
    >
      <div
        className={`${styles.flexCenter} flex-col w-full h-full rounded-full bg-primary`}
      >
        <p className="font-poppins font-medium text-lg leading-6 flex">
          <span className="text-gradient">Get</span>
          <img
            src={arrowUp}
            alt="Arrow up"
            className="w-6 h-6 object-contain"
          />
        </p>
        <p className="font-poppins font-medium text-lg leading-6">
          <span className="text-gradient">Started</span>
        </p>
      </div>
    </div>
  );
};

export default GetStarted;
