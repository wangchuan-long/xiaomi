// 判断是否登录
export const isLogined = () => {
  if (localStorage.getItem("token")) {
    return true;
  } else {
    return false;
  }
};

// 设置token
export const setToken = (token) => {
  localStorage.setItem("token", token);
};

// 查找token
export const getToken = () => {
  return localStorage.getItem("token");
};

// 删除token
export const removeToken = () => {
  localStorage.removeItem("token");
};
