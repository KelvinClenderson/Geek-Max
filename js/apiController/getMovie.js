require("dotenv").config();

const { default: axios } = require("axios");
const apiKey = process.env.API_KEY;
const auth = process.env.AUTH;

const options = {
  method: "GET",
  url: "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
  headers: {
    accept: "application/json",
    Authorization: auth,
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });

//Estava com erro por causa da instabilidade da API, a requisição é essa mesmo.
