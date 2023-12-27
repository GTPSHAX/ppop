const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry)=>{
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('awal1')) {
                entry.target.classList.add('kanan')
                entry.target.classList.remove('awal1')
            }
            if (entry.target.classList.contains('awal2')) {
                entry.target.classList.add('kiri')
                entry.target.classList.remove('awal2')
            }
        }
    })
})

const awal1 = document.querySelectorAll('.awal1')
const awal2 = document.querySelectorAll('.awal2')

awal1.forEach(awal1a => {
    observer.observe(awal1a)
})
awal2.forEach(awal2a => {
    observer.observe(awal2a)
})

const btnNavs = document.querySelectorAll('.btnNav')

btnNavs.forEach(btnNav=>{
    btnNav.addEventListener('click', event=>{
        event.preventDefault()
        const targetSection = document.querySelector(btnNav.getAttribute('href'))
        targetSection.scrollIntoView({behavior: 'smooth'})
    })
})