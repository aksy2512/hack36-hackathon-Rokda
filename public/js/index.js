editIcon = "cursor-pointer	fa-solid fa-pen-to-square";
saveIcon = "cursor-pointer	fa-solid fa-check";

var editMode = false;

var editList = document.querySelectorAll(".editContent");
var tillNow = document.querySelectorAll(".till-now");


var a = [5000, 5000, 5000];


const check = ()=>{
    for (let index = 0; index < editList.length; index++) {
        if(Number(tillNow[index].innerText)>=Number(editList[index].innerText)){
            tillNow[index].style.color="red";
            tillNow[index].title="OVER SPENDED";
        }
        else{
            tillNow[index].style.color="green";
            tillNow[index].title="All Fine";
        }
    }
}

check();



// EMI Calculator

function Calculate() {

	// Extracting value in the amount
	// section in the variable
	const amount = document.querySelector("#amount").value;

	// Extracting value in the interest
	// rate section in the variable
	const rate = document.querySelector("#rate").value/1200;

	// Extracting value in the months
	// section in the variable
	const months = document.querySelector("#months").value;

	// Calculating interest per month
	const interest = (amount * (rate * 0.01)) / months;
	
	// Calculating total payment
	const total = ((amount / months) + interest).toFixed(2);

    const numerator = amount * rate * (1 + rate) ** months;
    const denominator = (1 + rate) ** months - 1;
    const emi = (numerator / denominator).toFixed(2);

    // return emi;

	document.querySelector("#total")
		.innerHTML = "EMI : (₹)" + emi;
}



/Toggle dropdown list/
function toggleDD(myDropMenu) {
    document.getElementById(myDropMenu).classList.toggle("invisible");
}
/Filter dropdown options/
function filterDD(myDropMenu, myDropMenuSearch) {
    var input, filter, ul, li, a, i;
    input = document.getElementById(myDropMenuSearch);
    filter = input.value.toUpperCase();
    div = document.getElementById(myDropMenu);
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.drop-button') && !event.target.matches('.drop-search')) {
        var dropdowns = document.getElementsByClassName("dropdownlist");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (!openDropdown.classList.contains('invisible')) {
                openDropdown.classList.add('invisible');
            }
        }
    }
}

const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal"
  ];
  
  const stateInput = document.getElementById("state");
  const stateList = document.getElementById("states-list");
  
  stateInput.addEventListener("input", () => {
    const inputValue = stateInput.value;
    const filteredStates = states.filter(state =>
      state.toLowerCase().startsWith(inputValue.toLowerCase())
    );
  
    stateList.innerHTML = "";
  
    filteredStates.forEach(state => {
      const option = document.createElement("option");
      option.value = state;
      stateList.appendChild(option);
    });
  });
  