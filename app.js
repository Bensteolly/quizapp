//
const quizQuestions = [{
        ques: "What is the highest mountain in the world?",
        opt: ["Mount Kilimanjaro","Mount Everest","Mount McKinley","Mount Fiji" ],
        ans: "Mount Everest",
    },

    {

        ques: "Which is the longest river in the world?",
        opt: ["Nile", "Amazon", "Yangtze", "Mississippi"],
        ans: "Nile",
    },

    {
        ques: "In which country can you find the ancient city of Petra, famous for its rock-cut architecture?",
        opt: ["Egypt","Greece", "Jordan", "Turkey"],
        ans:"Jordan",
    },

    {
        ques: "Which desert is the largest in the world?",
        opt:[ "Sahara Desert","Gobi Desert","Atacama Desert","Kalahari Desert"],
        ans:"Sahara Desert",
    },

    {
        ques: "What is the capital of Australia?",
        opt: ["Sydney","Melbourne","Canberra","Brisbane"],
        ans:"Canberra",
    },

    { 
        ques: "The Great Barrier Reef is located off the coast of which country?",
        opt: ["USA","Brazil","Australia","Japan"],
        ans:"Australia",
    },

    { 
        ques: "Which African country is known as the 'Land of a Thousand Hills'?",
        opt: ["Kenya","Rwanda","South Africa", "Nigeria" ],
        ans:"Rwanda",
    },

    {
        ques: "What is the southernmost continent on Earth?",
        opt: ["North America","Asia","Europe", "Antarctica"],
        ans:"Antarctica",
    },

    {
        ques: "Which of the following European cities is famous for its canals and gondolas?",
        opt: ["Paris","Venice","Amsterdam","Prague"],
        ans:"Venice",
    },

    {
        ques: "The Inca ruins of Machu Picchu are located in which South American country?",
        opt: ["Brazil", "Argentina","Peru", "Colombia"],
        ans:"Peru",
    }
]

let wrong = 0;
let result = 0;
let correctanwers= 100;

let quizInfo = document.getElementById("quiz_info");

let optionInfo = document.getElementById("options_info");

function startquiz(){
    let quizarray = quizQuestions.map((qtn, index) => {
      return    `<div class="card justify-content-center py-5 mb-3" style="width: 35rem;">
                    <div class="card-body d-flex flex-row mb-3">
                        <p class="p-2">${index+1}</p>
                        <h5 class="p-2 card-title">${qtn.ques}</h5>                                               
                     </div>
                    <div class="ps-4">
                        <select class=" col-8" id="select-item">
                            <option value="" select-disabled> Select your answer</option>
                            ${qtn.opt.map((option)=> {
                                return `<option class=" " name="options" value="${option}"> ${option}</option>`;
                            })} 
                        </select>
                    </div>               
                    <div class= "col-8 py-3 ps-4">
                        <p class="selected"> Selected answer: </p>
                        <p class="correct "> Correct answer:</p>
                        <p class="status">Status:</p>
                    </div>
                </div>` ;
    
    });

    quizInfo.innerHTML = quizarray.join(" ");
   
    let selectOptions = document.querySelectorAll("select");
    selectOptions.forEach((select, index) => {
        select.addEventListener ('change',(event) => {
            let selectedOption = event.target.value;
            let picked = document.querySelectorAll(".selected")[index];
            picked.innerHTML = `Selected answer: ${selectedOption}`;
            let correct = document.querySelectorAll(".correct")[index];
            correct.innerHTML = `Correct answer: ${quizQuestions[index].ans}`;

            if (quizQuestions[index].ans === selectedOption){
                document.querySelectorAll(".status")[
                    index
                ].innerHTML = `Status: Correct`;
                result += correctanwers;
                document.querySelector(".result").innerHTML = `Your Result is: ${result}/1000`;
            } else{
                document.querySelectorAll(".status")[index].innerHTML = `Status: Wrong`;
                result -= wrong;
                document.querySelector(".result").innerHTML =`Your Result is: ${result}/1000`;
            }
        });
        
    });
 
}


    

startquiz();




