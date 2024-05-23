import config from "../config/api_popular.js";

const popularApi = {};

// Get Movies List
popularApi.movieListApi = (url, options) => {
  const result = fetch(url, options)
    .then((res) => res.json())
    .then((data) => {
      const mappedResults = data.results.map((result) => {
        // faça o que você precisa com cada resultado aqui
        return result;
      });

      const mappedObjects = mappedResults.map((objectList) => {
        console.log(objectList);
        // Retorne ou faça o que precisar com cada objeto mapeado aqui
        return objectList;
      });

      // Retorne os objetos mapeados para encadeamento de promessas posterior, se necessário
      return mappedObjects;
    })
    .catch((error) => {
      // Trate qualquer erro que possa ocorrer durante a solicitação
      console.error("Erro:", error);
    });

  return result;
};

movieListApi(config.url, config.options);

export default PopularApi;
