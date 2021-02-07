window.onload = function() {

    const number = ["A","2","3","4","5","6","7","8","9","J","Q","K"];
    const symbol = ["&#9830","&#9829","&#9827","&#9824"];
    const color = ["red","black"];

    let cards = parseInt(Math.random() * (number.length));
    let symb = parseInt(Math.random() * (symbol.length));

    function newCard () {
        
        let card = document.querySelector(".card");
        card.className ='card';

        let symbUp = document.createElement('div');
        symbUp.className = 'symbUp';
        card.appendChild(symbUp);

        let spanUp = document.createElement('span');
        spanUp.innerHTML = symbol[symb];
        spanUp.style.color = color[symb];
        symbUp.appendChild(spanUp);

        let divNum = document.createElement('div');
        divNum.className= 'number';
        card.appendChild(divNum);

        let paragraph = document.createElement('p');
        paragraph.innerHTML = number[cards];
        paragraph.style.color = color[symb];
        divNum.appendChild(paragraph);

        let symbDown = document.createElement('div');
        symbDown.className = 'symbDown';
        card.appendChild(symbDown);

        let spanDown = document.createElement('span');
        spanDown.innerHTML = symbol[symb];
        spanDown.style.color = color[symb];
        symbDown.appendChild(spanDown);

        return card;

    }
    newCard()
};