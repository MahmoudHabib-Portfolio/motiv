
const ListView = ({listC}) => {
  return (
   <svg
    width={44}
    height={44}
    viewBox="0 0 44 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{cursor:"pointer"}}
  >
    <rect width={44} height={44} rx={22} fill={listC} style={{transition: "all 0.3s ease-Out"}} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 26C11.4477 26 11 26.4477 11 27C11 27.5523 11.4477 28 12 28H23C23.5523 28 24 27.5523 24 27C24 26.4477 23.5523 26 23 26H12ZM29 26C28.4477 26 28 26.4477 28 27C28 27.5523 28.4477 28 29 28H32C32.5523 28 33 27.5523 33 27C33 26.4477 32.5523 26 32 26H29Z"
      fill="white"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M26 29C27.1046 29 28 28.1046 28 27C28 25.8954 27.1046 25 26 25C24.8954 25 24 25.8954 24 27C24 28.1046 24.8954 29 26 29ZM26 31C28.2091 31 30 29.2091 30 27C30 24.7909 28.2091 23 26 23C23.7909 23 22 24.7909 22 27C22 29.2091 23.7909 31 26 31Z"
      fill="white"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 16C11.4477 16 11 16.4477 11 17C11 17.5523 11.4477 18 12 18H15C15.5523 18 16 17.5523 16 17C16 16.4477 15.5523 16 15 16H12ZM21 16C20.4477 16 20 16.4477 20 17C20 17.5523 20.4477 18 21 18H32C32.5523 18 33 17.5523 33 17C33 16.4477 32.5523 16 32 16H21Z"
      fill="white"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 19C19.1046 19 20 18.1046 20 17C20 15.8954 19.1046 15 18 15C16.8954 15 16 15.8954 16 17C16 18.1046 16.8954 19 18 19ZM18 21C20.2091 21 22 19.2091 22 17C22 14.7909 20.2091 13 18 13C15.7909 13 14 14.7909 14 17C14 19.2091 15.7909 21 18 21Z"
      fill="white"
    />
  </svg>
  )
}

export default ListView;