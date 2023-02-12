let petSalon ={
    name: "The Fashion Pet",
    phone: "555-555-555",
    workingHours:{
        open:"9:00am",
        close:"9:00pm",
    },
    address:{
        street:"Palm ave",
        zip:"30080",
        city: "Atlanta",

    },
    pets:[]
}

function displayFooterInfo(){
    document.getElementById("footer"),
    innerHTML=`<label>${petSalon.name} it opens at ${petSalon.workingHours.open} to ${petSalon.workingHours.close}</label>`;
}

function initFooter(){
    displayFooterInfo();
}

window.onload=initFooter;