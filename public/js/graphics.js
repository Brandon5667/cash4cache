const createFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#graphics_name').value.trim();
    console.log(name);
    const description = document.querySelector('#graphics_description').value.trim();
    console.log(description);
    const MSRP = document.querySelector('#graphics_msrp').value.trim();
    console.log(MSRP);
    const ourPrice = document.querySelector('#graphics_price').value.trim();
    console.log(ourPrice);
    const clockSpeed = document.querySelector('#graphics_clockSpeed').value.trim();
    console.log(clockSpeed);

    if (name && description && MSRP && ourPrice && clockSpeed) {
        const response = await fetch('/upload/graphics', {
            method: 'POST',
            body: JSON.stringify({ name, description, MSRP, ourPrice, clockSpeed }),
            headers: { 'Content-Type': 'application/json' },
        });
        console.log("Made Post")
        if (response.ok) {
            document.location.replace('/profile');
        }
        else {
            alert("Must enter a valid MSRP and price.")
        }
    };
};
document
    .querySelector('#graphics_submit')
    .addEventListener('click', createFormHandler);