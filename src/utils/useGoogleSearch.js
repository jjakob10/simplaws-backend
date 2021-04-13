const fetch = require("node-fetch");

const CONTEXT_KEY = "3b7d248ed38f2a460";

module.exports = useGoogleSearch = async (term) => {
  const res = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=AIzaSyAsxbk97IUSpBNQ6K5KhCxgq187amii0X0&cx=${CONTEXT_KEY}&q=${term}`
  )
    .then((res) => res.json())
    .then((json) => {
      return json;
    });

  return res;
};
