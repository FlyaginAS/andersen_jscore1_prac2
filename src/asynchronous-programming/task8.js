const getUsers = (url) => fetch(url);

const goo = async (url) => {
  try {
    const response = await getUsers(url);
    const users = await response.json();
    console.log(users[0]);
  } catch (err) {
    console.log('Error', err);
  }
};

export default goo;
