function insertAfter(elem, refElem) {
    refElem.after(elem);
}

let element = document.createElement('div');
element.setAttribute('id', 'third');
element.innerHTML = 'third';

insertAfter(element, document.getElementById('second'));
