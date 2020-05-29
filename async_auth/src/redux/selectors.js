const getCurrentUser = (state) => state.user; // user object

const getCurrentUserNickName = (state) => getCurrentUser(state).nickName; // only user name

const getCurrentUserInfo = (state) => getCurrentUser(state).info; // only user user info +

const chooseBirthdayBoyWishes = (state) =>
  state.planning.birthday.chooseBirthdayBoy.wishes; // birtdhay boy wishes all

export const selectors = {
  getCurrentUser,
  getCurrentUserNickName,
  getCurrentUserInfo,
  chooseBirthdayBoyWishes,
};
