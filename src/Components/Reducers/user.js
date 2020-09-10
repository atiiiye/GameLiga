function userReducer(state = {}, action) {
  // console.log(state, action);
  switch (action.type) {
    case "LOGIN":
      return { ...action.payload };
    case "SIGNUP":
      return { ...action.payload };
    case "CLEAR_USER":
      return { ...action.payload };
    default:
      return state;
  }
}

export default userReducer;
