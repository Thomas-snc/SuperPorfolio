document.addEventListener("DOMContentLoaded", e => {
    e.preventDefault();
    let button = document.querySelector("main section.theme-download-button button");
    button.addEventListener("click", () => {
        e.preventDefault();
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your download is good',
            showConfirmButton: false,
            timer: 1500
        })
    });

});