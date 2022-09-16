// Personal Details Variable

const personalDetails = document.getElementById("personal-details");
const spanIcon = document.getElementById("span-icon");
const displayFirstName = document.getElementById("display-first-name")
const displayLastName = document.getElementById("display-last-name")
const eMail = document.getElementById("email")
const emailIcon = document.getElementById("simple-line-icons-email")
const phoneNumber = document.getElementById("phone")
const phoneIcon = document.getElementById("simple-line-icons-phone")
const locationIcon = document.getElementById("simple-line-icons-location")
const address = document.getElementById("address")
const postCode = document.getElementById("postCode")
const city = document.getElementById("city")
const dateIcon = document.getElementById("simple-line-icons-date")
const date = document.getElementById("date")
const driverLincensIcon = document.getElementById("simple-line-icons-driver-license")
const driverLincen = document.getElementById("driver-license")

//Personal Details Values

const firstName = document.getElementById("first-name-value")
const lastName = document.getElementById("last-name-value")
const emailValue = document.getElementById("email-value")
const phoneValue = document.getElementById("phone-value")
const locationValue = document.getElementById("address-value")
const postCodeValue = document.getElementById("post-code-value")
const cityValue = document.getElementById("city-value")
const dateValue = document.getElementById("date-value")
const driverLincenValue = document.getElementById("driver-lincens-value")


// Educatin Detaile Variable

const educationDetails = document.getElementById("education-details")
const spanEducationIcon = document.getElementById("span-education-icon")
const displayEducationName = document.getElementById("education")
const educationTitle = document.getElementById("education-title")

//Education Details Values

const educationName = document.getElementById("education-value")



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


let crateFirstName =(event) => {
    displayFirstName.innerHTML = event.target.value;
  }
firstName.addEventListener('change', crateFirstName)

let cratelastName = (event) =>{
    displayLastName.innerHTML = event.target.value;
}
lastName.addEventListener('change', cratelastName)


let crateEmail = (event) =>{
    if(event.target.value === ""){
        console.log("ddddd")
        emailIcon.style.display = "none"
        eMail.innerHTML = event.target.value
    }else{
        console.log("fffff")
        emailIcon.style.display = "block"
        eMail.innerHTML = event.target.value
    }
}
emailValue.addEventListener('change', crateEmail)

let cratePhone = (event) =>{ 
    if(event.target.value === ""){
        phoneIcon.style.display = "none"
        phoneNumber.innerHTML = event.target.value
    }else{
        phoneIcon.style.display = "block"
        phoneNumber.innerHTML = event.target.value
    }
}
phoneValue.addEventListener('change', cratePhone)

let crateAddress = (event) =>{
    
    if(event.target.value === ""){
        locationIcon.style.display = "none"
        address.innerHTML = event.target.value
    }else{
        locationIcon.style.display = "block"
        address.innerHTML = event.target.value
    }
}
locationValue.addEventListener('change', crateAddress)

let cratePostCode = (event) =>{
    if(event.target.value === ""){
        postCode.innerHTML = event.target.value
    }else{
        
        postCode.innerHTML = event.target.value
    }
}
postCodeValue.addEventListener('change', cratePostCode)

let crateCity = (event) =>{
    
    if(event.target.value === ""){
        city.innerHTML = event.target.value
    }else{
        city.innerHTML = event.target.value
    }
}
cityValue.addEventListener('change', crateCity)

let crateDate = (event) =>{
    
    if(event.target.value === ""){
        dateIcon.style.display = "none"
        date.innerHTML = event.target.value
    }else{
        dateIcon.style.display = "block"
        date.innerHTML = event.target.value
    }
}
dateValue.addEventListener('change', crateDate)

let crateDriverLincens = (event) =>{
   
    if(event.target.value === ""){
        driverLincensIcon.style.display = "none"
        driverLincen.innerHTML = event.target.value
    }else{
        driverLincensIcon.style.display = "block"
        driverLincen.innerHTML = event.target.value
    }
}
driverLincenValue.addEventListener('change', crateDriverLincens)


const image_input = document.getElementById("image-input");
image_input.addEventListener("change", function() {
    const reader = new FileReader();
  reader.addEventListener("load", () => {
    const uploaded_image = reader.result;
    document.querySelector("#display-image").style.backgroundImage = `url(${uploaded_image})`;
  });
  reader.readAsDataURL(this.files[0]);
  
});

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
    educationTitle.style.display = "block"
    displayEducationName.innerHTML = event.target.value
}

educationName.addEventListener('change', crateEducation)

