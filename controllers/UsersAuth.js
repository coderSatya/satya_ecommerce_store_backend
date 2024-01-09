const getUserSigin = async (req, res) => {
  res.status(200).json({ msg: "Successfully Authenticated" });
};
const getUserSignup = async (req, res) => {
  res.status(200).json({ msg: "User Profile Created" });
};
module.exports = { getUserSigin, getUserSignup };
