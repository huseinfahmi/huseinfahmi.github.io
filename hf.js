let body = document.getElementById("body-app"),
    app = document.createElement("app"),
    hfHead = document.createElement("hf-head"),
    meridiem = document.createElement("meridiem"),
    toggle = document.createElement("div");
toggle.setAttribute("id", "toggle");
meridiem.onclick = () => {
    if (meridiem.classList.value === 'hover') {
        meridiem.classList.remove('hover');
    } else {
        meridiem.classList.add('hover');
    }
}
meridiem.appendChild(toggle)
let navigation = document.createElement("navigation"),
    hfMain = document.createElement("hf-main"),
    article = document.createElement("article");
article.innerHTML = "Hello you!";
let navs = ["Credits", "About me"];
function links(e) {
    let a = document.createElement("span");
    return (a.innerHTML = e), a;
}
function contents(e) {
    if (((document.querySelector("hf-main").innerHTML = ""), 0 === e)) {
        let e = document.createElement("credit");
        (e.innerHTML =
            'Site Credits: The app was written in pure JavaScipt using <a href="https://nodejs.org/" target="_blank">NodeJS</a>; all designs are pure CSS using <a href="https://sass-lang.com/" target="_blank">Sass</a>; Web fonts using Inter by <a href="https://www.rsms.me/" target="_blank">Rasmus Andersson</a>.</br></br>© 2020 Husein Fahmi'),
            document.querySelector("hf-main").appendChild(e);
    } else if (1 === e) {
        let e = document.createElement("about");
        (e.innerHTML =
            '<img src="/huseinfahmi.jpg" width="100" height="100"><parag>Hello, you!</parag><parag>My name is Husein Fahmi. I\'m a Indonesian JavaScipt Eager-Learner living in Special Region of Yogyakarta with a passion for design, art, and technology.</parag><parag>If you want to say "hello, you!" to me. Just send an email to husefahmi@gmail.com</parag><parag>Also find me on: <a href="https://www.behance.net/huseinfahmi" target="_blank">Behance</a> and <a href="https://github.com/huseinfahmi" target="_blank">GitHub</a>.</parag>'),
            document.querySelector("hf-main").appendChild(e);
    }
}
function clearAllActiveNav() {
    document.querySelectorAll("navigation > span").forEach((e) => e.removeAttribute("class"));
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
    document.querySelectorAll("navigation > span").forEach((e, a) => {
        e.addEventListener("click", (n) => {
            clearAllActiveNav(), contents(a), e.setAttribute("class", "a-ctive");
        });
    });
