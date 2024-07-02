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
                

                if(powerResult1 > powerResult2 && character2.PONTOS > 0 ){
                    console.log(`${character1.NOME} Venceu o confronto! 
                        ${character1.NOME} Perdeu 1 Ponto 🐢`)
                    character2.PONTOS--
                }
                // character2.PONTOS -= 
                // powerResult1 > powerResult2 && character2.PONTOS > 0 ? 1:0
                // if(powerResult1 > powerResult2){
                //     if(character2.PONTOS > 0){
                //     character2.PONTOS--;
                //     }
                // }

                if(powerResult2 > powerResult1 && character1.PONTOS > 0){
                    console.log(`${character2.NOME} Venceu o confronto! 
                        ${character1.NOME} Perdeu 1 Ponto 🐢`)
                    character1.PONTOS--
                }
                // character1.PONTOS -= 
                // powerResult2 > powerResult1 && character1.PONTOS > 0 ? 1:0
                // if(powerResult2 > powerResult1){
                //     if(character1.PONTOS > 0){
                //     character1.PONTOS--;
                //     }
                // }

                console.log
                (powerResult1 === powerResult2  
                  ? "Confronto empatado! Nenhum Ponto Perdido"
                  : ""
                )
                // if(powerResult1 === powerResult2){
                //  console.log("Confronto empatado! Nenhum Ponto Perdido")
                // }
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

async function declareWinner(character1,character2){
    console.log("Resultado Final: ")
    console.log(`${character1.NOME}: ${character1.PONTOS} Ponto(s)`)
    console.log(`${character2.NOME}: ${character2.PONTOS} Ponto(s)`)

    if(character1.PONTOS > character2.PONTOS)
        console.log(`\n${character1.NOME} venceu a Corrida! Parabéns!🏆`)
     else if(character2.PONTOS > character1.PONTOS)
        console.log(`\n${character2.NOME} venceu a Corrida! Parabéns!🏆`)
     else 
        console.log("A corrida terminou em empate")
}

(async function main(){
    console.log(
       `🏁🚨 Corrida entre ${player1.NOME} e ${player2.NOME} Começando... \n`
    );

  await playRaceEngine(player1,player2)
  await declareWinner(player1,player2)
})()

