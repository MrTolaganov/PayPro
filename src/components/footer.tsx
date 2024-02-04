import { FC } from "react";
import { styles } from "../utils/style";

const Footer: FC = (): JSX.Element => {
  return (
    <div className="flex flex-col justify-center items-center mb-5">
      <p className={styles.paragraph}>All rights preserved</p>;
    </div>
  );
};

export default Footer;
