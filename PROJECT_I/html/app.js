
const getElement = (selector) =>{
    const element = document.querySelector(selector);
    if (element) return element
    throw Error('please double check class names, there is no   class'
    )

}
const links = getElement('.nav-links')
const navBtnDOM = getElement('.nav-btn')

navBtnDOM.addEventListener('click', ()=> {
    links.classList.toggle('show-links')
})