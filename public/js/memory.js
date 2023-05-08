const createFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#memory_name').value.trim();
    console.log(name);
    const description = document.querySelector('#memory_description').value.trim();
    console.log(description);
    const MSRP = document.querySelector('#memory_msrp').value.trim();
    console.log(MSRP);
    const ourPrice = document.querySelector('#memory_price').value.trim();
    console.log(ourPrice);
    const storage = document.querySelector('#memory_storage').value.trim();
    console.log(storage);

    if (name && description && MSRP && ourPrice && storage) {
        const response = await fetch('/upload/memory', {
            method: 'POST',
            body: JSON.stringify({ name, description, MSRP, ourPrice, storage }),
            headers: { 'Content-Type': 'application/json' },
        });
        console.log("MAde Pot")
        if (response.ok) {
            document.location.replace('/profile');
        }
        else {
            alert("Must enter a valid MSRP and price.")
        }
    };
};
document
    .querySelector('#memory_submit')
    .addEventListener('click', createFormHandler);
