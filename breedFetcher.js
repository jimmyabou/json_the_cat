const request = require('request');
//const breedName = process.argv[2];
const fetchBreedDescription = function(breedName,callBack) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
    //console.log("error in the domain :", error);
      callBack(error,null);
    } else {
      const data = JSON.parse(body);
      if (data.length === 0) {
        console.log("the breed that you entered does not exist");
      } else {
      // console.log(body);
      // console.log(typeof body);
        callBack(null,data);
      // console.log(data);
      // console.log(typeof data);
      }

    }
  });
};
module.exports = { fetchBreedDescription };


// console.log(request);
// console.log(typeof body)
//node breedFetcher.js Chartreux
//console.log(array);
