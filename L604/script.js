function addListItem(list, itemContent) {
    let listItem = document.createElement('li');
    listItem.innerHTML = itemContent;
    list.append(listItem);
}
let list = document.getElementById('student-list');
let inputEmtpy = false;
while (!inputEmtpy) {
    let input = prompt('შეიტანე სტუდენტის სახელი', '');
    input != null ? input.length ? addListItem(list, input) : inputEmtpy = true : inputEmtpy = true;
}