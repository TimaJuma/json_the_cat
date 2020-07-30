const request = require('request');

const breed = process.argv.slice(2)
const urls = 'https://api.thecatapi.com/v1/breeds/search?q=';


request(`${urls}${breed[0]}`, (error, response, body) => {
  console.log('error:', error); // Print the error if occurred
  if (breed.length === 0) console.log('Return Empty:', ); // Print the response status code if a response was received


  // get responce as JSOn turn into object and print it
  const data = JSON.parse(body); // string to object
  console.log(data);
});
