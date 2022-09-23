document.querySelector('.header__burger').addEventListener('click', toggleMenu)
document.querySelectorAll('.header__link').forEach(elem => elem.addEventListener('click', toggleMenu))

function toggleMenu() {
    const durationTime = 700
    if (this.classList.contains('active')) {
        this.style.setProperty('--start-deg', '0deg')
        this.style.setProperty('--end-deg', '-360deg')
    }
    else {
        this.style.setProperty('--start-deg', '0deg')
        this.style.setProperty('--end-deg', '360deg')
    }
    this.classList.toggle('active')
    this.style.animationDuration = `${durationTime}ms`
    this.style.animationName = 'roll'
    setTimeout(() => {
        document.querySelector('.header__burger').style.animationName = ''
    }, durationTime)
    document.querySelector('.header__nav').classList.toggle('active')
}

document.querySelector('.projects__show-more').onclick = toggleShowAllProjects;

function toggleShowAllProjects() {
    if(this.classList?.contains('button')){
        this.textContent = this.textContent === 'Show more'?  'Show less' : 'Show more'
        this.classList.toggle('button_contained')
    }
    const secondRowProjects = document.querySelectorAll('.projects__row')[1]
    secondRowProjects.classList.toggle('hide')
}

if(window.matchMedia('(max-width:600px)').matches){
    console.log('animated');
    document.querySelector('.exp-technology').classList.remove('animate__animated', 'wow', 'animate__fadeInRight')
    document.querySelector('.offer__row').classList.remove('animate__animated', 'wow', 'animate__fadeInRight')
    document.querySelectorAll('.projects__row').forEach((elem) => {
        elem.classList.remove('animate__animated', 'wow', 'animate__fadeInUp')
    })
    
    animateCards(document.querySelectorAll('.exp-technology__card'))
    animateCards(document.querySelectorAll('.offer__card'))
    animateCards(document.querySelectorAll('.projects__card'))
}

function animateCards(cards){
    cards.forEach((elem, index) => {
        elem.classList.add('animate__animated','wow')
        index % 2 === 0? elem.classList.add('animate__fadeInRight') : elem.classList.add('animate__fadeInLeft') 
    })
}