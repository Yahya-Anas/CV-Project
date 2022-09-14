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

// Educatin Detaile Variable

const educationDetails = document.getElementById("education-details")
const spanEducationIcon = document.getElementById("span-education-icon")





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

let crateFirstName = () =>{
    let firstName = document.getElementById("first-name-value").value
    displayFirstName.innerHTML = firstName;
}

let cratelastName = () =>{
    let lastName = document.getElementById("last-name-value").value
    displayLastName.innerHTML = lastName;
}

let crateEmail = () =>{
    let emailValu = document.getElementById("email-value").value
    if(emailValu === ""){
        console.log("ddddd")
        emailIcon.style.display = "none"
        eMail.innerHTML = emailValu
    }else{
        console.log("fffff")
        emailIcon.style.display = "block"
        eMail.innerHTML = emailValu
    }
}

let cratePhone = () =>{
    let phoneVlue = document.getElementById("phone-value").value
   
    if(phoneVlue === ""){
        phoneIcon.style.display = "none"
        phoneNumber.innerHTML = phoneVlue
    }else{
        phoneIcon.style.display = "block"
        phoneNumber.innerHTML = phoneVlue
    }
}

let crateAddress = () =>{
    let locationValue = document.getElementById("address-value").value
    if(locationValue === ""){
        locationIcon.style.display = "none"
        address.innerHTML = locationValue
    }else{
        locationIcon.style.display = "block"
        address.innerHTML = locationValue
    }
}

let cratePostCode = () =>{
    let postCodeValue = document.getElementById("post-code-value").value
    if(postCodeValue === ""){
        postCode.innerHTML = postCodeValue
    }else{
        
        postCode.innerHTML = postCodeValue
    }
}

let crateCity = () =>{
    let cityValue = document.getElementById("city-value").value
    if(cityValue === ""){
        city.innerHTML = cityValue
    }else{
        city.innerHTML = cityValue
    }
}

let crateDate = () =>{
    let dateValue = document.getElementById("date-value").value
    if(dateValue === ""){
        dateIcon.style.display = "none"
        date.innerHTML = dateValue
    }else{
        dateIcon.style.display = "block"
        date.innerHTML = dateValue
    }
}

let crateDriverLincens = () =>{
    let driverLincenValue = document.getElementById("driver-lincens-value").value
    if(driverLincenValue === ""){
        driverLincenValue.style.display = "none"
        driverLincen.innerHTML = driverLincenValue
    }else{
        driverLincensIcon.style.display = "block"
        driverLincen.innerHTML = driverLincenValue
    }
}


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