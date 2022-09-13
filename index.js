const enter = document.querySelector('#enter');
const btn = document.querySelector('#btn');
const container = document.querySelector('#container');

btn.addEventListener('click', setGrade);

function setGrade () {
    let grade = enter.value;
    let p = document.createElement('p');
    p.setAttribute('id', 'p');
    container.append(p);

    if (grade == "") alert("Enter grade"); 
    else if (grade >= 0 && grade <= 100) {
        if (grade < 50) p.textContent = "FAIL";
         else if (grade >=50 && grade <=64) 
            p.textContent = "PASS"; 
            else if (grade >=65 && grade <= 74) 
            p.textContent = "CREDIT"; 
            else if (grade >= 75 && grade <= 84) 
            p.textContent = "DISTINCTION"; else if (grade >= 85 && grade <= 100) 
            p.textContent = "HIGH DISTINCTION";
        
    } else alert("Invalid input, Grade must be between 0 - 100");
    enter.value = "";
}