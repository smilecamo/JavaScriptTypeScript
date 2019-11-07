let http = new easyHttp();

document.getElementById('button1').addEventListener('click', get);
document.getElementById('button2').addEventListener('click', post);
document.getElementById('button3').addEventListener('click', put);
// get
function get() {
  http.get('https://jsonplaceholder.typicode.com/users').then(res => {
    let html = '';
    res.forEach(value => {
      html += `<li>${value.username}<li>`;
    });
    document.getElementById('output').innerHTML = html;
  });
}
let data = {
  name: 'zhangsan',
  age: 18
};
let putData = {
  name: 'li',
  age: 18
};

// POST
function post() {
  http
    .post('https://jsonplaceholder.typicode.com/posts', data)
    .then(res => {
      document.getElementById('output').innerHTML = `
      <li>name:${res.name}</li>
      <li>age:${res.age}</li>
      
      `;
    })
    .catch(err => console.log(err));
}
// PUT
function put() {
  http
    .put('https://jsonplaceholder.typicode.com/posts/1', putData)
    .then(res => {
      document.getElementById('output').innerHTML = `
      <li>name:${res.name}</li>
      <li>age:${res.age}</li>
      
      `;
    })
    .catch(err => console.log(err));
}
