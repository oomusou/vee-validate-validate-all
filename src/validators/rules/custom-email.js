const getMessage = field => `${field} 格式不正確`;

const validate = value => {
  const regex = /^\w+\.*\w+@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
  return regex.test(value);
};

export default {
  getMessage,
  validate,
};
