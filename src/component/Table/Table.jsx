import "./Table.css";

const Table = () => {

  let data = [
    {
      id: 1,
      partyName: 'CHANDU BHAIYA',
      mobileNumber: '9717167563',
      gold: '-25.966 Gm',
      silver: '-14.200 Kg',
      amount: '+₹1,850.00',
    },
    
  ];

 const deleteItem = (i)=>{
    data =  data.filter((element, index)=> index !== i);
    console.log(data);
  }


  return (
    <div className="table-container">
      <div className="table-rows-name-container">
        <div className="table-col">#</div>
        <div className="table-col">Party Name</div>
        <div className="table-col">Mobile Number</div>
        <div className="table-col">Gold</div>
        <div className="table-col">Silver</div>
        <div className="table-col">Amount</div>
        <div className="table-col">Actions</div>
      </div>
      <div className="table-data-container">
        {/* //-------------------------------------- */}
        {data.map((row, index)=>(
        <div className="table-rows-data-container">
          <div className="table-col">{row.id}</div>
          <div className="table-col">{row.partyName}</div>
          <div className="table-col">{row.mobileNumber}</div>
          <div className="table-col red">{row.gold}</div>
          <div className="table-col red">{row.silver}</div>
          <div className="table-col green">{row.amount}</div>
          <div className="table-col">
            <div className="table-col-actions">
              <button className="table-edit table-action-btn">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="12" fill="#484848" />
                  <path
                    d="M16.8667 9.95L14.0333 7.15L15.9167 5.26667L18.7333 8.08333L16.8667 9.95ZM6 18V15.1667L13.0667 8.1L15.9 10.9333L8.83333 18H6Z"
                    fill="white"
                  />
                </svg>
              </button>
              <button className="table-edit table-action-btn" onClick={()=>deleteItem(index)}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="12" fill="#870F0F" />
                  <path
                    d="M11.0833 6.75H13.9167C13.9167 6.33008 13.7674 5.92735 13.5017 5.63042C13.2361 5.33348 12.8757 5.16667 12.5 5.16667C12.1243 5.16667 11.7639 5.33348 11.4983 5.63042C11.2326 5.92735 11.0833 6.33008 11.0833 6.75ZM9.66667 6.75C9.66667 5.91015 9.96518 5.1047 10.4965 4.51083C11.0279 3.91697 11.7486 3.58334 12.5 3.58334C13.2515 3.58334 13.9721 3.91697 14.5035 4.51083C15.0348 5.1047 15.3333 5.91015 15.3333 6.75H18.875C19.0629 6.75 19.243 6.83341 19.3759 6.98188C19.5087 7.13034 19.5833 7.33171 19.5833 7.54167C19.5833 7.75163 19.5087 7.953 19.3759 8.10146C19.243 8.24993 19.0629 8.33334 18.875 8.33334H18.2503L17.6227 16.5192C17.5623 17.3096 17.2387 18.046 16.7159 18.5825C16.1931 19.1191 15.5091 19.4168 14.7993 19.4167H10.2008C9.49094 19.4168 8.80695 19.1191 8.28411 18.5825C7.76127 18.046 7.43767 17.3096 7.37734 16.5192L6.74976 8.33334H6.12501C5.93714 8.33334 5.75698 8.24993 5.62414 8.10146C5.4913 7.953 5.41667 7.75163 5.41667 7.54167C5.41667 7.33171 5.4913 7.13034 5.62414 6.98188C5.75698 6.83341 5.93714 6.75 6.12501 6.75H9.66667ZM14.625 11.5C14.625 11.29 14.5504 11.0887 14.4175 10.9402C14.2847 10.7917 14.1045 10.7083 13.9167 10.7083C13.7288 10.7083 13.5486 10.7917 13.4158 10.9402C13.283 11.0887 13.2083 11.29 13.2083 11.5V14.6667C13.2083 14.8766 13.283 15.078 13.4158 15.2265C13.5486 15.3749 13.7288 15.4583 13.9167 15.4583C14.1045 15.4583 14.2847 15.3749 14.4175 15.2265C14.5504 15.078 14.625 14.8766 14.625 14.6667V11.5ZM11.0833 10.7083C10.8955 10.7083 10.7153 10.7917 10.5825 10.9402C10.4496 11.0887 10.375 11.29 10.375 11.5V14.6667C10.375 14.8766 10.4496 15.078 10.5825 15.2265C10.7153 15.3749 10.8955 15.4583 11.0833 15.4583C11.2712 15.4583 11.4514 15.3749 11.5842 15.2265C11.717 15.078 11.7917 14.8766 11.7917 14.6667V11.5C11.7917 11.29 11.717 11.0887 11.5842 10.9402C11.4514 10.7917 11.2712 10.7083 11.0833 10.7083Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
))}
        {/* //----------------- */}
      </div>
    </div>
  );
};

export default Table;
