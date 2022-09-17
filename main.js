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
const spanEducationIcon = document.getElementById("span-education-icon")
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

// Add event listener  
firstName.addEventListener('change', createHeaderInformation)
lastName.addEventListener('change', createHeaderInformation)
emailValue.addEventListener('change', createHeaderInformation)
phoneValue.addEventListener('change', createHeaderInformation)
locationValue.addEventListener('change', createHeaderInformation)
postCodeValue.addEventListener('change', createHeaderInformation)
cityValue.addEventListener('change', createHeaderInformation)
// dateValue.addEventListener('change', createHeaderInformation)
// driverLincenValue.addEventListener('change', createHeaderInformation)




let educationsDetails = "true"
let createPersonalEducation = () =>{
    educationDetails.classList.toggle('e-details')
    if(educationsDetails === "true" ){
        educationDetails.style.display = "block"
        spanEducationIcon.innerHTML = `<span>&#8743;</span>`
        educationsDetails = "false"
        console.log(educationsDetails)
    }else if(educationsDetails === "false"){
        spanEducationIcon.innerHTML = `<span>&#8744;</span>`
        educationDetails.style.display = "none"
        educationsDetails = "true"
        console.log(educationsDetails)
    }   
}

let crateEducation = (event) =>{
    //create Education Name
    if(displayEducationName.id === "display-" +`${event.target.id}`){
        educationTitle.style.display = "block"
        displayEducationName.innerHTML = event.target.value
    //cretae School Name    
    }else if(displaySchoolName.id === "display-" +`${event.target.id}`){
        displaySchoolName.innerHTML = event.target.value
    //create start date
    }else if(displayStartDate.id === "display-" +`${event.target.id}`){
        displayStartDate.innerHTML = event.target.value
    //create end date
    }else if(displayEndDate.id === "display-" +`${event.target.id}`){
       if(event.target.value === ""){
        displayEndDate.innerHTML = event.target.value
        simpleLineIcons.style.display = "none"
       }else{
        displayEndDate.innerHTML = event.target.value
        simpleLineIcons.style.display = "block"
       }
    }else if(displayCityValue.id === "display-" +`${event.target.id}`){
        displayCityValue.innerHTML = event.target.value
    }else if(displayDescriptionValue.id === "display-" +`${event.target.id}`){
        displayDescriptionValue.innerHTML = event.target.value
    }
    
    
}

educationName.addEventListener('change', crateEducation)
schoolName.addEventListener('change', crateEducation)
startYearValue.addEventListener('change', crateEducation)
endYearValue.addEventListener('change', crateEducation)
cityName.addEventListener('change', crateEducation)
descriptionValue.addEventListener('change', crateEducation)

