const _apiBase = 'http://www.json-generator.com/api/json/get';

//Ресурсы к задаче не работают, проверить нельзя
// поэтому импортировать в App не буду.

const getData = () =>
  fetch('http://www.json-generator.com/api/json/get/cfQCylRjuG')
    .then((getUserData) =>
      getUserData === true
        ? fetch('http://www.json-generator.com/api/json/get/cfQCylRjuG')
        : null
    )
    .then(console.log);
