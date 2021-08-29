const getPromise1 = () => Promise.resolve(2);
const getPromise2 = () => Promise.resolve(3);
const getPromise3 = () => Promise.resolve(7);

const fooo = async () => {
  let value1;
  let value2;
  let value3;

  value1 = await getPromise1();

  value2 = await getPromise2();

  value3 = await getPromise3();

  console.log(value1 * (value2 + value3));
};

export default fooo;
