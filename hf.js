let body = document.getElementById("body-app"),
    app = document.createElement("app"),
    hfHead = document.createElement("hf-head"),
    meridiem = document.createElement("meridiem"),
    toggle = document.createElement("toggle"),
    bullet = document.createElement("bullet"),
    note = document.createElement("note");
note.innerHTML = 'your note'
toggle.setAttribute('class', 'off')
toggle.appendChild(bullet)
meridiem.appendChild(toggle)
meridiem.appendChild(note)
let navigation = document.createElement("navigation"),
    hfMain = document.createElement("hf-main"),
    article = document.createElement("article");
article.innerHTML = '<img src="/hxsf.jpg" width="100%" height="auto"><parag>Our ingredients, those times.</parag><parag>Hello, you! this is my personal page. hope this will happen continuously &mdash;share some of mine here. if you have found something to talk about, just say "Hello, you!" to me</parag>';
let navs = ["Credits", "About me"];
function links(e) {
    let a = document.createElement("moveto");
    return (a.innerHTML = e), a;
}
function contents(e) {
    if (((document.querySelector("hf-main").innerHTML = ""), 0 === e)) {
        let e = document.createElement("credit");
        (e.innerHTML =
            '<parag>Site Credits: The app was written in pure JavaScipt using <a href="https://nodejs.org/" target="_blank">NodeJS</a>; all designs are pure CSS using <a href="https://sass-lang.com/" target="_blank">Sass</a>; Web fonts using Inter by <a href="https://www.rsms.me/" target="_blank">Rasmus Andersson</a>.</br></br>© 2020 Husein Fahmi</parag>'),
            document.querySelector("hf-main").appendChild(e);
    } else if (1 === e) {
        let e = document.createElement("about");
        (e.innerHTML =
            '<img src="/huseinfahmi.jpg" width="100" height="100"><parag>Hello, you!</parag><parag>My name is Husein Fahmi. I\'m a Indonesian JavaScipt Eager-Learner living in Special Region of Yogyakarta with a passion for design, art, and technology.</parag><parag>If you want to say "hello, you!" to me. Just send an email to husefahmi@gmail.com</parag><parag>Also find me on: <a href="https://www.behance.net/huseinfahmi" target="_blank">Behance</a> and <a href="https://github.com/huseinfahmi" target="_blank">GitHub</a>.</parag>'),
            document.querySelector("hf-main").appendChild(e);
    }
}
function clearAllActiveNav() {
    document.querySelectorAll("navigation > moveto").forEach((e) => e.removeAttribute("class"));
}
navs.forEach((e) => {
    navigation.appendChild(links(e));
}),
    hfHead.appendChild(meridiem),
    hfHead.appendChild(navigation),
    hfMain.appendChild(article),
    app.appendChild(hfHead),
    app.appendChild(hfMain),
    body.appendChild(app),
    document.querySelectorAll("navigation > moveto").forEach((e, a) => {
        e.addEventListener("click", (n) => {
            clearAllActiveNav(), contents(a), e.setAttribute("class", "a-ctive"), linkclr();
        });
    });

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
        toggle.setAttribute('class', 'on');
        body.style.backgroundColor = '#fafafa';
        body.style.color = '#363636';
        body.style.fontWeight = "500";
        document.querySelector('note').style.color = '#FF605C'
        linkclr()
    } else {
        toggle.setAttribute('class', 'off');
        body.style.backgroundColor = '#161616';
        body.style.color = '#f4f4f4';
        body.style.fontWeight = "normal";
        document.querySelector('note').style.color = '#6CF0F5'
        linkclr()
    }
}
