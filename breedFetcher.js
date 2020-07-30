const request = require('request');





const fetchBreedDescription = (breedName, cb) => {
  // url to make request for API
  const urls = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(urls, (error, response, body) => {
    if(error) cb(`Error occured: ${error}`, null)// Print the error if occurred
    
    // get responce as JSON turn into object and print its description
    const data = JSON.parse(body)[0]; // string to object
   
    if (data) cb(null, data.description); 
    else cb(`Did not find ${breedName}`, null);
  });
};




module.exports = {fetchBreedDescription};

