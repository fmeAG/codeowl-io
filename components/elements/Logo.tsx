import Image from 'next/image';
import React from 'react';
import { classNames } from '../../utils/classnames';

interface LogoProps {
  colorClass: string;
  fmeStyle?: 'light' | 'dark';
}

export function Logo({
  colorClass,
  fmeStyle = 'dark',
}: LogoProps): JSX.Element {
  return (
    <div className={classNames(colorClass, 'flex flex-col w-64 items-end')}>
      <svg
        width="255"
        height="48"
        viewBox="0 0 255 48"
        className={classNames('fill-current block')}
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="6.5" cy="21.5" r="6.5" fill="#F59B00" />
        <circle cx="27" cy="30" r="4" fill="#F59B00" />
        <circle cx="23.5" cy="3.5" r="3.5" fill="#F59B00" />
        <circle cx="15" cy="31" r="4" fill="#FF9900" />
        <circle cx="9" cy="10" r="4" fill="#DE004B" />
        <ellipse cx="23" cy="41.5" rx="7" ry="6.5" fill="#F59B00" />
        <circle cx="39.5" cy="31.5" r="6.5" fill="#DE004B" />
        <ellipse cx="23" cy="17.5" rx="7" ry="6.5" fill="#F59B00" />
        <ellipse cx="38.5" cy="13" rx="6.5" ry="7" fill="#F59B00" />
        <path d="M64.94 9.58C67.86 9.58 70.01 10.11 71.39 11.17C72.79 12.23 73.49 13.84 73.49 16C73.49 16.98 73.3 17.84 72.92 18.58C72.56 19.3 72.07 19.92 71.45 20.44C70.85 20.94 70.2 21.35 69.5 21.67L75.8 31H70.76L65.66 22.78H63.23V31H58.7V9.58H64.94ZM64.61 13.3H63.23V19.09H64.7C66.2 19.09 67.27 18.84 67.91 18.34C68.57 17.84 68.9 17.1 68.9 16.12C68.9 15.1 68.55 14.38 67.85 13.96C67.17 13.52 66.09 13.3 64.61 13.3ZM84.8647 14.29C87.0647 14.29 88.7447 14.77 89.9047 15.73C91.0847 16.67 91.6747 18.12 91.6747 20.08V31H88.5547L87.6847 28.78H87.5647C86.8647 29.66 86.1247 30.3 85.3447 30.7C84.5647 31.1 83.4947 31.3 82.1347 31.3C80.6747 31.3 79.4647 30.88 78.5047 30.04C77.5447 29.18 77.0647 27.87 77.0647 26.11C77.0647 24.37 77.6747 23.09 78.8947 22.27C80.1147 21.43 81.9447 20.97 84.3847 20.89L87.2347 20.8V20.08C87.2347 19.22 87.0047 18.59 86.5447 18.19C86.1047 17.79 85.4847 17.59 84.6847 17.59C83.8847 17.59 83.1047 17.71 82.3447 17.95C81.5847 18.17 80.8247 18.45 80.0647 18.79L78.5947 15.76C79.4747 15.3 80.4447 14.94 81.5047 14.68C82.5847 14.42 83.7047 14.29 84.8647 14.29ZM85.4947 23.47C84.0547 23.51 83.0547 23.77 82.4947 24.25C81.9347 24.73 81.6547 25.36 81.6547 26.14C81.6547 26.82 81.8547 27.31 82.2547 27.61C82.6547 27.89 83.1747 28.03 83.8147 28.03C84.7747 28.03 85.5847 27.75 86.2447 27.19C86.9047 26.61 87.2347 25.8 87.2347 24.76V23.41L85.4947 23.47ZM105.37 14.32C107.21 14.32 108.7 15.04 109.84 16.48C110.98 17.9 111.55 20 111.55 22.78C111.55 25.56 110.96 27.68 109.78 29.14C108.6 30.58 107.09 31.3 105.25 31.3C104.07 31.3 103.13 31.09 102.43 30.67C101.73 30.23 101.16 29.74 100.72 29.2H100.48C100.64 30.04 100.72 30.84 100.72 31.6V38.2H96.2502V14.62H99.8802L100.51 16.75H100.72C101.16 16.09 101.75 15.52 102.49 15.04C103.23 14.56 104.19 14.32 105.37 14.32ZM103.93 17.89C102.77 17.89 101.95 18.25 101.47 18.97C101.01 19.69 100.76 20.79 100.72 22.27V22.75C100.72 24.33 100.95 25.55 101.41 26.41C101.89 27.25 102.75 27.67 103.99 27.67C105.01 27.67 105.76 27.25 106.24 26.41C106.74 25.55 106.99 24.32 106.99 22.72C106.99 19.5 105.97 17.89 103.93 17.89ZM117.485 8.2C118.145 8.2 118.715 8.36 119.195 8.68C119.675 8.98 119.915 9.55 119.915 10.39C119.915 11.21 119.675 11.78 119.195 12.1C118.715 12.42 118.145 12.58 117.485 12.58C116.805 12.58 116.225 12.42 115.745 12.1C115.285 11.78 115.055 11.21 115.055 10.39C115.055 9.55 115.285 8.98 115.745 8.68C116.225 8.36 116.805 8.2 117.485 8.2ZM119.705 14.62V31H115.235V14.62H119.705ZM129.565 31.3C127.745 31.3 126.255 30.59 125.095 29.17C123.955 27.73 123.385 25.62 123.385 22.84C123.385 20.04 123.965 17.92 125.125 16.48C126.285 15.04 127.805 14.32 129.685 14.32C130.865 14.32 131.835 14.55 132.595 15.01C133.355 15.47 133.955 16.04 134.395 16.72H134.545C134.485 16.4 134.415 15.94 134.335 15.34C134.255 14.72 134.215 14.09 134.215 13.45V8.2H138.685V31H135.265L134.395 28.87H134.215C133.775 29.55 133.185 30.13 132.445 30.61C131.705 31.07 130.745 31.3 129.565 31.3ZM131.125 27.73C132.365 27.73 133.235 27.37 133.735 26.65C134.235 25.91 134.495 24.81 134.515 23.35V22.87C134.515 21.27 134.265 20.05 133.765 19.21C133.285 18.37 132.385 17.95 131.065 17.95C130.085 17.95 129.315 18.38 128.755 19.24C128.195 20.08 127.915 21.3 127.915 22.9C127.915 24.5 128.195 25.71 128.755 26.53C129.315 27.33 130.105 27.73 131.125 27.73ZM157.753 9.58C160.673 9.58 162.823 10.11 164.203 11.17C165.603 12.23 166.303 13.84 166.303 16C166.303 16.98 166.113 17.84 165.733 18.58C165.373 19.3 164.883 19.92 164.263 20.44C163.663 20.94 163.013 21.35 162.313 21.67L168.613 31H163.573L158.473 22.78H156.043V31H151.513V9.58H157.753ZM157.423 13.3H156.043V19.09H157.513C159.013 19.09 160.083 18.84 160.723 18.34C161.383 17.84 161.713 17.1 161.713 16.12C161.713 15.1 161.363 14.38 160.663 13.96C159.983 13.52 158.903 13.3 157.423 13.3ZM177.707 14.32C179.967 14.32 181.757 14.97 183.077 16.27C184.397 17.55 185.057 19.38 185.057 21.76V23.92H174.497C174.537 25.18 174.907 26.17 175.607 26.89C176.327 27.61 177.317 27.97 178.577 27.97C179.637 27.97 180.597 27.87 181.457 27.67C182.317 27.45 183.207 27.12 184.127 26.68V30.13C183.327 30.53 182.477 30.82 181.577 31C180.697 31.2 179.627 31.3 178.367 31.3C176.727 31.3 175.277 31 174.017 30.4C172.757 29.78 171.767 28.85 171.047 27.61C170.327 26.37 169.967 24.81 169.967 22.93C169.967 21.01 170.287 19.42 170.927 18.16C171.587 16.88 172.497 15.92 173.657 15.28C174.817 14.64 176.167 14.32 177.707 14.32ZM177.737 17.5C176.877 17.5 176.157 17.78 175.577 18.34C175.017 18.9 174.687 19.77 174.587 20.95H180.857C180.837 19.95 180.577 19.13 180.077 18.49C179.577 17.83 178.797 17.5 177.737 17.5ZM191.996 31L185.756 14.62H190.436L193.586 23.95C193.766 24.51 193.906 25.09 194.006 25.69C194.126 26.29 194.196 26.83 194.216 27.31H194.336C194.396 26.23 194.616 25.11 194.996 23.95L198.146 14.62H202.826L196.586 31H191.996ZM207.426 8.2C208.086 8.2 208.656 8.36 209.136 8.68C209.616 8.98 209.856 9.55 209.856 10.39C209.856 11.21 209.616 11.78 209.136 12.1C208.656 12.42 208.086 12.58 207.426 12.58C206.746 12.58 206.166 12.42 205.686 12.1C205.226 11.78 204.996 11.21 204.996 10.39C204.996 9.55 205.226 8.98 205.686 8.68C206.166 8.36 206.746 8.2 207.426 8.2ZM209.646 14.62V31H205.176V14.62H209.646ZM221.067 14.32C223.327 14.32 225.117 14.97 226.437 16.27C227.757 17.55 228.417 19.38 228.417 21.76V23.92H217.857C217.897 25.18 218.267 26.17 218.967 26.89C219.687 27.61 220.677 27.97 221.937 27.97C222.997 27.97 223.957 27.87 224.817 27.67C225.677 27.45 226.567 27.12 227.487 26.68V30.13C226.687 30.53 225.837 30.82 224.937 31C224.057 31.2 222.987 31.3 221.727 31.3C220.087 31.3 218.637 31 217.377 30.4C216.117 29.78 215.127 28.85 214.407 27.61C213.687 26.37 213.327 24.81 213.327 22.93C213.327 21.01 213.647 19.42 214.287 18.16C214.947 16.88 215.857 15.92 217.017 15.28C218.177 14.64 219.527 14.32 221.067 14.32ZM221.097 17.5C220.237 17.5 219.517 17.78 218.937 18.34C218.377 18.9 218.047 19.77 217.947 20.95H224.217C224.197 19.95 223.937 19.13 223.437 18.49C222.937 17.83 222.157 17.5 221.097 17.5ZM243.665 25.27C243.585 24.93 243.465 24.43 243.305 23.77C243.165 23.09 243.005 22.37 242.825 21.61C242.645 20.83 242.475 20.12 242.315 19.48C242.155 18.82 242.045 18.34 241.985 18.04H241.865C241.805 18.34 241.695 18.82 241.535 19.48C241.395 20.12 241.235 20.83 241.055 21.61C240.875 22.37 240.705 23.09 240.545 23.77C240.385 24.45 240.265 24.97 240.185 25.33L238.865 31H234.065L229.415 14.62H233.855L235.745 21.88C235.885 22.38 236.005 22.98 236.105 23.68C236.225 24.38 236.335 25.06 236.435 25.72C236.535 26.36 236.605 26.87 236.645 27.25H236.765C236.785 26.97 236.825 26.6 236.885 26.14C236.945 25.66 237.015 25.17 237.095 24.67C237.195 24.17 237.275 23.72 237.335 23.32C237.415 22.9 237.475 22.62 237.515 22.48L239.525 14.62H244.445L246.365 22.48C246.445 22.76 246.535 23.21 246.635 23.83C246.755 24.45 246.855 25.08 246.935 25.72C247.035 26.36 247.085 26.87 247.085 27.25H247.205C247.245 26.91 247.315 26.42 247.415 25.78C247.515 25.12 247.625 24.43 247.745 23.71C247.885 22.99 248.025 22.38 248.165 21.88L250.115 14.62H254.495L249.785 31H244.925L243.665 25.27Z" />
      </svg>
      <div className="flex flex-row items-center space-x-2">
        <span className="inline-block">by</span>
        <div className="relative w-16 h-8 inline-block">
          <Image
            src={
              fmeStyle === 'light'
                ? 'https://media.graphcms.com/pq8cmTJySheQe1YjYirz'
                : 'https://media.graphcms.com/s8EJuXI5QG67hILOq58X'
            }
            layout="fill"
          />
        </div>
      </div>
    </div>
  );
}
