import { FC } from "react";
import { astore, bill, gplay } from "../assets";
import { layout, styles } from "../utils/style";

const Billing: FC = (): JSX.Element => {
  return (
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Hisob-kitob va daromadizni <br className="sm:block hidden" /> osongina
          boshqaring
        </h2>
        <p className={`${styles.paragraph} max-w-[550px] mt-5`}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          incidunt quae ut dolorum magnam esse vel laboriosam accusantium eaque
          fuga?
        </p>
        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img
            src={gplay}
            alt="google-store"
            className="w-[200px] h-[100px] object-contain mr-5 cursor-pointer"
          />
          <img
            src={astore}
            alt="google-store"
            className="w-[200px] h-[100px] object-contain mr-5 cursor-pointer"
          />
        </div>
      </div>
      <div className={layout.sectionImageReverse}>
        <img
          src={bill}
          alt="billings"
          className="w-[500px] h-[500px] relative z-[5]"
        />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient " />
        <div className="absolute z-[1] w-[80%] h-[85%] rounded-full bottom-40 white__gradient " />
      </div>
    </section>
  );
};

export default Billing;
