const foo = (x, cb) => (x > 10 ? (console.log('x > 10'), cb()) : console.log('x <= 10'));

const createCb = (str) => () => console.log(str);
export { foo, createCb };
