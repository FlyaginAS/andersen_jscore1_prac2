//в задаче можно использовать  метод Promise.all,
//  но тогда при возникновении одной ошибки
//  мы потеряем остальные результаты

const fakeFetch = (url) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(`${url}-data got`), 2000);
  });

const getAllParallel = (urls) =>
  Promise.allSettled(urls.map((url) => fakeFetch(url))).then((results) =>
    console.log(
      results.map((result) =>
        result.status === 'fulfilled' ? result.value : result.reason
      )
    )
  );

const getAllСonsistently = (urls) => {
  let arr = [];

  urls
    .reduce(
      (acc, url) =>
        acc.then((res) => {
          arr.push(res);
          return fakeFetch(url);
        }),
      Promise.resolve()
    )
    .then((res) => console.log([...arr.slice(1), res]));
};

//ресурсы не работают, полэтому использую фейковый фетч

export { getAllParallel, getAllСonsistently };
