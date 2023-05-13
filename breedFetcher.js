const request = require('request');
let array = process.argv.slice(2);
request(`https://api.thecatapi.com/v1/breeds/search?q=${array}`, (error, response, body) => {
  if (error) {
    console.log("error in the domain :", error);
  } else {
    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log("the breed that you entered does not exist");
    } else {
      // console.log(body);
      // console.log(typeof body);
      console.log(data);
      console.log(typeof data);
    }

  }
});


// console.log(request);
// console.log(typeof body)
//node breedFetcher.js Chartreux
//console.log(array);
