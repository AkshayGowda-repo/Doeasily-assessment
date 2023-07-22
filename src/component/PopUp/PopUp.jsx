import { useState } from "react";

import "./PopUp.css";

const PopUp = ({ toggle }) => {
  const [partyGroup, setPartyGroup] = useState([]);
  const partyGroups = [
    { id: 1, name: "Karigar" },
    { id: 2, name: "Bullion" },
    { id: 3, name: "Supplier" },
    { id: 4, name: "Customer" },
  ];
  return (
    <div className="pop-container">
      <div className="dialog-box">
        <div className="dialog-header-container">
          <div className="dialog-header">
            <div className="dialog-heading">Add Party</div>
            <svg
              width="25"
              height="25"
              viewBox="0 -2 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 7.80001C0 6.37001 1.17 5.20001 2.6 5.20001H6.5L9.1 2.60001H16.9L19.5 5.20001H23.4C24.0896 5.20001 24.7509 5.47393 25.2385 5.96153C25.7261 6.44912 26 7.11044 26 7.80001V20.8C26 21.4896 25.7261 22.1509 25.2385 22.6385C24.7509 23.1261 24.0896 23.4 23.4 23.4H2.6C1.91044 23.4 1.24912 23.1261 0.761522 22.6385C0.273928 22.1509 0 21.4896 0 20.8V7.80001ZM13 20.8C14.7239 20.8 16.3772 20.1152 17.5962 18.8962C18.8152 17.6772 19.5 16.0239 19.5 14.3C19.5 12.5761 18.8152 10.9228 17.5962 9.70381C16.3772 8.48483 14.7239 7.80001 13 7.80001C11.2761 7.80001 9.62279 8.48483 8.40381 9.70381C7.18482 10.9228 6.5 12.5761 6.5 14.3C6.5 16.0239 7.18482 17.6772 8.40381 18.8962C9.62279 20.1152 11.2761 20.8 13 20.8ZM13 18.2C12.4878 18.2 11.9807 18.0991 11.5075 17.9031C11.0344 17.7071 10.6044 17.4199 10.2423 17.0577C9.88013 16.6956 9.59286 16.2656 9.39687 15.7925C9.20088 15.3193 9.1 14.8122 9.1 14.3C9.1 13.7879 9.20088 13.2807 9.39687 12.8075C9.59286 12.3344 9.88013 11.9044 10.2423 11.5423C10.6044 11.1801 11.0344 10.8929 11.5075 10.6969C11.9807 10.5009 12.4878 10.4 13 10.4C14.0343 10.4 15.0263 10.8109 15.7577 11.5423C16.4891 12.2737 16.9 13.2657 16.9 14.3C16.9 15.3343 16.4891 16.3263 15.7577 17.0577C15.0263 17.7891 14.0343 18.2 13 18.2Z"
                fill="#4F617D"
              />
            </svg>
          </div>
          <div className="dialog-close" onClick={() => toggle((prev) => !prev)}>
            <svg
              width="22"
              height="22"
              viewBox="0 0 29 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1_274)">
                <path
                  d="M4.24846 24.7515C2.86356 23.4139 1.75892 21.8139 0.998986 20.0449C0.239055 18.2758 -0.160945 16.3731 -0.177675 14.4478C-0.194406 12.5225 0.172469 10.6132 0.901542 8.83115C1.63061 7.04916 2.70728 5.4302 4.06873 4.06876C5.43017 2.70732 7.04913 1.63065 8.83112 0.901573C10.6131 0.1725 12.5225 -0.194375 14.4478 -0.177645C16.3731 -0.160914 18.2758 0.239086 20.0448 0.999017C21.8139 1.75895 23.4139 2.86359 24.7515 4.24849C27.3927 6.98322 28.8543 10.646 28.8212 14.4478C28.7882 18.2497 27.2632 21.8864 24.5748 24.5749C21.8864 27.2633 18.2496 28.7882 14.4478 28.8213C10.6459 28.8543 6.98319 27.3928 4.24846 24.7515ZM16.53 14.5L20.6335 10.3965L18.589 8.35199L14.5 12.4555L10.3965 8.35199L8.35196 10.3965L12.4555 14.5L8.35196 18.6035L10.3965 20.648L14.5 16.5445L18.6035 20.648L20.648 18.6035L16.5445 14.5H16.53Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_274">
                  <rect width="29" height="29" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <div className="dialog-inputs">
          <div className="dialog-fields-container">
            <div className="dialog-fields-heading">Party Group *</div>
            <div className="dialog-fields-selection-container">
              <select
                className="dialog-fields-selection"
                value={partyGroup}
                onChange={(e) => {
                  setPartyGroup(e.target.value);
                }}
              >
                <option value="">Select Party Groups</option>
                {partyGroups.map((group) => (
                  <option key={group.id} value={group.id}>
                    {group.name}
                  </option>
                ))}
              </select>
              <div className="dialog-fields-button dialog-button-purple">
                <div className="dialog-button-name ">Karigar</div>
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.5 1.1875C4.86875 1.1875 1.1875 4.86875 1.1875 9.5C1.1875 14.1313 4.86875 17.8125 9.5 17.8125C14.1313 17.8125 17.8125 14.1313 17.8125 9.5C17.8125 4.86875 14.1313 1.1875 9.5 1.1875ZM12.7063 13.6562L9.5 10.45L6.29375 13.6562L5.34375 12.7063L8.55 9.5L5.34375 6.29375L6.29375 5.34375L9.5 8.55L12.7063 5.34375L13.6562 6.29375L10.45 9.5L13.6562 12.7063L12.7063 13.6562Z"
                    fill="#484848"
                  />
                </svg>
              </div>
              <div className="dialog-fields-button dialog-button-grey">
                <div className="dialog-button-name">Bullion</div>
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.5 1.1875C4.86875 1.1875 1.1875 4.86875 1.1875 9.5C1.1875 14.1313 4.86875 17.8125 9.5 17.8125C14.1313 17.8125 17.8125 14.1313 17.8125 9.5C17.8125 4.86875 14.1313 1.1875 9.5 1.1875ZM12.7063 13.6562L9.5 10.45L6.29375 13.6562L5.34375 12.7063L8.55 9.5L5.34375 6.29375L6.29375 5.34375L9.5 8.55L12.7063 5.34375L13.6562 6.29375L10.45 9.5L13.6562 12.7063L12.7063 13.6562Z"
                    fill="#484848"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="dialog-fields-input-container">
            <div className="dialog-fields-input-flex">
              <div className="dialog-fields-input">
                <div className="dialog-fields-input-name">Name *</div>
                <input type="text" placeholder="Enter Name" />
              </div>
              <div className="dialog-fields-input">
                <div className="dialog-fields-input-name">Phone Number</div>
                <input type="text" placeholder="Enter 10 digit number" />
              </div>
            </div>
            <div className="dialog-fields-input-flex">
              <div className="dialog-fields-input">
                <div className="dialog-fields-input-name">Address</div>
                <input type="text" placeholder="Enter Address" />
              </div>
              <div className="dialog-fields-input">
                <div className="dialog-fields-input-name">City</div>
                <input type="text" placeholder="Enter City" />
              </div>
              <div className="dialog-fields-input">
                <div className="dialog-fields-input-name">Pincode</div>
                <input type="text" placeholder="Enter Pincode" />
              </div>
            </div>
            <div className="dialog-fields-input-flex">
              <div className="dialog-fields-input">
                <div className="dialog-fields-input-name">GSTIN</div>
                <input type="text" placeholder="Enter 16 digit GSTIN" />
              </div>
              <div className="dialog-fields-input">
                <div className="dialog-fields-input-name">PAN Number</div>
                <input type="text" placeholder="Enter 10 PAN Number" />
              </div>
              <div className="dialog-fields-input">
                <div className="dialog-fields-input-name">Aadhaar</div>
                <input type="text" placeholder="Enter 12 digit Aadhaar" />
              </div>
            </div>
          </div>
          <div className="dialog-button">
            <div>
              <div
                className="dialog-cancel-button"
                onClick={() => toggle((prev) => !prev)}
              >
                Cancel
              </div>
              <div className="dialog-save-button">Save</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
