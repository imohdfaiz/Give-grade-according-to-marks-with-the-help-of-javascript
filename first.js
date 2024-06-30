let score = prompt('Enter your Score');

if(score >= 90 && score <=100){
    grade='A';
}
else if(score >=70 && score <= 89){
    grade='B';
}
else if(score >=60 && score <= 69){
    grade='C';
}
else if(score >=50 && score <= 59){
    grade='D';
}
else {
    grade='F';
    }

    console.log('acccording to your score , your grade is :', grade);