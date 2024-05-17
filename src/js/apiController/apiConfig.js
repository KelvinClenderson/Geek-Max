const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYTRjMTBmMjNkNTA4NWZjNmY3N2VlY2VjODZhOGE0YiIsInN1YiI6IjY1MzJlNjY3ZDEzMzI0MDBlMjIxZjc0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LjNAWT9I3B3uR2FrEoPBN7NQSyiUEP0h0x6TXmdKkOY";

const url = "https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=1";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${token}`,
  },
};

module.exports = {
  token,
  url,
  options,
};
