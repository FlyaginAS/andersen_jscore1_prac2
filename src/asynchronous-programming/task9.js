const asyncBar = async () => 'Some string';

const zoo = () => {
  asyncBar().then(console.log);
};

export default zoo;
