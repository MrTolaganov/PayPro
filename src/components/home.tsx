import { FC } from "react";
import { discount, robot } from "../assets";
import { styles } from "../utils/style";
import Button from "./button";

const Home: FC = (): JSX.Element => {
  return (
    <section id="home" className={`flex md:flex-row flex-col`}>
      {/* Information */}
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 mt-[-8px]`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 rounded-[10px] mb-2 bg-slate-500 bg-discount-gradient">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Chegirma{" "}
            <span className="text-white">1 Oylik</span> Hisob
          </p>
        </div>

        {/* Title */}
        <div className="w-full">
          <h1 className={`${styles.heading1}`}>
            Yangi Avlod <br />{" "}
            <span className="text-gradient">To'lov usuli</span>
          </h1>
        </div>

        {/* Description */}
        <p className={`${styles.paragraph} mt-5 max-w-[550px]`}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi
          delectus ab distinctio soluta porro blanditiis culpa suscipit. Amet,
          animi possimus.
        </p>

        {/* Getting Started */}
        <Button styles={`mt-5`} />

        {/* Gradient theme */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient " />
        <div className="absolute z-[1] w-[80%] h-[85%] rounded-full bottom-40 white__gradient " />
        <div className="absolute z-[0] w-[50%] h-[55%] right-20 bottom-20 blue__gradient " />
      </div>

      {/* Animation image */}
      <div className={`flex-1 ${styles.flexStart} md:my-0 my-10 relative`}>
        <img
          src={robot}
          alt="robot"
          className="w-[600px] h-[600px] relative z-10 rounded-sm"
        />
      </div>
    </section>
  );
};

export default Home;
