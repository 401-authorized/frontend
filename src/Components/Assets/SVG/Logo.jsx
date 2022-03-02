import { useMediaQuery } from "@mantine/hooks";

const Logo = () => {
  const matches = useMediaQuery('(min-width: 576px)');
  
  return (
    <svg
      width={matches ? "140" : "100"}
      // height="29"
      viewBox="0 0 189 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.048 26.216C11.552 26.216 9.296 25.664 7.28 24.56C5.288 23.456 3.716 21.932 2.564 19.988C1.436 18.02 0.872 15.824 0.872 13.4C0.872 10.976 1.436 8.792 2.564 6.848C3.716 4.88 5.3 3.344 7.316 2.24C9.332 1.136 11.588 0.583999 14.084 0.583999C15.956 0.583999 17.684 0.895999 19.268 1.52C20.852 2.144 22.196 3.056 23.3 4.256L21.608 5.948C19.64 3.956 17.156 2.96 14.156 2.96C12.164 2.96 10.352 3.416 8.72 4.328C7.088 5.24 5.804 6.488 4.868 8.072C3.956 9.656 3.5 11.432 3.5 13.4C3.5 15.368 3.956 17.144 4.868 18.728C5.804 20.312 7.088 21.56 8.72 22.472C10.352 23.384 12.164 23.84 14.156 23.84C17.18 23.84 19.664 22.832 21.608 20.816L23.3 22.508C22.196 23.708 20.84 24.632 19.232 25.28C17.648 25.904 15.92 26.216 14.048 26.216ZM28.979 0.799998H39.239C41.903 0.799998 44.255 1.34 46.295 2.42C48.335 3.476 49.919 4.964 51.047 6.884C52.175 8.78 52.739 10.952 52.739 13.4C52.739 15.848 52.175 18.032 51.047 19.952C49.919 21.848 48.335 23.336 46.295 24.416C44.255 25.472 41.903 26 39.239 26H28.979V0.799998ZM39.095 23.696C41.303 23.696 43.235 23.264 44.891 22.4C46.547 21.512 47.831 20.3 48.743 18.764C49.655 17.204 50.111 15.416 50.111 13.4C50.111 11.384 49.655 9.608 48.743 8.072C47.831 6.512 46.547 5.3 44.891 4.436C43.235 3.548 41.303 3.104 39.095 3.104H31.643V23.696H39.095ZM69.6652 26.216C67.1692 26.216 64.9132 25.664 62.8972 24.56C60.9052 23.456 59.3332 21.932 58.1812 19.988C57.0532 18.02 56.4892 15.824 56.4892 13.4C56.4892 10.976 57.0532 8.792 58.1812 6.848C59.3332 4.88 60.9172 3.344 62.9332 2.24C64.9492 1.136 67.2052 0.583999 69.7012 0.583999C71.5732 0.583999 73.3012 0.895999 74.8852 1.52C76.4692 2.144 77.8132 3.056 78.9172 4.256L77.2252 5.948C75.2572 3.956 72.7732 2.96 69.7732 2.96C67.7812 2.96 65.9692 3.416 64.3372 4.328C62.7052 5.24 61.4212 6.488 60.4852 8.072C59.5732 9.656 59.1172 11.432 59.1172 13.4C59.1172 15.368 59.5732 17.144 60.4852 18.728C61.4212 20.312 62.7052 21.56 64.3372 22.472C65.9692 23.384 67.7812 23.84 69.7732 23.84C72.7972 23.84 75.2812 22.832 77.2252 20.816L78.9172 22.508C77.8132 23.708 76.4572 24.632 74.8492 25.28C73.2652 25.904 71.5372 26.216 69.6652 26.216ZM100.426 14.3C101.434 14.3 102.202 14.072 102.73 13.616C103.282 13.136 103.558 12.416 103.558 11.456C103.558 10.544 103.27 9.848 102.694 9.368C102.142 8.864 101.326 8.612 100.246 8.612C99.8621 8.612 99.5381 8.624 99.2741 8.648C99.0341 8.648 98.7821 8.672 98.5181 8.72V14.3H100.426ZM98.5541 25.856C98.2901 25.928 97.8701 26 97.2941 26.072C96.7421 26.144 96.1901 26.18 95.6381 26.18C95.0861 26.18 94.5941 26.132 94.1621 26.036C93.7541 25.964 93.4061 25.82 93.1181 25.604C92.8301 25.388 92.6141 25.088 92.4701 24.704C92.3261 24.32 92.2541 23.816 92.2541 23.192V6.236C92.2541 5.732 92.3861 5.348 92.6501 5.084C92.9381 4.796 93.3221 4.568 93.8021 4.4C94.6181 4.112 95.5421 3.908 96.5741 3.788C97.6301 3.644 98.6861 3.572 99.7421 3.572C103.054 3.572 105.586 4.28 107.338 5.696C109.09 7.112 109.966 9.032 109.966 11.456C109.966 12.632 109.774 13.7 109.39 14.66C109.03 15.596 108.478 16.412 107.734 17.108C107.014 17.78 106.09 18.308 104.962 18.692C103.858 19.052 102.574 19.232 101.11 19.232H98.5541V25.856ZM130.285 17.252C130.285 18.74 130.057 20.072 129.601 21.248C129.145 22.4 128.497 23.372 127.657 24.164C126.841 24.956 125.857 25.556 124.705 25.964C123.553 26.372 122.269 26.576 120.853 26.576C119.437 26.576 118.153 26.36 117.001 25.928C115.849 25.496 114.853 24.884 114.013 24.092C113.197 23.276 112.561 22.292 112.105 21.14C111.649 19.988 111.421 18.692 111.421 17.252C111.421 15.836 111.649 14.552 112.105 13.4C112.561 12.248 113.197 11.276 114.013 10.484C114.853 9.668 115.849 9.044 117.001 8.612C118.153 8.18 119.437 7.964 120.853 7.964C122.269 7.964 123.553 8.192 124.705 8.648C125.857 9.08 126.841 9.704 127.657 10.52C128.497 11.312 129.145 12.284 129.601 13.436C130.057 14.588 130.285 15.86 130.285 17.252ZM117.685 17.252C117.685 18.716 117.961 19.844 118.513 20.636C119.089 21.404 119.881 21.788 120.889 21.788C121.897 21.788 122.665 21.392 123.193 20.6C123.745 19.808 124.021 18.692 124.021 17.252C124.021 15.812 123.745 14.708 123.193 13.94C122.641 13.148 121.861 12.752 120.853 12.752C119.845 12.752 119.065 13.148 118.513 13.94C117.961 14.708 117.685 15.812 117.685 17.252ZM139.39 25.964C139.15 26.036 138.766 26.108 138.238 26.18C137.734 26.252 137.206 26.288 136.654 26.288C136.126 26.288 135.646 26.252 135.214 26.18C134.806 26.108 134.458 25.964 134.17 25.748C133.882 25.532 133.654 25.244 133.486 24.884C133.342 24.5 133.27 24.008 133.27 23.408V12.608C133.27 12.056 133.366 11.588 133.558 11.204C133.774 10.796 134.074 10.436 134.458 10.124C134.842 9.812 135.31 9.536 135.862 9.296C136.438 9.032 137.05 8.804 137.698 8.612C138.346 8.42 139.018 8.276 139.714 8.18C140.41 8.06 141.106 8 141.802 8C142.954 8 143.866 8.228 144.538 8.684C145.21 9.116 145.546 9.836 145.546 10.844C145.546 11.18 145.498 11.516 145.402 11.852C145.306 12.164 145.186 12.452 145.042 12.716C144.538 12.716 144.022 12.74 143.494 12.788C142.966 12.836 142.45 12.908 141.946 13.004C141.442 13.1 140.962 13.208 140.506 13.328C140.074 13.424 139.702 13.544 139.39 13.688V25.964ZM154.191 19.988C154.191 20.612 154.383 21.056 154.767 21.32C155.175 21.584 155.739 21.716 156.459 21.716C156.819 21.716 157.191 21.692 157.575 21.644C157.959 21.572 158.295 21.488 158.583 21.392C158.799 21.656 158.979 21.956 159.123 22.292C159.291 22.604 159.375 22.988 159.375 23.444C159.375 24.356 159.027 25.1 158.331 25.676C157.659 26.252 156.459 26.54 154.731 26.54C152.619 26.54 150.987 26.06 149.835 25.1C148.707 24.14 148.143 22.58 148.143 20.42V5.012C148.407 4.94 148.779 4.868 149.259 4.796C149.763 4.7 150.291 4.652 150.843 4.652C151.899 4.652 152.715 4.844 153.291 5.228C153.891 5.588 154.191 6.368 154.191 7.568V9.872H158.907C159.051 10.136 159.183 10.472 159.303 10.88C159.447 11.264 159.519 11.696 159.519 12.176C159.519 13.016 159.327 13.628 158.943 14.012C158.583 14.372 158.091 14.552 157.467 14.552H154.191V19.988ZM169.973 22.112C170.381 22.112 170.825 22.076 171.305 22.004C171.809 21.908 172.181 21.788 172.421 21.644V18.764L169.829 18.98C169.157 19.028 168.605 19.172 168.173 19.412C167.741 19.652 167.525 20.012 167.525 20.492C167.525 20.972 167.705 21.368 168.065 21.68C168.449 21.968 169.085 22.112 169.973 22.112ZM169.685 7.964C170.981 7.964 172.157 8.096 173.213 8.36C174.293 8.624 175.205 9.032 175.949 9.584C176.717 10.112 177.305 10.796 177.713 11.636C178.121 12.452 178.325 13.424 178.325 14.552V22.616C178.325 23.24 178.145 23.756 177.785 24.164C177.449 24.548 177.041 24.884 176.561 25.172C175.001 26.108 172.805 26.576 169.973 26.576C168.701 26.576 167.549 26.456 166.517 26.216C165.509 25.976 164.633 25.616 163.889 25.136C163.169 24.656 162.605 24.044 162.197 23.3C161.813 22.556 161.621 21.692 161.621 20.708C161.621 19.052 162.113 17.78 163.097 16.892C164.081 16.004 165.605 15.452 167.669 15.236L172.385 14.732V14.48C172.385 13.784 172.073 13.292 171.449 13.004C170.849 12.692 169.973 12.536 168.821 12.536C167.909 12.536 167.021 12.632 166.157 12.824C165.293 13.016 164.513 13.256 163.817 13.544C163.505 13.328 163.241 13.004 163.025 12.572C162.809 12.116 162.701 11.648 162.701 11.168C162.701 10.544 162.845 10.052 163.133 9.692C163.445 9.308 163.913 8.984 164.537 8.72C165.233 8.456 166.049 8.264 166.985 8.144C167.945 8.024 168.845 7.964 169.685 7.964ZM188.295 25.964C188.031 26.012 187.635 26.072 187.107 26.144C186.603 26.24 186.087 26.288 185.559 26.288C185.031 26.288 184.551 26.252 184.119 26.18C183.711 26.108 183.363 25.964 183.075 25.748C182.787 25.532 182.559 25.244 182.391 24.884C182.247 24.5 182.175 24.008 182.175 23.408V2.528C182.439 2.48 182.823 2.42 183.327 2.348C183.855 2.252 184.383 2.204 184.911 2.204C185.439 2.204 185.907 2.24 186.315 2.312C186.747 2.384 187.107 2.528 187.395 2.744C187.683 2.96 187.899 3.26 188.043 3.644C188.211 4.004 188.295 4.484 188.295 5.084V25.964Z"
        fill="#ffffff"
      />
    </svg>
  );
};

export default Logo;
