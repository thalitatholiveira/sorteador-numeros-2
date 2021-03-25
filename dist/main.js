function onClickButton() {
    const amountSort = document.getElementById("amount").value;
    let min = document.getElementById("minimo").value;
    let max = document.getElementById("maximo").value;

    min = Math.ceil(min);
    max = Math.floor(max);

    let sort = [];

    for (let i = 0; i < amountSort; i++) {
        const sortedNumber = Math.floor(Math.random() * (max - min + 1)) + min;   
        sort.push(sortedNumber);     
    }

    let htmlSortedNumbers = '';

    for (let i = 0; i < sort.length; i++) {
        htmlSortedNumbers = `${htmlSortedNumbers}<p>${sort[i]}</p>`;
    }

    document.getElementById("result").innerHTML = `
        <div class="result-container">
            ${htmlSortedNumbers}
        </div>
    `;
}