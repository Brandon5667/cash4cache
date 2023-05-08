const createFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#memory_name').value.trim();
    const description = document.querySelector('#memory_description').value.trim();
    const msrp = document.querySelector('#memory_msrp').value.trim();
    const price = document.querySelector('#memory_price').value.trim();
    const storage = document.querySelector('#memory_storage').value.trim();

    if (name && description && msrp && price && storage) {
        const response = await fetch('/upload/memory', {
            method: 'POST',
            body: JSON.stringify({ name, description, msrp, price, storage }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            document.location.replace('/profile');
        }
        else {
            alert("Must enter all valid fields.")
        }
    };
};
document
    .querySelector('#memory_submit')
    .addEventListener('submit', createFormHandler);
