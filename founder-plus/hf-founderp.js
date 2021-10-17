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

article.innerHTML = '<single><video width="100%" controls><source src="/founder-plus/test-founder-plus.mp4" type="video/mp4"></video><parag><h3>Founder Plus Test</h3></parag><parag>Tools: Adobe Illustrator, Adobe Photoshop, Apple Motion; Font: Raleway; Sources: <a href="https://pbs.twimg.com/media/Eln9o3cVkAAOmZQ?format=jpg&name=large" target="_blank">Seo Dal Mi &mdash;StartUp</a>;</parag></single><separator-single>---</separator-single><multiple><box><img src="/founder-plus/chiesa-release.jpg" width="100%" height="auto"><parag><h3>Juventus vs Barcelona</h3></parag><parag>Tools: Pixelmator Pro; Font: Juventus Font; Sources: <a href="https://www.juventus.com/it/squadre/prima-squadra-maschile/" target="_blank">Chiesa</a>, <a href="https://www.juventus.com/images/image/private/t_portrait_tablet_desktop/f_auto/dev/oxzb7kjfry42oxki70bs.jpg" target="_blank">Juventus Suporter</a>;</parag><separator-multiple></separator-multiple></box><box><img src="/founder-plus/goat-release.jpg" width="100%" height="auto"><parag><h3>HFLand Zine</h3></parag><parag>Tools: Adobe Illustrator, Adobe Photoshop; Fonts: Didot, Poppins; Sources: <a href="https://unsplash.com/photos/J9wZ6D2kYPw" target="_blank">Goat</a>, <a href="https://www.liputan6.com/global/read/2298312/sensasi-berlibur-sebagai-kambing-gunung" target="_blank">Article</a>;</parag><separator-multiple></separator-multiple></box><box><video width="100%" controls><source src="/founder-plus/burger-release.mp4" type="video/mp4"></video><parag><h3>Burger Queen</h3></parag><parag>Tools: Adobe Photoshop, Apple Motion; Font: Titan One; Sources: <a href="https://unsplash.com/photos/48F-Uvx9wvw" target="_blank">Tall Burgers</a>, <a href="https://unsplash.com/photos/o12Aw-0NzHM" target="_blank">Burger Fly</a>;</parag><separator-multiple></separator-multiple></box></multiple><multiple><box><img src="/founder-plus/rior-release.jpg" width="100%" height="auto"><parag><h3>Rior Interior</h3></parag><parag>Tools: Adobe Illustrator, Adobe Photoshop; Font: Poppins, Didot; Sources: <a href="https://www.magisdesign.com/" target="_blank">Chair</a>;</parag><separator-multiple></separator-multiple></box><box><video width="100%" controls><source src="/founder-plus/shoes-release.mp4" type="video/mp4"></video><parag><h3>HF Shoes</h3></parag><parag>Tools: Adobe Illustrator, Adobe Photoshop, Apple Motion; Font: Poppins; Sources: <a href="https://pbs.twimg.com/media/Eln9o3cVkAAOmZQ?format=jpg&name=large" target="_blank">Adidas Lego</a>;</parag><separator-multiple></separator-multiple></box><box><img src="/founder-plus/squid-release.jpg" width="100%" height="auto"><parag><h3>foHFative</h3></parag><parag>Tools: Adobe Illustrator; Font: Inter; Sources: <a href="https://vaguevisages.com/wp-content/uploads/2021/09/Squid-Game-Cast-Netflix-Oh-Yeong-Su-Oh-Il-Nam.jpg" target="_blank">Oh Il Nam &mdash;Squid Game</a></parag><separator-multiple></separator-multiple></box></multiple><separator-single>---</separator-single><single><img src="/hxsf.jpg" width="100%" height="auto"><parag><h3>Our ingredients, those times</h3></parag><parag>Tools: Adobe Illustrator; Reference: Nintendo;</parag></single><separator-single>---</separator-single>';

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
