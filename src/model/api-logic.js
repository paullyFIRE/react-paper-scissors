export const fetchData = (path, request, callback) => {
  let domain = process.env.NODE_ENV !== 'production' ? 'http://159.65.21.186/' : '/';

  if (request.method == 'GET') {
    fetch(domain + path)
      .then(response => response.json())
      .then(callback)
      .catch(callback);
  } else if (request.method == 'POST') {
    fetch(domain + path, {
      method: 'POST',
      body: JSON.stringify(request.data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(callback)
      .catch(callback);
  }
};
