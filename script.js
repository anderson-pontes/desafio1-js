const students = [
    {
        name: "João",
        noteOne: 7.5,
        noteTwo: 8
    },
    {
        name: "Maria",
        noteOne: 5,
        noteTwo: 6
    },
    {
        name: "Julia",
        noteOne: 9,
        noteTwo: 10
    }
];

function average(noteOne, noteTwo) {
    return ((noteOne + noteTwo)/2).toFixed(2)
}


function checkApproval(students){
    let calcAverage = average(students.noteOne, students.noteTwo);

    if (calcAverage >= 7){
        return `Parabéns! ${students.name}. A sua média é ${average(students.noteOne, students.noteTwo)}. Você foi aprovado(a) no concurso!`
    }else{
        return `Não foi dessa vez ${students.name}. A sua média é ${average(students.noteOne, students.noteTwo)}. Continue tentando!`
    }
}
for (let student of students){
    let message = checkApproval(student)
    alert (message)
}



