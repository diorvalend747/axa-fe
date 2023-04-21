export const saveUser = (user) => {
  const dataUser = {
    name: user?.name,
    userName: user?.username,
    userId: user?.id,
  };
  const serializedUser = JSON.stringify(dataUser);
  localStorage.setItem("user", serializedUser);
};

export const dataUser = localStorage.getItem("user");
