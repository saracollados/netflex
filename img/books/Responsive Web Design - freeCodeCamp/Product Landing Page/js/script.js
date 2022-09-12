// MENÚ
const toggleMenu = () => {
    document.getElementById("nav-bar").classList.toggle("menu-open");
    // document.getElementById("burger").classList.toggle("is-active");
    // document.getElementById("blurbg").classList.toggle("visible");
};

const selectModel = () => {
    if (document.getElementById("model-s-plaid-btn").checked == true) {
        document.getElementById("model-s-plaid").style.display = "flex";
        document.getElementById("model-s").style.display = "none";
    } else if (document.getElementById("model-s-btn").checked == true) {
        document.getElementById("model-s-plaid").style.display = "none";
        document.getElementById("model-s").style.display = "flex";
    }
}