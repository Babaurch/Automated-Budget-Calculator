const budgetForm = document.querySelector('form');
function getElement(id) {
    return document.getElementById(id);
}

function getElementValue(id) {
    return getElement(id).value;
}

function getRadioValue(name) {
    var ele = document.getElementsByName(name);
    var val;
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked){
            val = ele[i].value;
        }
    }
    return val;
}

var closeModal = getElement('closeModal');
var formValid = false;

var allCatValues = document.querySelectorAll('.catVal')
var incomeLeft = getElement('incomeLeft')

var mName = getElement('modal_name')
var mAge = getElement('modal_age')
var mGender = getElement('modal_gender')
var mStatus = getElement('modal_status')
var mDependents = getElement('modal_dependents')
var mIncome = getElement('modal_income')

var mCat1 = getElement('modal_cat1');
var mCat1Value = getElement('modal_cat1Value');
var mCat1Percentage = getElement('modal_cat1Percentage');

var mCat2 = getElement('modal_cat2');
var mCat2Value = getElement('modal_cat2Value');
var mCat2Percentage = getElement('modal_cat2Percentage');

var mCat3 = getElement('modal_cat3');
var mCat3Value = getElement('modal_cat3Value');
var mCat3Percentage = getElement('modal_cat3Percentage');

var mCat4 = getElement('modal_cat4');
var mCat4Value = getElement('modal_cat4Value');
var mCat4Percentage = getElement('modal_cat4Percentage');

var mCat5 = getElement('modal_cat5');
var mCat5Value = getElement('modal_cat5Value');
var mCat5Percentage = getElement('modal_cat5Percentage');

var mCat6 = getElement('modal_cat6');
var mCat6Value = getElement('modal_cat6Value');
var mCat6Percentage = getElement('modal_cat6Percentage');

var mCat7 = getElement('modal_cat7');
var mCat7Value = getElement('modal_cat7Value');
var mCat7Percentage = getElement('modal_cat7Percentage');

var mCat8 = getElement('modal_cat8');
var mCat8Value = getElement('modal_cat8Value');
var mCat8Percentage = getElement('modal_cat8Percentage');

var mCat9 = getElement('modal_cat9');
var mCat9Value = getElement('modal_cat9Value');
var mCat9Percentage = getElement('modal_cat9Percentage');

var mCat10 = getElement('modal_cat10');
var mCat10Value = getElement('modal_cat10Value');
var mCat10Percentage = getElement('modal_cat10Percentage');


function revealIncome(val) {
    incomeLeft.innerHTML = parseInt(val).toLocaleString();
}


// On Blurring of the Category input fields, should add or subtract from the income User provided
function calcIncomeBal(e) {
    var totalIncome = getElementValue('income');

    var total = 0;
   for(var i = 0; i < allCatValues.length; i++) {

    // Check if val is there else continue
    if(allCatValues[i].value.length) {
        total += parseInt(allCatValues[i].value);
    }
   }
   // Alert user of their insufficient Balance and stop calculation
   if(total > totalIncome ) {
        window.alert("Hi 🙃, you have insufficient Income For this Budget.")
        // toggle disable button, so they can't submit also
        formValid = false;
        return;
    }
    formValid = true;
    var diff = parseInt(totalIncome - total);
    incomeLeft.innerHTML = diff.toLocaleString();
}


budgetForm.addEventListener('submit', event => {
  event.preventDefault();
  var totalIncome = getElementValue('income');

    // Getting form Values
    var name = getElementValue("name");
    mName.innerText = name;

    var age = getElementValue("age");
    mAge.innerText = age;
    
    var gender = getRadioValue("gender");
    mGender.innerText = gender;
    
    var status = getRadioValue("status");
    mStatus.innerText = status;
    
    var dependents = getElementValue("dependents");
    mDependents.innerText = dependents;
    
    var income = getElementValue("income");
    mIncome.innerText = parseInt(income).toLocaleString();

    var cat1 = getElementValue("cat1");
    var cat1Value = getElementValue("cat1Value");
    mCat1.innerText = cat1;
    mCat1Value.innerText = cat1Value;
    mCat1Percentage.innerText = (cat1Value * 100)/totalIncome;
    
    
    var cat2 = getElementValue("cat2");
    var cat2Value = getElementValue("cat2Value");
    mCat2.innerText = cat2;
    mCat2Value.innerText = cat2Value;
    mCat2Percentage.innerText = (cat1Value * 100)/totalIncome;
    
    var cat3 = getElementValue("cat3");
    var cat3Value = getElementValue("cat3Value");
    mCat3.innerText = cat3;
    mCat3Value.innerText = cat3Value;
    mCat3Percentage.innerText = (cat1Value * 100)/totalIncome;
    
    var cat4 = getElementValue("cat4");
    var cat4Value = getElementValue("cat4Value");
    mCat4.innerText = cat4;
    mCat4Value.innerText = cat4Value;
    mCat4Percentage.innerText = (cat1Value * 100)/totalIncome;
    
    var cat5 = getElementValue("cat5");
    var cat5Value = getElementValue("cat5Value");
    mCat5.innerText = cat5;
    mCat5Value.innerText = cat5Value;
    mCat5Percentage.innerText = (cat1Value * 100)/totalIncome;
    
    var cat6 = getElementValue("cat6");
    var cat6Value = getElementValue("cat6Value");
    mCat6.innerText = cat6;
    mCat6Value.innerText = cat6Value;
    mCat6Percentage.innerText = (cat1Value * 100)/totalIncome;
    
    var cat7 = getElementValue("cat7");
    var cat7Value = getElementValue("cat7Value");
    mCat7.innerText = cat7;
    mCat7Value.innerText = cat7Value;
    mCat7Percentage.innerText = (cat1Value * 100)/totalIncome;
    
    var cat8 = getElementValue("cat8");
    var cat8Value = getElementValue("cat8Value");
    mCat8.innerText = cat8;
    mCat8Value.innerText = cat8Value;
    mCat8Percentage.innerText = (cat1Value * 100)/totalIncome;
    
    var cat9 = getElementValue("cat9");
    var cat9Value = getElementValue("cat9Value");
    mCat9.innerText = cat9;
    mCat9Value.innerText = cat9Value;
    mCat9Percentage.innerText = (cat1Value * 100)/totalIncome;
    
    var cat10 = getElementValue("cat10");
    var cat10Value = getElementValue("cat10Value");
    mCat10.innerText = cat10;
    mCat10Value.innerText = cat10Value;
    mCat10Percentage.innerText = (cat1Value * 100)/totalIncome;

    // Setting form Values

    

    // pop up the modal, that'll show the details of the user
    // Income, all categories and their respective categories

    if(formValid){
        budgetForm.reset();
        toggleModal();
    }

});


function toggleModal () {
    var modal = document.getElementById('modal');
    modal.classList.toggle('open')
}

closeModal.addEventListener('click', () => toggleModal());