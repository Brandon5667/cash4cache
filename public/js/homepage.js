const searchFormHandler = async (event) => {
    event.preventDefault();
    console.log('search button');

    const keyword = document.querySelector('#search-form').value.trim();

    const response = await fetch('/search', {
        method: 'POST',
        body: JSON.stringify({ keyword }),
        headers: { 'Content-Type': 'application/json' },
    }).then( 
        data => {
            console.log("data",data);
        }
    );
};

// document
//   .querySelector('#search-button')
//   .addEventListener('click', searchFormHandler);

const contactButton = document.getElementById("contact-seller");

contactButton.addEventListener("click", ()=>{
    document.location.replace('/mail')
});
