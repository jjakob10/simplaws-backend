const useGoogleSearch = require("../utils/useGoogleSearch");
// const AlgorithmiaKey = require("../../credentials/credentials.json")
//   .AlgorithmiaKey;
// const Algorithmia = require("algorithmia");

//Hey Joy! ignore the mess. I was testing how to use algorithmia API to web scraping.
//I comented these parts. The google part is functional

module.exports = {
  async index(request, response) {
    const { term } = request.body;

    const content = {};

    content.googleResponse = await useGoogleSearch(term);

    //const fetchResults = await fetchWebsites(content);
    // const Resp = content.googleResponse;
    // const Resp = fetchResults;

    const response = content.googleResponse;
    const values = { response };
    return response.json(values);
  },
};

// async function fetchWebsites(content) {
//   //content.googleResponse.items.forEach((result) => {

//   var input = "http://www.planalto.gov.br/ccivil_03/leis/l8213cons.htm";

//   const authentiticatedAlgorithm = Algorithmia.client(
//     "simpmfAb6tn867TpImjVK17t2i31"
//   ).algo("util/Html2Text/0.1.6?timeout=300"); // timeout is optional
//   const returnedContent = await authentiticatedAlgorithm.pipe(input);
//   const result = returnedContent.get();
//   // });

//   return result;
// }