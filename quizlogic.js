


/*function checkAnswers() {
    const answers = {
        q1: "b", q2: "a"
    }
};
*/

function gradeQuiz() {


    // grading scoring logic
    let grade = 0
    let passFail = ""
    if (document.getElementById("correctq1").checked)
        {grade = (grade + 1)};
    if (document.getElementById("correctq2").checked)
        {grade = (grade + 1)};
    if (document.getElementById("correctq3_1").checked && document.getElementById("correctq3_2").checked)
        {grade = (grade + 1)};
    if (document.getElementById("correctq4").value == "CERN")
        {grade = (grade + 1)};
    if (document.getElementById("correctq5").checked)
        {grade = (grade + 1)};




    //pass or fail logic
    if (grade < 3)
        {passFail = "You Failed!"}
    else
        {passFail = "You Passed!"}
    
    
    //removes quiz from DOM
    const quizForm = document.querySelector("#quizf")
    quizForm.remove(); 
    
    //adds new div tag displaying grade
    const quizTitle = document.querySelector("#quiztitle")
    const gradeDiv = document.createElement("div")
    gradeDiv.innerText = passFail + " | Your Grade is: " + grade + " / 5";
    gradeDiv.style="padding-bottom: 3%";
    gradeDiv.className="question";
    quizTitle.append(gradeDiv)
    
    //create link to reset site
    const linkForReset = document.createElement("a")
    linkForReset.href = "quiz.html";
    linkForReset.id = "linkforreset";
    quizTitle.append(linkForReset)
    
    //creates button within the link for a consistant look
    const resetButton = document.createElement("button")
    resetButton.innerText = "Try Again"
    resetButton.className = "btn-generic";
    linkForReset.appendChild(resetButton)

};






