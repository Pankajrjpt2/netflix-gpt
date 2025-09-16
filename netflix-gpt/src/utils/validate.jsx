const checkValidate = (email, Password) => {
  const emailCheck = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const passwordCheck =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      Password
    );
  if (!emailCheck) {
    return "Email format is Invalid!";
  }
  if (!passwordCheck) {
    return "password format is Invalid!";
  }
  return null;
};

export default checkValidate;
