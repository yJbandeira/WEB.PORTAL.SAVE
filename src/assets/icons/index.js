export const ChevronLeft = ({ fill = "#FFFFFF", className }) => {
  return (
    <div className={className}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.3333 27.12C22.8186 27.6726 22.7649 28.5137 22.2133 29C21.6608 29.4853 20.8197 29.4317 20.3333 28.88L9.66667 16.88C9.22447 16.3767 9.22447 15.6234 9.66667 15.12L20.3333 3.12005C20.6408 2.73826 21.1331 2.55601 21.6151 2.64547C22.097 2.73494 22.4911 3.08168 22.6411 3.54839C22.7911 4.0151 22.6729 4.52649 22.3333 4.88005L12.4533 16L22.3333 27.12Z"
          fill={fill}
        />
      </svg>
    </div>
  );
};

export const ChevronRight = ({ fill = "#FFFFFF" }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.3333 16.88L11.6666 28.88C11.1803 29.4316 10.3392 29.4853 9.78665 29C9.23504 28.5137 9.18135 27.6726 9.66665 27.12L19.5466 16L9.66665 4.88004C9.21891 4.32415 9.28836 3.51426 9.8242 3.04272C10.36 2.57117 11.1722 2.60526 11.6666 3.12004L22.3333 15.12C22.7755 15.6234 22.7755 16.3767 22.3333 16.88Z"
        fill={fill}
      />
    </svg>
  );
};

export const TvIcon = ({ fill = "#FFFFFF" }) => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.3745 5.46729H3.38767C2.55561 5.46729 1.8811 6.1418 1.8811 6.97385V16.7107C1.8811 17.5428 2.55561 18.2173 3.38767 18.2173H21.3745C22.2066 18.2173 22.8811 17.5428 22.8811 16.7107V6.97385C22.8811 6.1418 22.2066 5.46729 21.3745 5.46729Z"
        stroke={fill}
        strokeWidth="1.00189"
        strokeLinejoin="round"
      />
      <path
        d="M6.38086 20.467H18.3809"
        stroke={fill}
        strokeWidth="1.00189"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
    </svg>
  );
};
