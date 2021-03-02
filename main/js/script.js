const pageView = document.querySelector('.view-count')
const range = document.querySelector('.card__range')
const cost = document.querySelector('.cost')
const discount = document.querySelector('.check')
const period = document.querySelector('.period')

range.addEventListener('input', costCount)
discount.addEventListener('input', periodChange)

function periodChange() {

    if (discount.checked === false) {
        period.textContent = 'month'
    } else {
        period.textContent = 'year'
    } 

    costCount()

}

function sale() {

    if (discount.checked === true) {
        cost.textContent = `${(cost.textContent - (cost.textContent * .25)) * 12}`
    }

}

function costCount(){
  
    switch (range.value) {
        case '1':
            pageView.textContent = '10K '
            cost.textContent = '8'
            break;
        case '2':
            pageView.textContent = '50K '
            cost.textContent = '12'
            break;
        case '3':
            pageView.textContent = '100K '
            cost.textContent = '16'
            break;
        case '4':
            pageView.textContent = '500K '
            cost.textContent = '24'
            break;
        case '5':
            pageView.textContent = '1M '
            cost.textContent = '36'
            break;
    }

    sale()

}


class A {
    
}