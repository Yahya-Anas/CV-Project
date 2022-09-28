// data

eductaionData = [];

// Personal Details Variable

const personalDetails = document.getElementById("personal-details");
const spanIcon = document.getElementById("span-icon");
const displayFirstName = document.getElementById("display-first-name-value")
const displayLastName = document.getElementById("display-last-name-value")
const eMail = document.getElementById("display-email-value")
const emailIcon = document.getElementById("simple-line-icons-email")
const phoneNumber = document.getElementById("display-phone-value")
const phoneIcon = document.getElementById("simple-line-icons-phone")
const locationIcon = document.getElementById("simple-line-icons-location")
const address = document.getElementById("display-address-value")
const postCode = document.getElementById("display-post-code-value")
const city = document.getElementById("display-city-value")
const dateIcon = document.getElementById("simple-line-icons-date")
const date = document.getElementById("display-date-value")
const driverLincensIcon = document.getElementById("simple-line-icons-driver-license")
const driverLincen = document.getElementById("display-driver-license-value")

//Personal Details Values

const firstName = document.getElementById("first-name-value")
const lastName = document.getElementById("last-name-value")
const emailValue = document.getElementById("email-value")
const phoneValue = document.getElementById("phone-value")
const locationValue = document.getElementById("address-value")
const postCodeValue = document.getElementById("post-code-value")
const cityValue = document.getElementById("city-value")



// const dateValue = document.getElementById("date-value")
// const driverLincenValue = document.getElementById("driver-license-value")


// Educatin Detaile Variable

const educationDetails = document.getElementById("education-details")
const spanEducationIcon = document.getElementById("span-employment-icon")
const spanEmloymentIcon = document.getElementById("span-education-icon")
const educationTitle = document.getElementById("education-title")
const startYearValue = document.getElementById("start-year-value")
const endYearValue = document.getElementById("end-year-value")
const simpleLineIcons = document.getElementById("simple-line-icons")
const descriptionValue = document.getElementById("description-value")


//Education Details Values

const educationName = document.getElementById("education-value")
const schoolName = document.getElementById("school-value")
const cityName = document.getElementById("city-school-value")
const displayStartDate = document.getElementById("display-start-year-value")
const displayEndDate = document.getElementById("display-end-year-value")
const displaySchoolName = document.getElementById("display-school-value")
const displayEducationName = document.getElementById("display-education-value")
const displayCityValue = document.getElementById("display-city-school-value")
const displayDescriptionValue = document.getElementById("display-description-value")


const addEducation = document.getElementById("add-education-btn")
const addEmploymet = document.getElementById("add-education-btnn")
const saveEducation = document.getElementById("save-eduction-btn")
const educationDataDom = document.getElementById("education-data")
const editeducationDataDom = document.getElementById("edit-education-items")


const templatePdf = document.getElementById('template-pdf')
const pdfBtn = document.getElementById('pdf-btn')

pdfBtn.addEventListener('click', () =>{
    let result = document.getElementById('template-pdf').contentWindow;
    result.focus()
    result.print()
    
})


let x = "true"
let createPersonalDetails = () =>{
    personalDetails.classList.toggle('p-details')
    if(x === "true" ){
        personalDetails.style.display = "block"
        spanIcon.innerHTML = `<span>&#8743;</span>`
        x = "false"
        console.log(x)
    }else if(x === "false"){
        spanIcon.innerHTML = `<span>&#8744;</span>`
        personalDetails.style.display = "none"
        x = "true"
        console.log(x)
    }   
}

//Upload Photo
const image_input = document.getElementById("image-input");
image_input.addEventListener("change", function() {
    const reader = new FileReader();
  reader.addEventListener("load", () => {
    const uploaded_image = reader.result;
    document.querySelector("#display-image").style.backgroundImage = `url(${uploaded_image})`;
  });
  reader.readAsDataURL(this.files[0]);
});


