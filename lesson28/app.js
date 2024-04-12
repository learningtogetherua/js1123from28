const elgatoKeylight = document.querySelector('#elgatoKeylight')
const elgatoKeylightModal = document.querySelector('#elgatoKeylightModal')
const closeButton = document.querySelector('.close')

const showModal = (e)=>{
    e.preventDefault()
    // elgatoKeylightModal.classList.add('show')
    elgatoKeylightModal.classList.toggle('show')
}
const closeModal = ()=>{
    console.log('ok');
    // elgatoKeylightModal.classList.remove('show')
    elgatoKeylightModal.classList.toggle('show')

}

elgatoKeylight.addEventListener('click', showModal)
closeButton.addEventListener('click', closeModal)
