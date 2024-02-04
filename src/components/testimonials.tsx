import { FC } from "react";
import { feedbacks } from "../utils/constants";
import { styles } from "../utils/style";
import FeedbackCard from "./feedback-card";

const Testimonials: FC = (): JSX.Element => {
  return (
    <div
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
    >
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h2 className={styles.heading2}>Odamlar biz haqimizda qanday fikrda</h2>
        <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} text-left max-w-[550px]`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            exercitationem sapiente aliquam inventore. Dicta, nostrum quas?
          </p>
        </div>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center w-full relative z-[1]">
        {feedbacks.map((feedback) => (
          <FeedbackCard key={feedback.id} {...feedback} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
