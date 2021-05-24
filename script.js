//getters for objects needed.
let input = document.querySelector('#add');
let btn = document.querySelector('#btn');
let list = document.querySelector('#list');
let el = document.getElementsByTagName('li');

//function for adding elements on button click.
btn.addEventListener('click',() => {
    let text = input.value;
    if (text === "")
    {
        alert('Please Enter An Item To Add.');
    }
    else
    {
        let li = document.createElement('li');
        li.innerHTML = text;
        list.insertBefore(li, list.childNodes[0]);
        input.value = '';
    }
})

//function for marking an element done
list.addEventListener('click',e => {
    if (e.target.tagName == 'LI')
    {
        e.target.classList.toggle('checked')
    }
})