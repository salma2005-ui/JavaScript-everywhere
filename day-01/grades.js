const students = [
    { name: "Salma", score: 95 },
    { name: "Ahmed", score: 82 },
    { name: "Mona", score: 68 },
    { name: "Youssef", score: 91 },
    { name: "Nour", score: 75 }
];

let excellent = 0;
let good = 0;
let needsWork = 0;

for (const student of students) {
    if (student.score >= 90) {
        console.log(`${student.name}: ${student.score} -> Excellent`);
        excellent++;
    } else if (student.score >= 70) {
        console.log(`${student.name}: ${student.score} -> Good`);
        good++;
    } else {
        console.log(`${student.name}: ${student.score} -> Needs work`);
        needsWork++;
    }
}

console.log(`${excellent} Excellent, ${good} Good, ${needsWork} Needs work`);