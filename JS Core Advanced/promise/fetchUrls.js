const urls = [
  'https://jsonplaceholder.typicode.com/todos/1',
  'https://jsonplaceholder.typicode.com/todos/2',
  'https://jsonplaceholder.typicode.com/todos/3'
]

Promise
  .all(urls.map(url => fetch(url).then(response => response.json())))
  .then(data => console.log(data))
  .catch(error => console.error('Error', error))