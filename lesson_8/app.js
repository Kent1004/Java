'use strict';

let fitlerPopup = document.querySelector('.filterPopup');
let fitlerLabel = document.querySelector('.filterLabel');
let filterIcon = document.querySelector('.filterIcon');

fitlerLabel.addEventListener('click', function () {
    fitlerPopup.classList.toggle('hidden');
    fitlerLabel.classList.toggle('filterLabelPink');
    filterIcon.classList.toggle('filterIconPink');

    if (filterIcon.getAttribute('src') === 'images/filter.svg') {
        filterIcon.setAttribute('src', 'images/filterHover.svg')
    } else {
        filterIcon.setAttribute('src', 'images/filter.svg')
    }
});

let filterHeaders = document.querySelectorAll('.filterCategoryHeader');
filterHeaders.forEach(function (header) {
    header.addEventListener('click', function (event) {
        event.target.nextElementSibling.classList.toggle('hidden');
    })
});

let filterSizes = document.querySelector('.filterSizes');
let filterSizeWrap = document.querySelector('.filterSizeWrap');
filterSizeWrap.addEventListener('click', function () {
    filterSizes.classList.toggle('hidden');
});

/*  Открытие корзины и закрытие по клику на значке корзины*/
document.querySelector('.cartIcon').addEventListener('click', event => {
    const chart = document.querySelector('.cartOrder');
    if (chart.style.visibility === "hidden") {
        chart.style.visibility = "visible";
    } else {
        chart.style.visibility = "hidden";
    }
});

/* Добавление в коризну покупки при нажатии Add to chart */

document.querySelector('.featuredItems').addEventListener('click', event => {
    console.log(event.target.className)
    if (event.target.className === 'addcart') {


        let nameProduct = event.target.parentNode.parentNode.querySelector('.featuredName').innerText
        let priceProduct = event.target.parentNode.parentNode.querySelector('.featuredPrice').innerText
        let totalPrice = document.querySelector('.total')
        let productInchart = false;
        let totalPriceInt = 0;
        let counter = 0;
        let table = document.querySelector('table').getElementsByTagName('tbody')[0]
        if (table.rows.length != 0) {
            for (let i = 0; i < table.rows.length; i++) {
                if (table.rows[i].cells[0].innerHTML === nameProduct) {

                    table.rows[i].cells[1].innerHTML = +table.rows[i].cells[1].innerHTML + 1;
                    table.rows[i].cells[3].innerHTML = '$' + (+table.rows[i].cells[2].innerHTML.substring(1) + +table.rows[i].cells[3].innerHTML.substring(1)).toFixed(2);
                    productInchart = true;

                }
            }
        }
        if (!productInchart) {
            let newrow = table.insertRow();
            newrow.insertCell().append(nameProduct);
            newrow.insertCell().append(1);
            newrow.insertCell().append(priceProduct);
            newrow.insertCell().append(priceProduct);
        }
        for (let i = 0; table.rows.length != 0 && i < table.rows.length; i++) {
            counter += +table.rows[i].cells[1].innerHTML;
            totalPriceInt = (+totalPriceInt + +table.rows[i].cells[3].innerHTML.substring(1)).toFixed(2);
        }
        totalPrice.innerText = 'Итоговая сумма: $' + totalPriceInt;
        document.querySelector('.cartCounter').innerText = counter;

    }
})



