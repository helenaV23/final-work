const showModalButton = document.getElementById("showModal")
const modalContactsElement = document.getElementById("modalContacts")
const closeContactsButton = document.getElementById("closeContacts")

const showMenuButton = document.getElementById("showMenu")
const modalMenuElement = document.getElementById("modalMenu")
const closeMenuButton = document.getElementById("closeMenu")

showModalButton.addEventListener("click", () => {
    modalContactsElement.classList.add("modal-active")
})

closeContactsButton.addEventListener("click", () => {
    modalContactsElement.classList.remove("modal-active")
})

showMenuButton.addEventListener("click", () => {
    modalMenuElement.classList.add("modal-active")
})

closeMenuButton.addEventListener("click", () => {
    modalMenuElement.classList.remove("modal-active")
})
