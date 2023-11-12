import { quotes } from "../assets";

const FeedBackCard = ({ content, name, title, img }) => {
  return (
    <div className="flex flex-col max-w-[370px] justify-between px-10 py-12 rounded-[20px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
      <img
        src={quotes}
        alt="double quotes"
        className="w-[42px] h-[28px] object-contain"
      />
      <p className="font-poppins font-normal text-lg leading-8 my-8 text-white">
        {content}
      </p>
      <div className="flex">
        <img src={img} alt={name} className="w-12 h-12 rounded-full" />
        <div className="ml-4">
          <h4 className="font-poppins font-semibold text-[20px] leading-8 text-white">
            {name}
          </h4>
          <p className="font-poppins font-normal text-base leading-7 text-dimWhite">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeedBackCard;
