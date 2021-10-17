let body = document.getElementById("body-app"),
    app = document.createElement("app-fp"),
    hfHead = document.createElement("hf-head-fp"),
    meridiem = document.createElement("meridiem"),
    toggle = document.createElement("toggle"),
    bullet = document.createElement("bullet"),
    note = document.createElement("note"),
    info = document.createElement("info"),
    hfMain = document.createElement("hf-main"),
    article = document.createElement("article");

info.innerHTML = 'page: founder-plus'
note.innerHTML = 'turn on the lights'
toggle.setAttribute('class', 'off')
toggle.appendChild(bullet)
meridiem.appendChild(toggle)
meridiem.appendChild(note)

article.innerHTML = '<single><img src="/hxsf.jpg" width="100%" height="auto"><parag>Our ingredients, those times.</parag><parag>Hello, you! this is my personal page. hope this will happen continuously &mdash;share some of mine here. if you have found something to talk about, just say "Hello, you!" to me</parag><separator-single>---</separator-single></single><multiple><box><img src="/founder-plus/chiesa-release.jpg" width="100%" height="auto"><parag>Our ingredients, those times.</parag><parag>Hello, you! this is my personal page. hope this will happen continuously &mdash;share some of mine here. if you have found something to talk about, just say "Hello, you!" to me</parag></box><box><img src="/founder-plus/goat-release.jpg" width="100%" height="auto"><parag>Our ingredients, those times.</parag><parag>Hello, you! this is my personal page. hope this will happen continuously &mdash;share some of mine here. if you have found something to talk about, just say "Hello, you!" to me</parag></box><box><embed src="mymovie.mov" width="100%" autoplay="false" controller="true" loop="false" pluginspage="/founder-plus/burger-release.mov"><parag>Our ingredients, those times.</parag><parag>Hello, you! this is my personal page. hope this will happen continuously &mdash;share some of mine here. if you have found something to talk about, just say "Hello, you!" to me</parag></box></multiple>';

hfHead.appendChild(meridiem)
hfHead.appendChild(info)
hfMain.appendChild(article)
app.appendChild(hfHead)
app.appendChild(hfMain)
body.appendChild(app)

linkclr = param => {
    if (document.querySelector('toggle').classList.value === 'on') {
        if (document.querySelectorAll('parag a').length > 0) {
            document.querySelectorAll('parag a').forEach((e) => {
                e.style.color = '#FF605C'
            })
        }
    } else if (document.querySelector('toggle').classList.value === 'off') {
        if (document.querySelectorAll('parag a').length > 0) {
            document.querySelectorAll('parag a').forEach((e) => {
                e.style.color = '#6CF0F5'
            })
        }
    }
}

toggle.onclick = () => {
    if (toggle.classList.value === 'off') {
        toggle.setAttribute('class', 'on')
        body.style.backgroundColor = '#fafafa'
        body.style.color = '#363636'
        body.style.fontWeight = "500"
        note.style.color = '#FF605C'
        note.innerHTML = 'turn off the lights'
        linkclr()
    } else {
        toggle.setAttribute('class', 'off');
        body.style.backgroundColor = '#161616';
        body.style.color = '#f4f4f4';
        body.style.fontWeight = "normal";
        note.style.color = '#6CF0F5'
        note.innerHTML = 'turn on the lights'
        linkclr()
    }
}
