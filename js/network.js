
var request = new XMLHttpRequest();
request.open('GET', 'https://api.avgle.com/v1/videos/1', true);
const app = document.getElementById('root');
const container = document.createElement('div');
container.setAttribute('class', 'container');
app.appendChild(container);
request.onload = function () {
    if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(this.response)
        alert(data.response.videos[0].title)
        var arcrayList = data.response.videos
        var str = ""

        arcrayList.forEach(function (movie, index) {
            const card = document.createElement('div');
            card.setAttribute('class', 'card');
            const img = document.createElement('img');
            img.setAttribute('id','img-tag')
            img.src = movie.preview_url;
            const p = document.createElement('p');
            p.textContent = `${movie.title}`;
            p.setAttribute('id','title-tag')
            container.appendChild(card);
            card.appendChild(img);
            card.appendChild(p);
        });
    } else {
        const errorMessage = document.createElement('marquee');
        errorMessage.textContent = `Gah, it's not working!`;
        app.appendChild(errorMessage);
    }
}

request.send();