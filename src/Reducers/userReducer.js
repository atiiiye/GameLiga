//! این کامپوننت از اجرای برنامه خارج شده است

function userReducer(state = {}, action) {
  switch (action.type) {
    case "LOGIN":
      return { ...action.payload };
    case "SIGNUP":
      return { ...action.payload };
    default:
      return state;
  }
}

export default userReducer;
