function getById(id) {
    return document.getElementById(id);
}

function hidePopUp() {
    ytbVideo.src = "";
    popUp.classList.add("hide");
    document.body.style.overflowY = "scroll";
}

const popUp = getById("pop-up");

/*-----------------Pop Up configuration Starts-----------------*/

var btnRegister = getById("btnRegister");
var txtEventName = getById("eventName");
var txtPrizeMoney = getById("prize-money");
var txtEntryFee = getById("fee");
var ytbVideo = getById("ytbVideo");
var description = getById("description");
var structure = getById("structure");
var rules = getById("rules");
var olContact = getById("contact");

/*-----------------Pop Up configuration Ends-----------------*/

function showPopUp(e) {
    
    var obj = data[e.target.value.toLowerCase()];

    if (obj.rules == undefined) {
        obj.rules = ["Will be updated soon"];
    }
    if (obj.eventStructure == undefined) {
        obj.eventStructure = ["Will be updated soon"];
    }


    txtEventName.innerText = e.target.innerText;
    description.innerHTML = obj.description;
    ytbVideo.src = obj.videoURL;
    var structureHTML = "";
    var rulesHTML = "";
    obj.eventStructure.forEach(elem => {
        structureHTML += "<li>" + elem + "</li>";
    })
    obj.rules.forEach(elem => {
        rulesHTML += "<li>" + elem + "</li>";
    })
    
    var contactHTML = "";
    obj.contact.forEach(elem => {
        contactHTML += `<li>
            <h3 id="contact-name">${elem.name} : </h3>
            <h3 id="contact-number">+91${elem.no}</h3>
        </li>`
    })


    structure.innerHTML = structureHTML;
    rules.innerHTML = rulesHTML;
    txtPrizeMoney.innerText = obj.prizeMoney;
    txtEntryFee.innerText = obj.entryFee;
    btnRegister.value = obj.registerURL;
    contact.innerHTML = contactHTML;

    btnRegister.addEventListener('click', _ => {
        window.open(btnRegister.value);
    })
    document.body.style.overflowY = "hidden";
    popUp.classList.remove("hide");
}

