const modalOverlay = document.querySelector('.modalOverlay')
const cards = document.querySelectorAll('.card')

for (let card of cards){
    card.addEventListener("click", function(){
        const imgID = card.getAttribute("id")
        const foodName = card.querySelector(".foodName").textContent
        const foodAuthor = card.querySelector(".foodAuthor").textContent
        
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("img").src = `${imgID}`  
        modalOverlay.querySelector(".modalPlate").innerHTML = `${foodName}`
        modalOverlay.querySelector(".modalChef").innerHTML = `${foodAuthor}`
    
    
    })
}


document.querySelector(".closeModal").addEventListener("click", function(){
    modalOverlay.classList.remove("active")
})



