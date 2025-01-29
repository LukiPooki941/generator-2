const subject = ["Luke", "Jude", "Rapheal", "Max", "Lily"];
const verb = ["fights", "loves", "destroys", "builds", "mutates"];
const object = ["Bosco", "Belle", "legos", "watches", "lump"];

function randomPick(){
    const numberGenerator = Math.floor(Math.random() *5);
    return numberGenerator;
};

function message(){
    const main = subject[randomPick()];
    const action = verb[randomPick()];
    const poorObject = object[randomPick()];
    return `${main} ${action} ${poorObject}.`;
}

console.log(message());