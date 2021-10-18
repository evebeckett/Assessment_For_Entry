document.getElementById('gradeEntry')
    // .addEventListener('keyup', submitForm)
    .addEventListener('keydown', submitForm)

    let array= [];

    function submitForm (event) {
        
        console.log(event.type)
        if (event.keyCode === 13)
        {
            event.preventDefault();    
            let firstName = document.getElementById("fname").value;
            let lastName = document.getElementById("lname").value;
            let grade = document.getElementById("grade").value;
            let object = {
                firstName : firstName,
                lastName: lastName,
                grade: grade
            }
            array.push(object)     
        }
        render(array);
    }

function render(students){
    students.forEach(student => createForm(student));
    renderInHTML(students);
      
       }

function createForm(student) {
    let {firstName, lastName, grade} = student;
    const content = `
    <tr>
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${grade}</td>
    </tr>
    `
    return content;
}

const renderInHTML = (students) => {
    // Get the parent element
    const main = document.querySelector("tableBody");
  
    // Empty the parent element
    tableBody.innerHTML = "";
  
    // Get the parks HTML
    const content = students.map(createform(student)).join("");
  
    // Set the `innerHTML` of parent element
    main.innerHTML = content;

    