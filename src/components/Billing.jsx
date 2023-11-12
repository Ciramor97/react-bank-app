import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

export default function Billing() {
  return (
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img
          src={bill}
          alt="Billing"
          className="w-full h-full relative z-[5]"
        />
        <div className="absolute z-[3] w-[50%] h-[50%] rounded-full top-0 -left-1/2 white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] rounded-full bottom-0 -left-1/2 pink__gradient" />
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Easily control your <br className="sm:block hidden" /> billing &
          invoicing.
        </h2>
        <p
          className={styles.paragraph}
          style={{
            width: "45%",
            marginTop: 5,
          }}
        >
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div className="flex flex-wrap sm:mt-10 mt-6">
          <img
            src={apple}
            alt="apple store"
            className="w-32 h-32 object-contain mr-5 cursor-pointer"
          />
          <img
            src={google}
            alt="goole store"
            className="w-32 h-32 object-contain cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
}
