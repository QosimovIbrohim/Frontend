let defaultData = {
    Image: "/images/tarvuz.jpg",
    title: "Tarvuz",
    desc: "Juda ham mazali poliz ekini."
};
var cards = [defaultData];
showCards();
var ids = 1;

function addCard() {
    var card = {
        Image: document.getElementById("img-path").value,
        title: document.getElementById("crd-title").value,
        desc: document.getElementById("txt-area").value
    };
    cards.push(card);
    ids++;
    showCards();
}

function showCards() {
    var container = document.querySelector('.container');
    container.innerHTML = '';
    cards.forEach(function(card, index) {
        var cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.style.width = '18rem';

        cardElement.innerHTML = `
            <p id="uuid${index}" style="display: none;"></p>
            <img src="${card.Image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${card.title}</h5>
                <p class="card-text">${card.desc}</p>
            </div>
            <hr>
            <div class="card-body flex f-c">
                <a href="#" class="btn btn-danger">Delete</a>
                <a href="#" class="btn btn-primary">Update</a>
            </div>
        `;

        container.appendChild(cardElement);
    });
}
