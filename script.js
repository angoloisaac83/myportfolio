let dark = document.querySelectorAll('.dark')
let body = document.querySelector('body')
let nav = document.querySelectorAll('nav')
let parent = document.querySelector('.parent')
let wo = document.querySelectorAll('.wo')
let nava = document.querySelectorAll('nav button')
let nab = document.querySelector('nav a')
let nad = document.querySelector('.nav')
let footer = document.querySelector('footer')
let about = document.querySelector('.about-sect')
let ul = document.querySelector('footer ul')
let span = document.querySelector('footer span')
let wom = document.querySelectorAll('.wom')
dark.forEach(darken =>{
darken.addEventListener('click', ()=>{
    if (body.style.backgroundColor === 'white') {
        body.style.backgroundColor = 'black'
        body.style.color = "white"
        darken.style.border = "2px solid white"
        footer.style.background = "rgb(31, 31, 31)"
        nav.forEach(navs=>{
            navs.style.boxShadow = '1px 1px 1px 1px rgb(233, 216, 216)'})
        nab.style.color = "white"
        nava.forEach(navas=>{
        navas.style.border = "2px solid white"})
        about.style.backgroundColor = 'black'
        about.style.color = "white"
    } else {
       body.style.backgroundColor = 'white'
       body.style.color = "black"
       darken.style.border = "2px solid black"
       footer.style.background = "black"
       ul.style.color = "white"
       span.style.color = "white"
       nav.forEach(navs=>{
            navs.style.boxShadow = '4px 4px 4px 4px rgba(0, 0, 0, 0.34)'
       })
       nab.style.color = "black"
       nava.forEach(navas=>{
       navas.style.border = "2px solid black"})
       about.style.backgroundColor = 'white'
       about.style.color = "black"
    }
})
})
wo.forEach(second=>{
    second.addEventListener('click',()=>{
        about.style.transform = 'rotateY(360deg)'
        about.style.display = 'flex'
        parent.style.display = 'none'
        nad.style.display = 'flex'
    })
})
wom.forEach(seconds=>{
    seconds.addEventListener('click',()=>{
        about.style.display = 'none'
        parent.style.display = 'inline'
        nad.style.display = 'none'
    })
})