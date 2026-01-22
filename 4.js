function* studentMarksIterator(marks) {
    for (let student in marks) {
        if (marks.hasOwnProperty(student)) {
            yield { student: student, mark: marks[student] };
        }
    }
}


const studentMarks = {
    Alice: 85,
    Bob: 92,
    Charlie: 78,
    Diana: 96
};

const iterator = studentMarksIterator(studentMarks);


let num = 4
for (let i = 0; i < num; i++) {
    console.log(iterator.next().value);
}