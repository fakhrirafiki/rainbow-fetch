console.log('about to fetch a rainbow');

async function catchRainbow() {
    const response = await fetch('rainbow.jpg');
    const blob = await response.blob();
    document.getElementById('rainbow').src = URL.createObjectURL(blob);

}

catchRainbow()
    .then(response => {
        console.log('yey')
    })
    .catch(err => {
        console.log(err)
    })

// fetch('rainbow.jpg')
//     .then(response => {
//         console.log(response);
//         return response.blob();
//     })
//     .then(blob => {
//         console.log(blob);
//         document.getElementById('rainbow').src = URL.createObjectURL(blob);
//     })
//     .catch(err => {
//         console.log(err)
//     })