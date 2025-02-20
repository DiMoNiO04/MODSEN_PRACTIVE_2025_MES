async function fetchWithTimeout(url, timeout) {
  const controller = new AbortController();
  const signal = controller.signal;

  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    return await fetch(url, { signal });
  } catch(e) {
    if(e.name === 'AbortError') {
      throw new Error('Request timed out')
    }
    throw e;
  } finally {
     clearTimeout(timeoutId);
  }
}

fetchWithTimeout("https://jsonplaceholder.typicode.com/todos/1", 1000)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(e => console.error(e))