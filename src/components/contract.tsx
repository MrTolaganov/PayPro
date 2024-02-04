import { FC } from "react";
import { card } from "../assets";
import { layout, styles } from "../utils/style";
import Button from "./button";

const Contract: FC = (): JSX.Element => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionImage}>
        <img src={card} alt="card" className="w-[100%] h-[100%]" />
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Bir necha oson qadamda <br className="sm:block hidden" /> shartnoma
          tuzish
        </h2>
        <p className={`${styles.paragraph} max-w-[550px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero sed
          iure veritatis maiores error dignissimos beatae enim inventore
          corrupti consequatur!
        </p>
        <Button styles={"mt-10"} />
      </div>
    </section>
  );
};

export default Contract;
