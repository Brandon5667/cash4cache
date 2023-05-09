const createFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#cpu_name').value.trim();
    console.log(name);
    const description = document.querySelector('#cpu_description').value.trim();
    console.log(description);
    const brand = document.querySelector('#cpu_brand').value.trim();
    console.log(brand);
    const MSRP = document.querySelector('#cpu_msrp').value.trim();
    console.log(MSRP);
    const ourPrice = document.querySelector('#cpu_price').value.trim();
    console.log(ourPrice);
    const cores = document.querySelector('#cpu_cores').value.trim();
    console.log(cores);
    const threads = document.querySelector('#cpu_threads').value.trim();
    console.log(threads);

    if (name && description && brand && MSRP && ourPrice && cores && threads) {
        const response = await fetch('/upload/cpu', {
            method: 'POST',
            body: JSON.stringify({ name, description, brand, MSRP, ourPrice, cores, threads }),
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
    .querySelector('#cpu_submit')
    .addEventListener('click', createFormHandler);