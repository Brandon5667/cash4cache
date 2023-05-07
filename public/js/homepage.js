const searchFormHandler = async (event) => {
    event.preventDefault();
    console.log('search button');

    const keyword = document.querySelector('#search-form').value.trim();

    const response = await fetch('/', {
        method: 'POST',
        body: JSON.stringify({ keyword }),
        headers: { 'Content-Type': 'application/json' },
    });
};

document
  .querySelector('#search-button')
  .addEventListener('click', searchFormHandler);


