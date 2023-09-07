let btn = document.getElementById('btn');
const url = 'https://jsonplaceholder.typicode.com/users';

btn.addEventListener('click', function () {
    let name = document.getElementById('name').value;
    let sname = document.getElementById('sname').value;
    let date = document.getElementById('date').value;

    console.log(name, sname, date);

    fetch(url, {
        headers: { "Content-Type": "application/json; charset=utf-8" },
        method: 'POST',
        body: JSON.stringify({
            nombre: name,
            apellido: sname,
            fecha: date
        })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
});