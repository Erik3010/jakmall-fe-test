export const isValidEmail = (email) => {
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
};

export const isValidPhoneNumber = (phoneNumber) => {
  const regex = /^[0-9\-\+\(\)]{6,20}$/;
  return regex.test(phoneNumber);
};

export const isValidAddress = (address) => {
  return address !== "" && address.length <= 120;
};

export const isNotEmpty = (value) => {
  return ![null, undefined, ""].includes(value.trim());
};

export const formatNumber = (number) =>
  new Intl.NumberFormat("en-US").format(number);
