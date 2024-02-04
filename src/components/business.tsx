import { features } from "../utils/constants";
import { layout, styles } from "../utils/style";
import Button from "./button";
import { FeatureCard } from ".";
import { FC } from "react";

const Business: FC = (): JSX.Element => {
  return (
    <section id="features" className={layout.section}>
      <div className={`${layout.sectionImage} flex-col`}>
        {features.map((feature, idx) => (
          <FeatureCard key={feature.id} {...feature} idx={idx} />
        ))}
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2}`}>
          Biznesingizni biz bilan <br className="sm:block hidden" />{" "}
          rivojlantiring
        </h2>
        <p className={`${styles.paragraph} max-w-[550px] mt-5`}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non corrupti
          expedita qui labore perferendis quae ratione odit debitis
          reprehenderit quaerat?
        </p>
        <Button styles={"mt-10"} />
      </div>
    </section>
  );
};

export default Business;
