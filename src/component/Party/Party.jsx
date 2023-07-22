import "./Party.css";

const Party = ({ toggle }) => {
  return (
    <div className="party-container">
      <div className="party-header">
        <div className="party-heading">Party</div>
        <div
          className="add-party-button-container"
          onClick={() => toggle((prev) => !prev)}
        >
          <div className="add-party-button">
            <svg
              width="16"
              height="12"
              viewBox="0 0 12 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.78052 15C3.57867 15 0.172607 11.6423 0.172607 7.5C0.172607 3.35775 3.57867 0 7.78052 0C11.9824 0 15.3884 3.35775 15.3884 7.5C15.3884 11.6423 11.9824 15 7.78052 15ZM7.78052 13.5C9.39472 13.5 10.9428 12.8679 12.0842 11.7426C13.2256 10.6174 13.8669 9.0913 13.8669 7.5C13.8669 5.9087 13.2256 4.38258 12.0842 3.25736C10.9428 2.13214 9.39472 1.5 7.78052 1.5C6.16633 1.5 4.61824 2.13214 3.47684 3.25736C2.33543 4.38258 1.69419 5.9087 1.69419 7.5C1.69419 9.0913 2.33543 10.6174 3.47684 11.7426C4.61824 12.8679 6.16633 13.5 7.78052 13.5ZM8.54131 8.25V11.25C8.54131 11.4489 8.46116 11.6397 8.31848 11.7803C8.17581 11.921 7.9823 12 7.78052 12C7.57875 12 7.38524 11.921 7.24256 11.7803C7.09988 11.6397 7.01973 11.4489 7.01973 11.25V8.25H3.97656C3.77479 8.25 3.58128 8.17098 3.4386 8.03033C3.29593 7.88968 3.21577 7.69891 3.21577 7.5C3.21577 7.30109 3.29593 7.11032 3.4386 6.96967C3.58128 6.82902 3.77479 6.75 3.97656 6.75H7.01973V3.75C7.01973 3.55109 7.09988 3.36032 7.24256 3.21967C7.38524 3.07902 7.57875 3 7.78052 3C7.9823 3 8.17581 3.07902 8.31848 3.21967C8.46116 3.36032 8.54131 3.55109 8.54131 3.75V6.75H11.5845C11.7863 6.75 11.9798 6.82902 12.1224 6.96967C12.2651 7.11032 12.3453 7.30109 12.3453 7.5C12.3453 7.69891 12.2651 7.88968 12.1224 8.03033C11.9798 8.17098 11.7863 8.25 11.5845 8.25H8.54131Z"
                fill="#4F617D"
              />
            </svg>
          </div>
          <div className="add-party-button-text"> Add Party</div>
        </div>
      </div>
      <div className="metal-price-container">
        <div className="metal-price">
          <div className="metal-name">Silver</div>
          <div className="metal-weight red">14.200 Kg</div>
          <div className="metal-status red">Lena</div>
        </div>
        <div className="metal-price">
          <div className="metal-name">Gold</div>
          <div className="metal-weight red">25.966 Gm</div>
          <div className="metal-status red">Lena</div>
        </div>
        <div className="metal-price">
          <div className="metal-name">Amount</div>
          <div className="metal-weight green">Rs. 1850.00</div>
          <div className="metal-status green">Dena</div>
        </div>
      </div>
    </div>
  );
};

export default Party;
