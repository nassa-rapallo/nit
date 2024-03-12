"use client";
import { Variants, motion } from "framer-motion";

type VariantsKey = {
  initial: string;
  animate: string;
};

type Props = {
  variants?: Variants;
  variantsKey?: VariantsKey;
  className?: string;
};

export const Nassa = ({ className, variants, variantsKey }: Props) => {
  return (
    <motion.div
      variants={variants || {}}
      initial={variantsKey?.initial || "initial"}
      animate={variantsKey?.animate || "animate"}
      className={className || ""}
    >
      <svg
        className={className || ""}
        viewBox="0 0 65 81"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M55.1219 63.3486L52.4866 58.2775L57.4836 55.6857L55.1883 51.301L50.2054 53.8891L47.5703 48.8213L52.5323 46.2296L50.2335 41.8483L45.2822 44.4189L42.4366 38.9485L47.367 36.3848L45.0684 32.0035L40.1626 34.5566L38.004 30.4065C37.7726 29.9652 37.5379 29.5274 37.3031 29.0967L41.8095 26.7537C41.7148 26.568 40.5128 24.1514 39.658 22.2952L34.752 24.8379C33.6251 23.0948 32.411 21.4092 31.1148 19.7877L35.2322 17.6478C38.6529 20.3325 41.4603 23.7164 43.467 27.5731L45.6255 31.7233L46.5926 33.5655L60.6093 60.5013L65 58.2213L47.8716 25.3002C44.8173 19.4277 40.181 14.5255 34.486 11.1477C28.7913 7.76993 22.2647 6.05096 15.6438 6.18498L12.4375 0L3.6456 4.57394L6.85898 10.7484C2.94865 16.0861 0.608857 22.4099 0.103621 29.0061C-0.401633 35.6024 0.947767 42.2084 3.99952 48.0788C10.6886 60.9354 14.4389 68.1435 21.128 81L25.5186 78.7165L22.8835 73.6487L26.6049 71.7156L24.3167 67.3377L20.5987 69.2675L17.9636 64.2032L21.6781 62.2735L19.3899 57.8852L15.6789 59.8113L12.8336 54.3409L16.541 52.4147L14.2526 48.0264L10.5523 49.949L8.39019 45.7989C8.16251 45.3541 7.94522 44.9093 7.73852 44.4611L10.9378 42.801C10.9378 42.801 10.1177 40.0412 9.46957 37.9853L6.03199 39.7716C5.45381 37.6775 5.1014 35.5279 4.98068 33.3589L7.93111 31.8284C7.85757 31.058 7.62635 28.5363 7.55634 26.4454L5.22248 27.6678C5.55957 25.1455 6.20935 22.675 7.15686 20.313C7.21629 21.3638 7.31454 22.4144 7.46162 23.5281C7.58085 24.4316 7.73035 25.3445 7.91012 26.2668V26.2983C8.21859 27.892 8.61101 29.51 9.08402 31.1419L9.10167 31.2191C9.68574 33.2139 10.371 35.1777 11.1551 37.1028L11.1865 37.1694C11.7542 38.5702 12.3767 39.963 13.0542 41.3476L13.1805 41.6277C13.3976 42.069 13.622 42.5138 13.8496 42.9515L30.9816 75.8727L35.3723 73.5892L32.7617 68.5356L37.0123 66.3291L34.731 61.9372L30.4805 64.1437L27.8419 59.0759L32.0959 56.873L29.8112 52.4812L25.5606 54.6875L22.7047 49.2171L26.9553 47.0107L24.6707 42.6189L20.42 44.8287L18.2579 40.6751C18.0303 40.2373 17.8094 39.796 17.5957 39.3548L21.6149 37.2779C21.6149 37.2324 20.49 34.6093 19.7823 32.634L15.5773 34.8123C14.8124 32.8733 14.1537 30.8938 13.6045 28.8831L16.6004 27.3176C16.4989 26.8973 15.9698 24.6838 15.353 22.3899L12.5287 23.8573C12.0607 21.1436 11.9489 18.3803 12.1959 15.6375L20.7634 32.0981L23.0377 36.4969L28.1712 46.3592L31.0096 51.8332L33.2943 56.225L35.94 61.2894L38.2211 65.6812L40.8597 70.7454L45.2541 68.4654L42.6188 63.3908L47.2899 60.9637L45.0017 56.5754L40.3342 59.0024L37.6991 53.9346L42.3666 51.5075L40.0784 47.1192L35.4144 49.5427L32.5689 44.0723L37.2296 41.6487L34.9447 37.2604L30.2842 39.6804L27.4389 34.224L31.6439 32.0316C31.6439 32.0316 30.4174 29.4188 29.4924 27.5801L25.1541 29.8356L22.3087 24.3617L26.6119 22.1272C28.036 23.8449 29.3583 25.6448 30.5715 27.5172L32.8913 31.3906C33.1296 31.8214 33.3678 32.2592 33.5922 32.7004L35.7507 36.8506L38.0179 41.2494L45.7832 56.1796L48.0714 60.5679L50.7065 65.6391L55.1219 63.3486ZM30.4349 14.5623L27.7507 15.9632C27.0955 15.2873 26.4543 14.6359 25.7534 14.009C24.937 13.256 24.1135 12.5591 23.3005 11.9076C25.7801 12.4916 28.1769 13.3835 30.4349 14.5623ZM16.59 13.3646C18.9778 14.7393 21.177 16.4181 23.1322 18.3588L20.0276 19.9628L16.59 13.3646Z"
          fill="#E5F5FF"
        />
      </svg>
    </motion.div>
  );
};