import { FC } from "react";

interface Props {
  styles?: string;
}

const Button: FC<Props> = ({ styles }): JSX.Element => {
  return (
    <button
      type="button"
      className={`${styles} py-3 px-6 font-montserrat font-medium text-[18px] bg-blue-gradient outline-none rounded-[8px]`}
    >
      Boshlash
    </button>
  );
};

export default Button;
