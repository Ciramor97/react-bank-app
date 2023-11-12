import { stats } from "../constants";
import styles from "../style";
const Stats = () => {
  return (
    <section
      className={`flex-row flex-wrap sm:mb-20 mb-6 ${styles.flexCenter}`}
    >
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="flex-1 flex justify-start items-center m-3 text-white"
        >
          <h4 className="font-poppins font-semibold xs:text-[40px] text-3xl xs:leading-[53px] leading-10">
            {stat.value}
          </h4>
          <p className="font-poppins font-normal xs:text-[20px] text-base xs:leading-[23px] leading-5 text-gradient uppercase ml-3">
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
