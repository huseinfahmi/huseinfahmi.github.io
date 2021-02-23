let body = document.getElementById('body-app')
let app = document.createElement('app')
let hfHead = document.createElement('hf-head')
let meridiem = document.createElement('meridiem')
meridiem.innerHTML = 'Meridiem'
let navigation = document.createElement('navigation')
//navigation.innerHTML = 'Navigation'
let hfMain = document.createElement('hf-main')
let article = document.createElement('article')
article.innerHTML = 'Hello you!'

let navs = ['Works', 'Credits', 'About me']

function links(name){
    let nav = document.createElement('span')
    nav.innerHTML = name
    return nav
}

navs.forEach(nav => {
    navigation.appendChild(links(nav))
})

hfHead.appendChild(meridiem)
hfHead.appendChild(navigation)
hfMain.appendChild(article)
app.appendChild(hfHead)
app.appendChild(hfMain)
body.appendChild(app)

function contents(index) {
    document.querySelector('hf-main').innerHTML = ''
    if(index === 1) {
        let credit = document.createElement('credit')
        credit.innerHTML = 'Site Credits: The app was written in pure JavaScipt using <a href="https://nodejs.org/" target="_blank">NodeJS</a>; all designs are pure CSS using <a href="https://sass-lang.com/" target="_blank">Sass</a>; Web fonts using Inter by <a href="https://www.rsms.me/" target="_blank">Rasmus Andersson</a>.</br></br>© 2020 Husein Fahmi'
        document.querySelector('hf-main').appendChild(credit)
    } else if(index === 2) {
        let about = document.createElement('about')
        about.innerHTML = '<parag>Hello, you!</parag><parag>My name is Husein Fahmi. I\'m a Indonesian JavaScipt Eager-Learner living in Special Region of Yogyakarta with a passion for design, art, and technology.</parag><parag>If you want to say "hello, you!" to me. Just send an email to husefahmi@gmail.com</parag><parag>Also find me on: <a href="https://www.behance.net/huseinfahmi" target="_blank">Behance</a> and <a href="https://github.com/huseinfahmi" target="_blank">GitHub</a>.</parag>'
        document.querySelector('hf-main').appendChild(about)
    } else {
        let article = document.createElement('article')
        let title = document.createElement('title')
        title.innerHTML = 'TRex Odd'
        article.appendChild(title)
        let content = document.createElement('content')
        content.innerHTML = 'TRex Game is a colorful, fast-paced, competitive card game you play in browser internet disconnected.'
        article.appendChild(content)
        document.querySelector('hf-main').appendChild(article)
        
        let article2 = document.createElement('article')
        let title2 = document.createElement('title')
        title2.innerHTML = 'Sumali Brand Maker'
        article2.appendChild(title2)
        let content2 = document.createElement('content')
        content2.innerHTML = 'Delicious, healthy and blended with Greenfields fresh milk, our ready-to-drink yogurt is a convenient and delicious way to get your daily dose of dietary fibre!.'
        article2.appendChild(content2)
        document.querySelector('hf-main').appendChild(article2)
    }
}

function clearAllActiveNav() {
    document.querySelectorAll('navigation > span').forEach(e => e.removeAttribute('class'))
} 

document.querySelectorAll('navigation > span').forEach((e, i) => {
    e.addEventListener('click', x => {
        clearAllActiveNav()
        contents(i)
        e.setAttribute("class", "a-ctive");
    })
})