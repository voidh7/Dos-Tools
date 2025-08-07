/*
 * Dos tools by Void
 * ferramenta feita para fins educacionais, não me responsabilizo pelo seu uso
 */

const axios = require("axios");
const figlet = require("figlet");
const readline = require('readline');

const  httpfload  = require("./src/httpfoad");            const  pingfload  = require("./src/pingfload");


function perguntar(pergunta) {                               const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise(resolve => {
    rl.question(pergunta, resposta => {
      rl.close();
      resolve(resposta);
    });
  });
}

(async () => {

  figlet("Dos tools", async (err, data) => {
    if (err) {
      console.log("Erro ao criar banner:", err);
      return;
    }

    console.log(data);
    console.log("\n Tools \n");
    console.log("1 - ping flood");
    console.log("2 - http flood");
    const toolNumber = await perguntar("> ");

    switch (toolNumber) {
      case "1":
        pingfload();
        break;

      case "2":
        httpfload();
        break;

      default:
        console.log("Opção inválida.");
    }
  });
})();