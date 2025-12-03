export const regexConditions = [
  {
    namePattern: /^[A-Z][a-z]{5,14}$/,
    PassPattren: /^(?=.{5,8}$)(?=.[A-Z])(?=.\d)(?=.*[\w]).+$/,
    emailPattren: /^[A-Za-z0-9_+%]+@[A-Za-z0-9-+]+\.[A-Za-z]{2,}/,
    mobilePattern: /^[6-9][0-9]{9}$/,
  },
];