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


// On Blurring of the Category input fields, should add or subtract from the income User provided


budgetForm.addEventListener('submit', event => {
  event.preventDefault();

    var name = getElementValue("name");
    var age = getElementValue("age");
    var gender = getRadioValue("gender");
    var status = getRadioValue("status");
    var dependents = getElementValue("dependents");
    var income = getElementValue("income");
    var cat1 = getElementValue("cat1");
    var cat1Value = getElementValue("cat1Value");
    var cat2 = getElementValue("cat2");
    var cat2Value = getElementValue("cat2Value");
    var cat3 = getElementValue("cat3");
    var cat3Value = getElementValue("cat3Value");
    var cat4 = getElementValue("cat4");
    var cat4Value = getElementValue("cat4Value");
    var cat5 = getElementValue("cat5");
    var cat5Value = getElementValue("cat5Value");
    var cat6 = getElementValue("cat6");
    var cat6Value = getElementValue("cat6Value");
    var cat7 = getElementValue("cat7");
    var cat7Value = getElementValue("cat7Value");
    var cat8 = getElementValue("cat8");
    var cat8Value = getElementValue("cat8Value");
    var cat9 = getElementValue("cat9");
    var cat9Value = getElementValue("cat9Value");
    var cat10 = getElementValue("cat10");
    var cat10Value = getElementValue("cat10Value");
    

    // pop up the modal, that'll show the details of the user
    // Income, all categories and their respective categories

    budgetForm.clear();
    toggleModal();
});


function toggleModal () {
    var modal = document.getElementById('modal');
    modal.classList.toggle('open')
}

closeModal.addEventListener('click', () => toggleModal());