function Pet(n,a,g,b,s){
    this.name = n;
    this.age = a;
    this.gender = g;
    this.breed = b;
    this.service= s;
}
let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputGender = document.getElementById("txtGender");
let inputBreed = document.getElementById("txtBreed");
let inputService = document.getElementById("txtService");

function isValid(aPet){
    let valid=true;
    if(aPet.name === ""){
        valid=false;
        inputName.classList.add("input-alert-error");
    }
    if(aPet.age === ""){
        valid=false;
        inputAge.classList.add("input-alert-error");
    }
    if(aPet.gender === ""){
        valid=false;
        inputGender.classList.add("input-alert-error");
    }
    if(aPet.breed === ""){
        valid=false;
        inputBreed.classList.add("input-alert-error");
    }
    if(aPet.service === ""){
        valid=false;
        inputService.classList.add("input-alert-error");
    }
    //make mandatory owner and contact phone
    return valid;
}

function register(){
    console.log("Register a new Pet");
    console.log(inputName.value,inputAge.value,inputGender.value,inputBreed.value,inputService.value);

    let newPet = new Pet(inputName.value,inputAge.value,inputGender.value,inputBreed.value,inputService.value);
   
    console.log(newPet);

    petSalon.pets.push(newPet);

    updateInfo();
    clearform();
}
function updateInfo(){
    document.getElementById("numberOfPets").innerHTML=petSalon.pets.length;
}

function clearform(){
    inputName.value="";
    inputAge.value="";
    inputGender.value="";
    inputBreed.value="";
    inputService.value="";


}
function init(){

    displayFooterInfo();
    let scooby = new Pet("Scooby",60,"Male","Dane","Grooming");
    let bella = new Pet("Bella",5,"Female","Pomeranian","Bath");
    let luna = new Pet("Luna",8,"Female","Chihuahua","Nail Trimming");
    petSalon.pets.push(scooby,bella,luna);
    updateInfo();
    displayPetCards();
  

}

window.onload=init;








