import React from "react";
import { AnimationControls, motion } from "framer-motion";
import Link from "next/link";

// const svgVariants: any = {
//   hidden: {
//     rotate: -100,
//   },
//   visible: {
//     rotate: 0,
//     transition: { duration: 1 },
//   },
// };
const pathVariants: any = {
  hidden: (whiteColor: any) => ({
    opacity: 0,
    pathLength: 0,
    fill: whiteColor ? "rgba(255, 255, 255, 0)" : "rgba(234, 90, 12, 0)",
  }),
  visible: {
    opacity: 1,
    pathLength: 1,

    filter: " drop-shadow(0px 8px 5px rgba(0,0,0,1))",

    transition: {
      delay: 1.2,
      duration: 3,
      ease: "easeInOut",
      //   yoyo: 10,
    },
  },
  active: (whiteColor: any) => ({
    fill: whiteColor ? "rgba(255, 255, 255, 1)" : "rgb(234, 90, 1)",
    transition: {
      duration: 1,
      delay: 4,
      ease: "easeInOut",
      //   yoyo: 10,
    },
  }),
};

const Logo: React.FC<{ className?: string; link: string }> = ({
  className = "w-64",
  link,
}) => {
  return (
    <Link href={link}>
      <motion.svg
        className={className}
        width="385.04"
        height="75.504"
        viewBox="0 0 385.04 75.504"
        // fill="black"
        // style={{
        //   filter: "brightness(1.5) drop-shadow(0px 8px 5px rgba(0,0,0,1))",
        // }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          id="svgGroup"
          strokeLinecap="round"
          fillRule="evenodd"
          fontSize="9pt"
          fill="transparent"
        >
          <motion.path
            d="M 63.65 65.194 L 65.294 66.639 A 15.196 15.196 0 0 1 63.734 69.048 A 17.138 17.138 0 0 1 63.426 69.428 Q 62.306 70.772 60.886 71.793 A 13.649 13.649 0 0 1 57.873 73.437 Q 56.279 74.06 54.586 74.06 A 12.545 12.545 0 0 1 52.168 73.837 A 9.367 9.367 0 0 1 49.73 73.014 Q 47.663 71.968 46.244 70.2 A 11.949 11.949 0 0 1 44.171 66.283 A 13.527 13.527 0 0 1 44.127 66.141 A 16.427 16.427 0 0 1 43.431 61.547 A 18.381 18.381 0 0 1 43.43 61.31 L 43.43 42.035 A 255.099 255.099 0 0 1 42.683 45.341 A 316.61 316.61 0 0 1 41.836 48.883 Q 40.939 52.544 39.645 56.155 Q 38.35 59.766 36.606 63.103 A 27.954 27.954 0 0 1 33.503 67.845 A 25.204 25.204 0 0 1 32.498 69.004 Q 30.132 71.569 27.094 73.088 A 14.36 14.36 0 0 1 22.403 74.474 A 18.113 18.113 0 0 1 20.171 74.607 A 21.426 21.426 0 0 1 15.425 74.101 A 17.514 17.514 0 0 1 11.704 72.814 Q 7.969 71.021 5.354 67.884 A 21.046 21.046 0 0 1 2.035 62.283 A 25.174 25.174 0 0 1 1.37 60.438 A 29.401 29.401 0 0 1 0.091 53.645 A 35.012 35.012 0 0 1 0 51.1 A 39.641 39.641 0 0 1 1.893 39.122 A 53.941 53.941 0 0 1 7.097 27.592 Q 10.409 22.063 14.966 17.332 A 56.229 56.229 0 0 1 24.902 9.114 A 48.333 48.333 0 0 1 36.233 3.686 A 36.652 36.652 0 0 1 47.668 1.838 A 36.148 36.148 0 0 1 48.261 1.843 L 48.858 1.843 L 48.858 4.084 Q 43.629 4.333 38.798 6.35 A 39.616 39.616 0 0 0 29.758 11.629 A 47.187 47.187 0 0 0 22.063 19.175 A 51.465 51.465 0 0 0 16.112 28.289 A 50.554 50.554 0 0 0 12.277 38.25 A 39.535 39.535 0 0 0 10.929 47.113 A 36.445 36.445 0 0 0 10.907 48.36 A 34.558 34.558 0 0 0 11.005 50.895 A 42.504 42.504 0 0 0 11.156 52.519 A 29.776 29.776 0 0 0 12.003 56.952 A 25.7 25.7 0 0 0 13.547 61.185 Q 14.493 63.202 15.913 64.771 A 10.807 10.807 0 0 0 19.225 67.261 A 9.051 9.051 0 0 0 21.945 68.074 A 11.577 11.577 0 0 0 23.558 68.183 A 8.669 8.669 0 0 0 28.887 66.39 A 16.075 16.075 0 0 0 31.434 63.979 A 21.494 21.494 0 0 0 33.22 61.559 A 33.697 33.697 0 0 0 35.264 57.84 A 44.122 44.122 0 0 0 36.681 54.486 A 80.128 80.128 0 0 0 39.044 47.118 A 89.242 89.242 0 0 0 39.346 45.97 Q 40.491 41.487 41.263 36.831 A 172.387 172.387 0 0 0 42.253 30.056 A 150.241 150.241 0 0 0 42.508 27.891 A 184.814 184.814 0 0 0 42.919 23.763 A 145.142 145.142 0 0 0 43.206 19.947 Q 43.43 16.286 43.43 13.796 L 53.739 10.011 L 53.739 62.953 A 10.135 10.135 0 0 0 53.938 64.945 A 5.619 5.619 0 0 0 54.573 66.657 A 5.337 5.337 0 0 0 54.636 66.763 A 4.029 4.029 0 0 0 55.906 68.083 A 3.014 3.014 0 0 0 56.922 68.492 Q 57.339 68.581 57.823 68.581 A 5.706 5.706 0 0 0 60.911 67.666 A 6.964 6.964 0 0 0 61.11 67.535 A 11.783 11.783 0 0 0 62.732 66.224 A 9.677 9.677 0 0 0 63.65 65.194 Z"
            id="0"
            vectorEffect="non-scaling-stroke"
            stroke="#ea580c"
            strokeWidth="0.25mm"
            // fill="#ea580c"
            // variants={pathVariants}
            variants={pathVariants}
            initial="hidden"
            animate={["visible", "active"]}
          />

          <motion.path
            d="M 125.458 60.114 L 127.102 61.509 A 29.973 29.973 0 0 1 125.938 63.395 Q 125.293 64.363 124.513 65.396 A 49.992 49.992 0 0 1 124.288 65.692 A 30.407 30.407 0 0 1 120.428 69.851 A 23.395 23.395 0 0 1 115.871 73.063 A 10.824 10.824 0 0 1 112.647 74.205 A 9.848 9.848 0 0 1 110.915 74.358 A 12.271 12.271 0 0 1 106.928 73.723 A 11.289 11.289 0 0 1 105.287 73.014 Q 102.747 71.669 100.63 69.627 A 32.086 32.086 0 0 1 96.746 65.095 A 257.315 257.315 0 0 1 95.034 62.654 A 221.399 221.399 0 0 1 93.434 60.313 A 118.581 118.581 0 0 1 90.477 55.752 A 140.359 140.359 0 0 1 89.125 53.515 A 138.981 138.981 0 0 0 85.862 48.262 A 122.378 122.378 0 0 0 84.768 46.617 L 84.768 71.32 L 74.458 75.006 L 74.458 3.686 L 84.768 0 L 84.768 43.479 L 117.938 1.942 L 123.765 2.49 L 92.736 39.296 A 325.254 325.254 0 0 1 99.974 49.559 A 353.957 353.957 0 0 1 100.207 49.904 A 190.632 190.632 0 0 0 107.706 60.257 A 175.541 175.541 0 0 0 107.827 60.413 A 46.361 46.361 0 0 0 108.819 61.687 A 55.024 55.024 0 0 0 109.471 62.48 Q 110.367 63.551 111.413 64.422 Q 112.459 65.294 113.654 65.867 A 5.895 5.895 0 0 0 115.849 66.425 A 7.006 7.006 0 0 0 116.294 66.439 A 3.692 3.692 0 0 0 117.193 66.32 Q 117.605 66.217 118.053 66.024 A 8.149 8.149 0 0 0 118.685 65.717 A 19.096 19.096 0 0 0 121 64.244 A 21.259 21.259 0 0 0 121.324 63.999 Q 122.619 63.003 123.715 61.932 A 50.044 50.044 0 0 0 124.235 61.417 Q 124.972 60.675 125.458 60.114 Z"
            id="1"
            vectorEffect="non-scaling-stroke"
            stroke="#ffffff"
            strokeWidth="0.25mm"
            custom={"whiteColor"}
            variants={pathVariants}
            initial="hidden"
            animate={["visible", "active"]}
          />

          <motion.path
            d="M 164.953 62.156 L 166.447 63.75 Q 164.704 65.991 162.637 67.934 A 26.051 26.051 0 0 1 158.155 71.32 Q 155.739 72.765 153.05 73.611 A 18.466 18.466 0 0 1 147.472 74.458 A 17.943 17.943 0 0 1 142.895 73.89 A 15.795 15.795 0 0 1 140.698 73.138 Q 137.61 71.818 135.369 69.502 Q 133.128 67.187 131.883 64.024 Q 130.638 60.861 130.638 57.226 A 20.791 20.791 0 0 1 131.484 51.349 A 22.692 22.692 0 0 1 133.875 45.92 A 26.171 26.171 0 0 1 137.536 41.213 Q 139.652 39.047 142.192 37.503 A 23.718 23.718 0 0 1 147.571 35.087 A 19.744 19.744 0 0 1 153.398 34.216 A 15.771 15.771 0 0 1 156.41 34.496 A 14.132 14.132 0 0 1 157.358 34.714 A 9.961 9.961 0 0 1 159.921 35.783 A 9.115 9.115 0 0 1 160.67 36.283 Q 162.114 37.354 162.961 39.022 A 7.58 7.58 0 0 1 163.646 41.096 A 10.444 10.444 0 0 1 163.808 42.981 A 7.256 7.256 0 0 1 163.472 45.111 Q 163.195 46.018 162.687 46.966 A 20.869 20.869 0 0 1 161.11 49.45 A 26.415 26.415 0 0 1 159.749 51.149 Q 157.931 53.241 155.64 55.258 Q 153.349 57.275 150.983 58.994 Q 148.617 60.712 146.426 62.007 A 46.042 46.042 0 0 1 144.859 62.894 Q 144.086 63.311 143.396 63.637 A 21.871 21.871 0 0 1 142.591 63.999 A 15.792 15.792 0 0 0 146.874 67.734 Q 149.314 69.179 152.054 69.179 A 9.726 9.726 0 0 0 154.864 68.752 A 11.472 11.472 0 0 0 155.59 68.506 A 19.197 19.197 0 0 0 159.051 66.788 Q 160.72 65.742 162.239 64.497 A 75.18 75.18 0 0 0 163.677 63.289 A 56.416 56.416 0 0 0 164.953 62.156 Z M 154.444 44.824 Q 154.444 43.679 154.071 42.633 A 5.48 5.48 0 0 0 153.27 41.14 A 5.101 5.101 0 0 0 153 40.815 Q 152.303 40.043 151.332 39.57 A 4.665 4.665 0 0 0 149.876 39.144 A 5.931 5.931 0 0 0 149.115 39.097 A 6.195 6.195 0 0 0 145.468 40.292 A 7.999 7.999 0 0 0 144.981 40.666 A 14.551 14.551 0 0 0 142.163 43.823 A 16.872 16.872 0 0 0 141.719 44.525 A 21.506 21.506 0 0 0 139.578 49.381 A 21.522 21.522 0 0 0 139.107 51.218 Q 138.919 52.128 138.848 52.944 A 10.952 10.952 0 0 0 138.806 53.889 A 13.062 13.062 0 0 0 139.17 56.907 A 15.27 15.27 0 0 0 139.403 57.773 A 18.544 18.544 0 0 0 141.047 61.608 A 22.044 22.044 0 0 0 142.848 60.493 Q 143.756 59.873 144.726 59.102 A 40.759 40.759 0 0 0 145.38 58.57 A 37.681 37.681 0 0 0 149.738 54.312 A 27.324 27.324 0 0 0 152.385 50.74 A 24.315 24.315 0 0 0 153.1 49.506 A 12.763 12.763 0 0 0 153.958 47.569 Q 154.345 46.432 154.424 45.364 A 7.34 7.34 0 0 0 154.444 44.824 Z"
            id="2"
            vectorEffect="non-scaling-stroke"
            stroke="#ffffff"
            strokeWidth="0.25mm"
            custom={"whiteColor"}
            variants={pathVariants}
            initial="hidden"
            animate={["visible", "active"]}
          />

          <motion.path
            d="M 213.264 66.141 L 214.708 67.635 A 11.18 11.18 0 0 1 213.164 70.075 Q 212.218 71.221 211.047 72.117 Q 209.877 73.014 208.532 73.537 A 7.63 7.63 0 0 1 205.743 74.06 A 11.276 11.276 0 0 1 203.65 73.879 Q 202.478 73.657 201.578 73.163 A 5.17 5.17 0 0 1 200.041 71.893 Q 198.272 69.727 198.272 65.991 L 198.272 45.721 A 11.848 11.848 0 0 0 198.269 45.442 Q 198.266 45.318 198.261 45.182 A 21.571 21.571 0 0 0 198.248 44.899 Q 198.223 44.426 198.073 44.002 A 2.575 2.575 0 0 0 197.88 43.577 A 2.075 2.075 0 0 0 197.675 43.28 A 0.812 0.812 0 0 0 197.151 42.994 A 1.181 1.181 0 0 0 196.978 42.981 A 2.608 2.608 0 0 0 195.753 43.306 Q 194.962 43.722 194.164 44.675 A 16.71 16.71 0 0 0 192.962 46.314 Q 192.177 47.524 191.424 49.058 A 44.417 44.417 0 0 0 190.003 52.288 A 56.57 56.57 0 0 0 188.984 55.084 Q 187.863 58.421 187.017 61.683 Q 186.17 64.945 185.697 67.784 Q 185.258 70.417 185.226 72.065 A 13.035 13.035 0 0 0 185.224 72.316 L 176.159 75.504 L 176.159 42.035 A 3.44 3.44 0 0 0 175.661 40.217 A 1.614 1.614 0 0 0 174.498 39.426 A 2.306 2.306 0 0 0 174.117 39.396 A 3.214 3.214 0 0 0 172.143 40.076 A 4.242 4.242 0 0 0 171.851 40.317 A 12.165 12.165 0 0 0 171.039 41.118 Q 170.642 41.55 170.341 41.977 A 7.08 7.08 0 0 0 170.232 42.135 L 168.888 40.641 A 12.773 12.773 0 0 1 170.127 38.593 A 14.443 14.443 0 0 1 170.407 38.225 A 11.736 11.736 0 0 1 172.499 36.158 Q 173.669 35.262 175.039 34.739 A 7.96 7.96 0 0 1 177.902 34.216 A 10.959 10.959 0 0 1 179.967 34.397 Q 182.284 34.842 183.505 36.382 A 7.464 7.464 0 0 1 184.833 39.067 Q 185.224 40.478 185.224 42.234 L 185.224 58.471 A 54.701 54.701 0 0 1 185.678 56.574 Q 186.01 55.285 186.444 53.814 A 55.714 55.714 0 0 1 188.043 49.181 A 61.337 61.337 0 0 1 188.312 48.51 A 56.019 56.019 0 0 1 190.777 43.255 A 30.033 30.033 0 0 1 192.741 40.056 A 25.471 25.471 0 0 1 193.79 38.673 A 16.058 16.058 0 0 1 195.847 36.559 A 13.324 13.324 0 0 1 197.376 35.436 A 7.722 7.722 0 0 1 201.56 34.216 A 8.574 8.574 0 0 1 202.88 34.311 Q 203.567 34.418 204.117 34.647 A 3.647 3.647 0 0 1 205.096 35.237 Q 206.291 36.258 206.814 37.827 A 11.09 11.09 0 0 1 207.297 40.025 A 13.708 13.708 0 0 1 207.387 41.288 A 142.732 142.732 0 0 1 207.433 44.043 A 125.985 125.985 0 0 1 207.437 44.924 L 207.437 66.24 A 3.44 3.44 0 0 0 207.935 68.058 A 1.614 1.614 0 0 0 209.098 68.85 A 2.306 2.306 0 0 0 209.479 68.88 Q 210.624 68.88 211.645 67.958 A 12.165 12.165 0 0 0 212.457 67.157 Q 212.854 66.725 213.155 66.298 A 7.08 7.08 0 0 0 213.264 66.141 Z"
            id="3"
            vectorEffect="non-scaling-stroke"
            stroke="#ffffff"
            strokeWidth="0.25mm"
            custom={"whiteColor"}
            variants={pathVariants}
            initial="hidden"
            animate={["visible", "active"]}
          />

          <motion.path
            d="M 260.379 66.141 L 261.823 67.635 A 11.18 11.18 0 0 1 260.279 70.075 Q 259.333 71.221 258.163 72.117 Q 256.992 73.014 255.647 73.537 A 7.63 7.63 0 0 1 252.858 74.06 A 11.276 11.276 0 0 1 250.765 73.879 Q 249.593 73.657 248.694 73.163 A 5.17 5.17 0 0 1 247.156 71.893 Q 245.388 69.727 245.388 65.991 L 245.388 45.721 A 11.848 11.848 0 0 0 245.384 45.442 Q 245.381 45.318 245.376 45.182 A 21.571 21.571 0 0 0 245.363 44.899 Q 245.338 44.426 245.188 44.002 A 2.575 2.575 0 0 0 244.995 43.577 A 2.075 2.075 0 0 0 244.79 43.28 A 0.812 0.812 0 0 0 244.267 42.994 A 1.181 1.181 0 0 0 244.093 42.981 A 2.608 2.608 0 0 0 242.868 43.306 Q 242.077 43.722 241.279 44.675 A 16.71 16.71 0 0 0 240.077 46.314 Q 239.292 47.524 238.54 49.058 A 44.417 44.417 0 0 0 237.118 52.288 A 56.57 56.57 0 0 0 236.099 55.084 Q 234.979 58.421 234.132 61.683 Q 233.285 64.945 232.812 67.784 Q 232.373 70.417 232.341 72.065 A 13.035 13.035 0 0 0 232.339 72.316 L 223.274 75.504 L 223.274 42.035 A 3.44 3.44 0 0 0 222.776 40.217 A 1.614 1.614 0 0 0 221.613 39.426 A 2.306 2.306 0 0 0 221.232 39.396 A 3.214 3.214 0 0 0 219.258 40.076 A 4.242 4.242 0 0 0 218.966 40.317 A 12.165 12.165 0 0 0 218.154 41.118 Q 217.757 41.55 217.456 41.977 A 7.08 7.08 0 0 0 217.348 42.135 L 216.003 40.641 A 12.773 12.773 0 0 1 217.242 38.593 A 14.443 14.443 0 0 1 217.522 38.225 A 11.736 11.736 0 0 1 219.614 36.158 Q 220.784 35.262 222.154 34.739 A 7.96 7.96 0 0 1 225.018 34.216 A 10.959 10.959 0 0 1 227.082 34.397 Q 229.399 34.842 230.621 36.382 A 7.464 7.464 0 0 1 231.949 39.067 Q 232.339 40.478 232.339 42.234 L 232.339 58.471 A 54.701 54.701 0 0 1 232.793 56.574 Q 233.125 55.285 233.559 53.814 A 55.714 55.714 0 0 1 235.158 49.181 A 61.337 61.337 0 0 1 235.427 48.51 A 56.019 56.019 0 0 1 237.892 43.255 A 30.033 30.033 0 0 1 239.856 40.056 A 25.471 25.471 0 0 1 240.905 38.673 A 16.058 16.058 0 0 1 242.962 36.559 A 13.324 13.324 0 0 1 244.491 35.436 A 7.722 7.722 0 0 1 248.675 34.216 A 8.574 8.574 0 0 1 249.995 34.311 Q 250.682 34.418 251.233 34.647 A 3.647 3.647 0 0 1 252.211 35.237 Q 253.406 36.258 253.929 37.827 A 11.09 11.09 0 0 1 254.412 40.025 A 13.708 13.708 0 0 1 254.502 41.288 A 142.732 142.732 0 0 1 254.549 44.043 A 125.985 125.985 0 0 1 254.552 44.924 L 254.552 66.24 A 3.44 3.44 0 0 0 255.05 68.058 A 1.614 1.614 0 0 0 256.213 68.85 A 2.306 2.306 0 0 0 256.594 68.88 Q 257.739 68.88 258.76 67.958 A 12.165 12.165 0 0 0 259.573 67.157 Q 259.969 66.725 260.271 66.298 A 7.08 7.08 0 0 0 260.379 66.141 Z"
            id="4"
            vectorEffect="non-scaling-stroke"
            stroke="#ffffff"
            strokeWidth="0.25mm"
            custom={"whiteColor"}
            variants={pathVariants}
            initial="hidden"
            animate={["visible", "active"]}
          />

          <motion.path
            d="M 305.452 65.991 L 306.797 67.535 Q 306.199 68.83 305.303 69.976 Q 304.406 71.121 303.236 72.018 Q 302.065 72.914 300.696 73.437 A 7.96 7.96 0 0 1 297.832 73.96 Q 295.378 73.96 293.786 73.117 A 5.021 5.021 0 0 1 292.179 71.793 A 7.413 7.413 0 0 1 290.877 69.189 Q 290.461 67.73 290.461 65.892 L 290.461 64.995 A 40.143 40.143 0 0 1 288.583 68.17 A 43.865 43.865 0 0 1 288.444 68.382 A 17.368 17.368 0 0 1 285.904 71.42 Q 284.484 72.765 282.741 73.611 Q 280.998 74.458 278.856 74.458 A 14.338 14.338 0 0 1 275.806 74.147 A 11.351 11.351 0 0 1 273.129 73.213 Q 270.639 71.968 268.945 69.851 A 14.065 14.065 0 0 1 266.753 65.935 A 16.55 16.55 0 0 1 266.405 64.896 A 20.677 20.677 0 0 1 265.572 59.661 A 23.523 23.523 0 0 1 265.559 58.869 A 25.816 25.816 0 0 1 267.054 50.295 A 28.894 28.894 0 0 1 267.078 50.228 A 25.434 25.434 0 0 1 271.361 42.533 A 22.321 22.321 0 0 1 277.985 37.03 Q 281.845 34.913 286.576 34.913 Q 288.469 34.913 290.361 35.262 A 15.73 15.73 0 0 1 293.972 36.382 A 12.502 12.502 0 0 1 297.11 38.399 A 9.797 9.797 0 0 1 299.341 41.271 A 11.178 11.178 0 0 1 299.426 41.438 L 292.005 44.575 A 14.086 14.086 0 0 0 290.635 42.757 Q 289.863 41.886 288.942 41.238 A 8.952 8.952 0 0 0 286.975 40.192 A 6.104 6.104 0 0 0 284.783 39.794 A 7.228 7.228 0 0 0 280.176 41.388 A 14.507 14.507 0 0 0 276.92 45.033 A 16.498 16.498 0 0 0 276.74 45.322 A 20.139 20.139 0 0 0 274.573 50.303 Q 273.892 52.71 273.832 54.704 A 12.664 12.664 0 0 0 273.826 55.084 A 22.807 22.807 0 0 0 273.908 56.962 Q 273.99 57.945 274.152 59.03 A 38.024 38.024 0 0 0 274.2 59.342 A 17.312 17.312 0 0 0 275.52 63.8 A 11.409 11.409 0 0 0 277.103 66.37 A 10.234 10.234 0 0 0 278.01 67.336 A 5.309 5.309 0 0 0 281.252 68.752 A 7.079 7.079 0 0 0 281.895 68.78 A 6.937 6.937 0 0 0 283.513 68.6 A 5.397 5.397 0 0 0 285.082 67.958 A 7.812 7.812 0 0 0 287.373 65.817 A 11.796 11.796 0 0 0 288.521 63.814 A 14.208 14.208 0 0 0 288.942 62.779 A 21.508 21.508 0 0 0 289.888 59.268 Q 290.212 57.475 290.336 55.707 Q 290.453 54.056 290.46 52.731 A 32.071 32.071 0 0 0 290.461 52.544 L 290.461 49.107 L 299.525 45.92 L 299.525 66.141 A 3.44 3.44 0 0 0 300.023 67.958 A 1.614 1.614 0 0 0 301.187 68.75 A 2.306 2.306 0 0 0 301.567 68.78 A 3.214 3.214 0 0 0 303.542 68.1 A 4.242 4.242 0 0 0 303.834 67.859 A 10.706 10.706 0 0 0 304.723 66.96 A 7.835 7.835 0 0 0 305.452 65.991 Z"
            id="5"
            vectorEffect="non-scaling-stroke"
            stroke="#ffffff"
            strokeWidth="0.25mm"
            custom={"whiteColor"}
            variants={pathVariants}
            initial="hidden"
            animate={["visible", "active"]}
          />

          <motion.path
            d="M 358.594 47.862 L 346.989 72.765 Q 346.69 73.313 346.167 73.487 A 3.451 3.451 0 0 1 345.232 73.657 A 3.983 3.983 0 0 1 345.047 73.661 A 3.714 3.714 0 0 1 343.702 73.412 Q 343.055 73.163 342.806 72.466 L 335.036 45.023 L 328.113 72.117 A 3.208 3.208 0 0 1 327.581 72.924 A 2.783 2.783 0 0 1 326.993 73.412 A 3.001 3.001 0 0 1 325.402 73.86 A 3.577 3.577 0 0 1 325.374 73.86 Q 324.727 73.86 324.154 73.611 A 1.181 1.181 0 0 1 323.496 72.891 A 1.772 1.772 0 0 1 323.432 72.665 L 314.666 44.675 Q 314.467 44.077 314.143 43.405 Q 313.819 42.732 313.346 42.16 A 4.814 4.814 0 0 0 312.589 41.419 A 4.3 4.3 0 0 0 312.3 41.213 A 2.309 2.309 0 0 0 311.187 40.847 A 2.85 2.85 0 0 0 310.98 40.84 A 3.207 3.207 0 0 0 309.163 41.388 A 12.58 12.58 0 0 0 308.159 42.128 A 10.608 10.608 0 0 0 307.693 42.533 L 306.697 41.238 A 12.273 12.273 0 0 1 308.519 38.7 A 13.609 13.609 0 0 1 308.59 38.624 A 15.107 15.107 0 0 1 311.13 36.457 Q 312.524 35.511 314.093 34.963 A 9.678 9.678 0 0 1 317.306 34.415 A 4.035 4.035 0 0 1 318.459 34.573 A 3.268 3.268 0 0 1 319.646 35.212 A 6.989 6.989 0 0 1 321.158 37.012 A 7.934 7.934 0 0 1 321.24 37.154 Q 321.888 38.3 322.311 39.595 Q 322.721 40.848 323.014 41.868 A 46.724 46.724 0 0 1 323.033 41.936 A 1257.954 1257.954 0 0 1 325.997 51.349 Q 327.466 56.08 328.91 60.712 L 333.841 40.74 L 332.596 36.756 L 340.963 33.967 L 349.131 62.953 L 353.813 52.245 A 6.608 6.608 0 0 0 354.023 51.625 Q 354.115 51.307 354.194 50.936 A 14.46 14.46 0 0 0 354.311 50.328 A 17.463 17.463 0 0 0 354.428 49.535 Q 354.474 49.161 354.494 48.836 A 7.722 7.722 0 0 0 354.51 48.36 A 9.839 9.839 0 0 0 354.176 45.745 A 7.951 7.951 0 0 0 352.991 43.23 A 10.781 10.781 0 0 0 349.588 40.153 A 12.882 12.882 0 0 0 348.932 39.794 L 354.609 31.925 A 10.655 10.655 0 0 1 356.899 33.444 A 8.468 8.468 0 0 1 358.718 35.685 A 10.388 10.388 0 0 1 359.934 39.459 A 13.156 13.156 0 0 1 360.038 41.139 Q 360.038 42.671 359.67 44.521 A 23.863 23.863 0 0 1 359.665 44.55 A 15.667 15.667 0 0 1 359.176 46.415 A 12.088 12.088 0 0 1 358.594 47.862 Z"
            id="6"
            vectorEffect="non-scaling-stroke"
            stroke="#ffffff"
            strokeWidth="0.25mm"
            custom={"whiteColor"}
            variants={pathVariants}
            initial="hidden"
            animate={["visible", "active"]}
          />

          <motion.path
            d="M 383.695 66.141 L 385.04 67.635 A 14.669 14.669 0 0 1 384.128 69.304 Q 383.582 70.158 382.969 70.806 A 7.696 7.696 0 0 1 382.375 71.37 A 14.967 14.967 0 0 1 381.162 72.307 Q 380.508 72.758 379.879 73.07 A 8.242 8.242 0 0 1 379.462 73.263 Q 377.818 73.96 376.125 74.06 A 11.369 11.369 0 0 1 374.587 73.962 Q 373.803 73.854 373.144 73.63 A 5.849 5.849 0 0 1 372.489 73.362 A 6.633 6.633 0 0 1 371.088 72.466 A 5.553 5.553 0 0 1 370.198 71.52 A 6.81 6.81 0 0 1 369.028 68.93 Q 368.704 67.485 368.704 65.991 L 368.704 38.051 L 377.868 34.913 L 377.868 66.24 A 4.222 4.222 0 0 0 377.933 67.003 Q 378.012 67.434 378.188 67.776 A 2.211 2.211 0 0 0 378.416 68.133 A 1.903 1.903 0 0 0 379.012 68.645 A 1.827 1.827 0 0 0 379.835 68.855 A 2.267 2.267 0 0 0 379.9 68.856 Q 380.604 68.856 381.403 68.424 A 5.439 5.439 0 0 0 381.728 68.232 Q 382.749 67.585 383.695 66.141 Z M 367.658 12.053 L 378.167 8.467 L 375.527 26.646 L 370.646 28.189 L 367.658 12.053 Z"
            id="7"
            vectorEffect="non-scaling-stroke"
            stroke="#ffffff"
            strokeWidth="0.25mm"
            custom={"whiteColor"}
            variants={pathVariants}
            initial="hidden"
            animate={["visible", "active"]}
          />
        </g>
      </motion.svg>
    </Link>
  );
};

export default Logo;
