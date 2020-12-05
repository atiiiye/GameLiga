// export const userLogin = (user) => {
//   return async (dispatch) => {
//     await dispatch({
//       type: "LOGIN",
//       payload: user,
//     });
//   };
// };
// export const userSignup = (user) => {
//   return async (dispatch) => {
//     await dispatch({
//       type: "SIGNUP",
//       payload: user,
//     });
//   };
// };

export const currentUser = (role) => {
  return {
    type: "ADMIN_USER",
    currentUser: {
      role: 'admin',
    }
  }
}