let createHeaderInformation = (event) => {
    //display First Name
    if(displayFirstName.id === "display-" + `${event.target.id}`){
        displayFirstName.innerHTML = event.target.value;
    //display Last Name
    }else if(displayLastName.id === "display-" + `${event.target.id}`){
        displayLastName.innerHTML = event.target.value;
    //display Email
    }else if(eMail.id === "display-" + `${event.target.id}`){
        if(event.target.value === ""){
            console.log("ddddd")
            emailIcon.style.display = "none"
            eMail.innerHTML = event.target.value
        }else{
            console.log("fffff")
            emailIcon.style.display = "block"
            eMail.innerHTML = event.target.value
        }
    //display Phone Number
    }else if(phoneNumber.id ==="display-" + `${event.target.id}`){
        if(event.target.value === ""){
            phoneIcon.style.display = "none"
            phoneNumber.innerHTML = event.target.value
        }else{
            phoneIcon.style.display = "block"
            phoneNumber.innerHTML = event.target.value
        }
    //display Address    
    }else if(address.id === "display-" + `${event.target.id}`){
        if(event.target.value === ""){
            locationIcon.style.display = "none"
            address.innerHTML = event.target.value
        }else{
            locationIcon.style.display = "block"
            address.innerHTML = event.target.value
        }
    //display postcode   
    }else if(postCode.id === "display-" + `${event.target.id}`){
        if(event.target.value === ""){
            postCode.innerHTML = event.target.value
        }else{
            
            postCode.innerHTML = event.target.value
        }
    //display city
    }else if(city.id === "display-" + `${event.target.id}`){
        if(event.target.value === ""){
            city.innerHTML = event.target.value
        }else{
            city.innerHTML = event.target.value
        }
    //display date    
    }else if(date.id === "display-" + `${event.target.id}`){
        if(event.target.value === ""){
            dateIcon.style.display = "none"
            date.innerHTML = event.target.value
        }else{
            dateIcon.style.display = "block"
            date.innerHTML = event.target.value
        }
    //display driver
    }else if(driverLincen.id === "display-" + `${event.target.id}`){
        if(event.target.value === ""){
            driverLincensIcon.style.display = "none"
            driverLincen.innerHTML = event.target.value
        }else{
            driverLincensIcon.style.display = "block"
            driverLincen.innerHTML = event.target.value
        }
    }
  }

const displayEducationForm = (e) => {
    console.log(e);
    addEducation.classList.toggle('e-details')
    educationDetails.classList.toggle('e-details')
}



const displayEmplymentForm = (e) => {
    console.log(e);
    addEmploymet.classList.toggle('e-details')
    educationDetails.classList.toggle('e-details')
}

const createEducationData = () => {
    return eductaionData.map(item => ` <div class="education-template-title">
            <p id="display-education-value">${item.education}</p>
            <div class="start-end-date">
                <p id="display-start-year-value">${item.startDate}</p>
                <p class="simple-line-icons" id="simple-line-icons">-</p>
                <p id="display-end-year-value">${item.endDate}</p> 
            </div>
            
        </div>
        <div class="display-school-city">
            <p id="display-school-value">${item.school}</p>
            <p id="display-city-school-value">${item.city}</p>
        </div>
        <p id="display-description-value">${item.description}</p>`) 
} 


const editEducationData = () => {
                return eductaionData.map(item => ` 
                <div class="display-education-template-title">
                <div class="education-template-title">
                    <p id="display-education-value">${item.education}</p>
                </div>
            <div class="display-school-city">
                <p id="display-school-value">${item.school}</p>
                <p id="display-city-school-value">${item.city}</p>
            </div>
            </div>`) 
        } 

const saveEducationHandler = (e) => {
    e.preventDefault()
    const education = e.target.querySelector("#education-value");
    const school = e.target.querySelector("#school-value");
    const city = e.target.querySelector("#city-school-value")
    const startDate = e.target.querySelector("#start-year-value");
    const endDate = e.target.querySelector("#end-year-value")
    const description = e.target.querySelector("#description-value")
    eductaionData.push({
        education: education.value,
        school: school.value,
        city: city.value,
        startDate: startDate.value,
        endDate: endDate.value,
        description: description.value
    });
    education.value = ""
    school.value = ""
    city.value = ""
    startDate.value = ""
    endDate.value = ""
    description.value = ""

   addEducation.classList.toggle('e-details');
   educationDetails.classList.toggle('e-details');
   educationDataDom.innerHTML = createEducationData()
   editeducationDataDom.innerHTML = editEducationData()
    return false;
} 

// Add event listener  
firstName.addEventListener('change', createHeaderInformation)
lastName.addEventListener('change', createHeaderInformation)
emailValue.addEventListener('change', createHeaderInformation)
phoneValue.addEventListener('change', createHeaderInformation)
locationValue.addEventListener('change', createHeaderInformation)
postCodeValue.addEventListener('change', createHeaderInformation)
cityValue.addEventListener('change', createHeaderInformation)
addEducation.addEventListener('click', displayEducationForm)
addEmploymet.addEventListener('click', displayEmplymentForm)
// dateValue.addEventListener('change', createHeaderInformation)
// driverLincenValue.addEventListener('change', createHeaderInformation)




let educationsDetails = "true"
let createPersonalEducation = () =>{
    addEducation.classList.toggle('e-details');
    if(addEducation.classList.contains("e-details")){
        spanEducationIcon.innerHTML = `<span>&#8744;</span>`
    }else {
        spanEducationIcon.innerHTML = `<span>&#8743;</span>`
    }   
}

let employmetsDetails = "true"
let createPersonalEmployment = () =>{
    addEmploymet.classList.toggle('e-details');
    if(addEmploymet.classList.contains("e-details")){
        spanEmloymentIcon.innerHTML = `<span>&#8744;</span>`
    }else {
        spanEmloymentIcon.innerHTML = `<span>&#8743;</span>`
    }   
}

educationDetails.addEventListener("submit", saveEducationHandler)


