
export const play = (playerChoice) => {
    const computer = generateResponse();

    console.log(playerChoice, computer);

    if(evaluateWinner(playerChoice, computer)) {
        return 'WIN';
    } else {
        return 'LOSE';
    }
}

const evaluateWinner = (playerChoice, computer) => {
    return true;
}

const generateResponse = () => {
    let computer = Math.floor(Math.random() * 3 + 1);

    switch (computer) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    };
}