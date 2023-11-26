// document.addEventListener("DOMContentLoaded", function () {
//     if (document.querySelector("meta[name='prerender-status-code']").getAttribute("content") === "404") {
//         // window.location.href = '../404.html';
//         console.log("ONI CHAN");
//     }
// });

function checkIfPageExists(htmlPage) {
    fetch(htmlPage)
        .then(response => {
            if (response.ok) {
                location.href = htmlPage;
            } else {
                location.href = "../404.html";
            }
        })
        .catch(error => console.error('Error:', error));
}
