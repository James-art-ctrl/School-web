
/* FAKE DATABASE */
const students = {
  "1001": {name:"John", result:"85%", bill:"₦50,000"},
  "1002": {name:"Mary", result:"92%", bill:"₦45,000"}
};

/* MODAL CONTROL */
function openModal(type){
  document.getElementById("modal").style.display = "block";

  if(type === 'result'){
    document.getElementById("modalBody").innerHTML = `
      <h3>Check Result</h3>
      <input id="id" placeholder="Student ID"><br><br>
      <button onclick="getResult()">Submit</button>
      <p id="output"></p>
    `;
  }

  if(type === 'bill'){
    document.getElementById("modalBody").innerHTML = `
      <h3>Check Bill</h3>
      <input id="id" placeholder="Student ID"><br><br>
      <button onclick="getBill()">Submit</button>
      <p id="output"></p>
    `;
  }

  if(type === 'register'){
    document.getElementById("modalBody").innerHTML = `
      <h3>Register</h3>
      <input placeholder="Name"><br><br>
      <input placeholder="Class"><br><br>
      <button onclick="alert('Registered!')">Submit</button>
    `;
  }
}

function closeModal(){
  document.getElementById("modal").style.display = "none";
}

/* FUNCTIONS */
function getResult(){
  let id = document.getElementById("id").value;
  let s = students[id];
  document.getElementById("output").innerText = s ? s.name+" Score: "+s.result : "Not found";
}

function getBill(){
  let id = document.getElementById("id").value;
  let s = students[id];
  document.getElementById("output").innerText = s ? "Bill: "+s.bill : "Not found";
}

function showBooks(){
  alert("Maths, English, Biology, Chemistry");
}

function startCBT(){
  alert("CBT Started (Demo Mode)");
}