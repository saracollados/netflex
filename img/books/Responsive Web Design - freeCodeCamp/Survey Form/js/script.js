// PLAN
function selectGryff () {
    var planElements = document.getElementsByClassName("gryff");
    var ravenPlanElements = document.getElementsByClassName("raven");
    var slythPlanElements = document.getElementsByClassName("slyth");
    var hufflPlanElements = document.getElementsByClassName("huffl");
  
    for (let i = 0; i < planElements.length; i++) {
      planElements[i].style.color = "var(--gryff-red)";
      planElements[i].style.backgroundColor = "var(--gryff-red-alpha)";
    }
    for (let i = 0; i < ravenPlanElements.length; i++) {
        ravenPlanElements[i].style.color = "var(--white)";
        ravenPlanElements[i].style.backgroundColor = "var(--form-bg)";
    }
    for (let i = 0; i < slythPlanElements.length; i++) {
        slythPlanElements[i].style.color = "var(--white)";
        slythPlanElements[i].style.backgroundColor = "var(--form-bg)";
    }
    for (let i = 0; i < hufflPlanElements.length; i++) {
        hufflPlanElements[i].style.color = "var(--white)";
        hufflPlanElements[i].style.backgroundColor = "var(--form-bg)";
    }
    
    var flagElement1 = document.getElementById("flag1");
    var flagElement2 = document.getElementById("flag2");
    var flagElement3 = document.getElementById("flag3");
    var flagElement4 = document.getElementById("flag4");
    flagElement1.style.backgroundColor = "var(--gryff-red)";
    flagElement2.style.backgroundColor = "var(--gryff-gold)";
    flagElement3.style.backgroundColor = "var(--gryff-red)";
    flagElement4.style.backgroundColor = "var(--gryff-gold)";
}

function selectRaven () {
    var planElements = document.getElementsByClassName("raven");
    var gryffPlanElements = document.getElementsByClassName("gryff");
    var slythPlanElements = document.getElementsByClassName("slyth");
    var hufflPlanElements = document.getElementsByClassName("huffl");
    
    for (let i = 0; i < planElements.length; i++) {
        planElements[i].style.color = "var(--raven-blue)";
        planElements[i].style.backgroundColor = "var(--raven-blue-alpha)";
    }
    for (let i = 0; i < gryffPlanElements.length; i++) {
        gryffPlanElements[i].style.color = "var(--white)";
        gryffPlanElements[i].style.backgroundColor = "var(--form-bg)";
    }
    for (let i = 0; i < slythPlanElements.length; i++) {
        slythPlanElements[i].style.color = "var(--white)";
        slythPlanElements[i].style.backgroundColor = "var(--form-bg)";
    }
    for (let i = 0; i < hufflPlanElements.length; i++) {
        hufflPlanElements[i].style.color = "var(--white)";
        hufflPlanElements[i].style.backgroundColor = "var(--form-bg)";
    }
    
    var flagElement1 = document.getElementById("flag1");
    var flagElement2 = document.getElementById("flag2");
    var flagElement3 = document.getElementById("flag3");
    var flagElement4 = document.getElementById("flag4");
    flagElement1.style.backgroundColor = "var(--raven-blue)";
    flagElement2.style.backgroundColor = "var(--raven-bronze)";
    flagElement3.style.backgroundColor = "var(--raven-blue)";
    flagElement4.style.backgroundColor = "var(--raven-bronze)";
}

function selectSlyth () {
    var planElements = document.getElementsByClassName("slyth");
    var gryffPlanElements = document.getElementsByClassName("gryff");
    var ravenPlanElements = document.getElementsByClassName("raven");
    var hufflPlanElements = document.getElementsByClassName("huffl");

    for (let i = 0; i < planElements.length; i++) {
        planElements[i].style.color = "var(--slyth-green)";
        planElements[i].style.backgroundColor = "var(--slyth-green-alpha)";
    }
    for (let i = 0; i < gryffPlanElements.length; i++) {
        gryffPlanElements[i].style.color = "var(--white)";
        gryffPlanElements[i].style.backgroundColor = "var(--form-bg)";
    }
    for (let i = 0; i < ravenPlanElements.length; i++) {
        ravenPlanElements[i].style.color = "var(--white)";
        ravenPlanElements[i].style.backgroundColor = "var(--form-bg)";
    }
    for (let i = 0; i < hufflPlanElements.length; i++) {
        hufflPlanElements[i].style.color = "var(--white)";
        hufflPlanElements[i].style.backgroundColor = "var(--form-bg)";
    }
    
    var flagElement1 = document.getElementById("flag1");
    var flagElement2 = document.getElementById("flag2");
    var flagElement3 = document.getElementById("flag3");
    var flagElement4 = document.getElementById("flag4");
    flagElement1.style.backgroundColor = "var(--slyth-green)";
    flagElement2.style.backgroundColor = "var(--slyth-silver)";
    flagElement3.style.backgroundColor = "var(--slyth-green)";
    flagElement4.style.backgroundColor = "var(--slyth-silver)";
}

function selectHuffl() {
    var planElements = document.getElementsByClassName("huffl");
    var gryffPlanElements = document.getElementsByClassName("gryff");
    var ravenPlanElements = document.getElementsByClassName("raven");
    var slythPlanElements = document.getElementsByClassName("slyth");

    for (let i = 0; i < planElements.length; i++) {
        planElements[i].style.color = "var(--huffl-yellow)";
        planElements[i].style.backgroundColor = "var(--huffl-yellow-alpha)";
    }
    for (let i = 0; i < gryffPlanElements.length; i++) {
        gryffPlanElements[i].style.color = "var(--white)";
        gryffPlanElements[i].style.backgroundColor = "var(--form-bg)";
    }
    for (let i = 0; i < ravenPlanElements.length; i++) {
        ravenPlanElements[i].style.color = "var(--white)";
        ravenPlanElements[i].style.backgroundColor = "var(--form-bg)";
    }
    for (let i = 0; i < slythPlanElements.length; i++) {
        slythPlanElements[i].style.color = "var(--white)";
        slythPlanElements[i].style.backgroundColor = "var(--form-bg)";
    }
    
    var flagElement1 = document.getElementById("flag1");
    var flagElement2 = document.getElementById("flag2");
    var flagElement3 = document.getElementById("flag3");
    var flagElement4 = document.getElementById("flag4");
    flagElement1.style.backgroundColor = "var(--huffl-yellow)";
    flagElement2.style.backgroundColor = "var(--huffl-black)";
    flagElement3.style.backgroundColor = "var(--huffl-yellow)";
    flagElement4.style.backgroundColor = "var(--huffl-black)";
}