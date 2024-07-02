const player1 = {
    NOME: "Mario",
    VELOCIDADE: 4,
    MANOBRABILIDADE: 3,
    PODER: 3,
    PONTOS: 0,
}

const player2 = {
    NOME: "Luigi",
    VELOCIDADE: 3,
    MANOBRABILIDADE: 4,
    PODER: 4,
    PONTOS: 0,
}

const player3 = {
    NOME: "Peach",
    VELOCIDADE: 3,
    MANOBRABILIDADE: 4,
    PODER: 2,
    PONTOS: 0,
}

const player4 = {
    NOME: "Yoshi",
    VELOCIDADE: 2,
    MANOBRABILIDADE: 4,
    PODER: 3,
    PONTOS: 0,
}

const player5 = {
    NOME: "Bowser",
    VELOCIDADE: 5,
    MANOBRABILIDADE: 2,
    PODER: 5,
    PONTOS: 0,
}

const player6 = {
    NOME: "Donkey Kong",
    VELOCIDADE: 2,
    MANOBRABILIDADE: 2,
    PODER: 5,
    PONTOS: 0,
}

async function rollDice(){
  return Math.floor(Math.random() * 6) + 1
}

async function getRandomBlock(){
    let random = Math.random()
    let result
    
    switch (true) {
        case random < 0.33:
            result = "RETA"
            break;
        case random < 0.66:
            result = "CURVA"
            break;
        default:
            result = "CONFRONTO"
    }

    return result
}
async function logRollResult(characterName, block,diceResult,attribute){
    console.log(`${characterName} 🎲 rolou um dado de ${block}
        ${diceResult} + ${attribute} = ${
            diceResult + 
            attribute}`)
}

async function playRaceEngine(character1,character2){
      for(let round = 1; round <=5; round++){
        console.log(`🏁 Rodada ${round}`);

        // Sortear Bloco

        let block = await getRandomBlock()
        console.log(`Bloco: ${block}`)

        //rolar os dados
        let diceResult1 = await rollDice()
        let diceResult2 = await rollDice()

        let = totalTestSkill1 = 0;
        let = totalTestSkill2 = 0;

        if (block === "RETA"){
            totalTestSkill1 = diceResult1 + character1.VELOCIDADE
            totalTestSkill1 = diceResult2 + character2.VELOCIDADE

                await logRollResult(
                    character1.NOME, 
                    "VELOCIDADE",
                    diceResult1,
                    character1.VELOCIDADE);

                await logRollResult(
                    character2.NOME, 
                    "VELOCIDADE",
                    diceResult1,
                    character2.VELOCIDADE
                    )
                    
        }

        if (block === "CURVA"){
            totalTestSkill1 = diceResult1 + character1.MANOBRABILIDADE
            totalTestSkill1 = diceResult2 + character2.MANOBRABILIDADE

            await logRollResult(
                character1.NOME, 
                "MANOBRABILIDADE",
                diceResult1,
                character1.MANOBRABILIDADE);

            await logRollResult(
                character2.NOME, 
                "MANOBRABILIDADE",
                diceResult1,
                character2.MANOBRABILIDADE
                )
        }

        if (block === "CONFRONTO"){
            
            let powerResult1 = diceResult1 + character1.PODER
            let powerResult2 = diceResult2 + character2.PODER
            console.log(`${character1.NOME} confrontou com ${character2.NOME}!🥊`);

            await logRollResult(
                character1.NOME, 
                "PODER",
                diceResult1,
                character1.PODER);

            await logRollResult(
                character2.NOME, 
                "PODER",
                diceResult1,
                character2.PODER
                );
        }
        if(totalTestSkill1 > totalTestSkill2){
            console.log(`${character1.NOME} Marcou um ponto`);
            character1.PONTOS++
        }else if (totalTestSkill2 > totalTestSkill1){
            character2.PONTOS++
        }

        console.log("_____________________________")
      }

}

(async function main(){
    console.log(
       `🏁🚨 Corrida entre ${player1.NOME} e ${player2.NOME} Começando... \n`
    );

  await playRaceEngine(player1,player2)
})()

