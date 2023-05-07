const searchFormHandler = async (event) => {
    event.preventDefault();
    console.log('search button');

    const keyword = document.querySelector('#search-form').ariaValueMax.trim;

    const response = await fetch('/', {
        method: 'POST',
        body: JSON.stringify({ keyword }),
        headers: { 'Content-Type': 'application/json' },
    });
};

document
  .querySelector('.search-form')
  .addEventListener('submit', searchFormHandler);


