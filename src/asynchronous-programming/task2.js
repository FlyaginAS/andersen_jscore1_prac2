const parseJSON = (jsonStr, successCb, failureCb) => {
  try {
    successCb(JSON.parse(jsonStr));
  } catch (err) {
    failureCb(err);
  }
};

const successCb = (result) => (
  console.log('Success parse!'), console.log(result)
);

const failureCb = (error) => (console.log('Failure parse'), console.log(error));

export { parseJSON, successCb, failureCb };
