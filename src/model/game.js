
export const play = (playerChoice) => {
    const computer = generateResponse();

    if(playerChoice !== computer) {
        if(evaluateWinner(playerChoice, computer)) {
            return 'WIN';
        } else {
            return 'LOSE';
        }
    } else {
        return 'DRAW';
    }
}

const evaluateWinner = (playerChoice, computer) => {
    if(playerChoice === 'rock') {
        if(computer === 'paper') {
            return false;
        } else {
            return true;
        }
    } else if(playerChoice === 'paper') {
        if(computer === 'scissors') {
            return false;
        } else {
            return true;
        }
    } else if(playerChoice === 'scissors') {
        if(computer === 'rock') {
            return false;
        } else {
            return true;
        }
    }
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