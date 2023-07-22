import { useState } from "react";
import "./Tab.css";

const Tab = () => {
  const [toggle, changeToggle] = useState(false);

  return (
    <div className="tab-container">
      <div className="heading-container">
        <div>
          <svg
            width="22"
            height="24"
            viewBox="0 -4 23 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.2 15V9.70588H10.8V15H15.3V7.94118H18L9 0L0 7.94118H2.7V15H7.2Z"
              fill="#484848"
            />
          </svg>
        </div>
        <div className="heading">Parties</div>
        <div className="toggle-btn" onClick={() => changeToggle(!toggle)}>
          <svg
            width="20"
            height="25"
            viewBox="0 -2 18 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.2 1.6C2.77565 1.6 2.36869 1.76857 2.06863 2.06863C1.76857 2.36869 1.6 2.77565 1.6 3.2V12.8C1.6 13.2243 1.76857 13.6313 2.06863 13.9314C2.36869 14.2314 2.77565 14.4 3.2 14.4H12.8C13.2243 14.4 13.6313 14.2314 13.9314 13.9314C14.2314 13.6313 14.4 13.2243 14.4 12.8V3.2C14.4 2.77565 14.2314 2.36869 13.9314 2.06863C13.6313 1.76857 13.2243 1.6 12.8 1.6H3.2ZM3.2 0H12.8C13.6487 0 14.4626 0.337142 15.0627 0.937258C15.6629 1.53737 16 2.35131 16 3.2V12.8C16 13.6487 15.6629 14.4626 15.0627 15.0627C14.4626 15.6629 13.6487 16 12.8 16H3.2C2.35131 16 1.53737 15.6629 0.937258 15.0627C0.337142 14.4626 0 13.6487 0 12.8V3.2C0 2.35131 0.337142 1.53737 0.937258 0.937258C1.53737 0.337142 2.35131 0 3.2 0ZM4 7.2H12C12.2122 7.2 12.4157 7.28429 12.5657 7.43431C12.7157 7.58434 12.8 7.78783 12.8 8C12.8 8.21217 12.7157 8.41566 12.5657 8.56569C12.4157 8.71571 12.2122 8.8 12 8.8H4C3.78783 8.8 3.58434 8.71571 3.43431 8.56569C3.28429 8.41566 3.2 8.21217 3.2 8C3.2 7.78783 3.28429 7.58434 3.43431 7.43431C3.58434 7.28429 3.78783 7.2 4 7.2Z"
              fill="#484848"
            />
          </svg>
        </div>
      </div>
      {toggle ? (
        <div className="tabs">
          <div className="tab active-tab">Karigar</div>
          <div className="tab">Bullion</div>
          <div className="tab">Supplier</div>
          <div className="tab">Customer</div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Tab;
