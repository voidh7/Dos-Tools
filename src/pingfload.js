const {exec} = require("child_process")
const readline = require("readline")
const {execSync} = require("child_process")
let ip


function perguntar(pergunta) {
const rl = readline.createInterface({
        input:process.stdin,
        output:process.stdout
});
return new Promise(resolve =>{
 rl.question(pergunta,resposta =>{
rl.close()
resolve(resposta)

})
})
}


async function pingfload(){
ip = await perguntar("qual o ip do alvo?:")


const cmd = `ping ${ip}`
execSync(cmd,{stdio:"inherit"})

}

module.exports = pingfload;