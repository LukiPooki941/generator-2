const subject = ["Luke", "Jude", "Rapheal", "Max",];
const verb = ["fights", "loves", "destroys", "builds", "mutates"];
const object = ["Bosco", "Belle", "legos"];

function randomPick(array){
    const numberGenerator = Math.floor(Math.random() * array.length);
    return numberGenerator;
};
function generateMessages(){
    const newSubject = subject[randomPick(subject)]
    const newVerb = verb[randomPick(verb)]
    const newObject = object[randomPick(object)]
    return `${newSubject} ${newVerb} ${newObject}`;
}

console.log(generateMessages());



