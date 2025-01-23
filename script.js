function copyfunction() {
    navigator.clipboard.writeText('<a href="https://skysyrup.dev/" alt="skysyrup link"><img src="https://skysyrup.dev/assets/skysyrup_webbutton.png" alt="web button for skysyrup.dev"></a>');

    // Alert the copied text
    alert("Copied the text: " + copyText.value);
}

function sendNotification() {
    if (document.getElementById("nfty-input").value.length <= 0) return
    currentTime = new Date();
    fetch('https://ntfy.skysyrup.dev/pushFromWebsiteYayyyyy', {
        method: 'POST',
        body: "sent at " + currentTime,
        headers: { 'Title': document.getElementById("nfty-input").value}
    })
    
}

const cats = ['Susie', 'Calvin', 'Helmut'];

const catImages = {
    'Susie': [
        "susie/69229805980__9ED5004E-C917-4AEE-963C-A215742E8FDC.png",
        "susie/IMG_1828.png",
        "susie/IMG_3648.png",
        "susie/IMG_3803.png",
        "susie/IMG_3829.png",
        "susie/IMG_3870.png",
        "susie/IMG_3919.png",
        "susie/IMG_4035.png",
        "susie/IMG_1633.png",
        "susie/IMG_2047.png",
        "susie/IMG_3649.png",
        "susie/IMG_3805.png",
        "susie/IMG_3834.png",
        "susie/IMG_3916.png",
        "susie/IMG_3920.png",
        "susie/IMG_1710.png",
        "susie/IMG_3250.png",
        "susie/IMG_3713.png",
        "susie/IMG_3807.png",
        "susie/IMG_3860.png",
        "susie/IMG_3918.png",
        "susie/IMG_4014.png"
    ],
    'Calvin': [
        "calvin/69196053068__FD6FC2E9-EB00-4772-AA28-B8836CE462BF.png",
        "calvin/IMG_1697.png",
        "calvin/IMG_1828.png",
        "calvin/IMG_3001.png",
        "calvin/IMG_3500.png",
        "calvin/IMG_3650.png",
        "calvin/IMG_3699.png",
        "calvin/IMG_3920.png",
        "calvin/69228843954__956D98BC-C9A4-4620-B0FF-A8F213ACA3D8.png",
        "calvin/IMG_1698.png",
        "calvin/IMG_1830.png",
        "calvin/IMG_3033.png",
        "calvin/IMG_3502.png",
        "calvin/IMG_3651.png",
        "calvin/IMG_3731.png",
        "calvin/IMG_3938.png",
        "calvin/69506402998__6C561C85-3C5D-4F49-A941-AD553E3B5DF7.png",
        "calvin/IMG_1714.png",
        "calvin/IMG_2030.png",
        "calvin/IMG_3263.png",
        "calvin/IMG_3542.png",
        "calvin/IMG_3670.png",
        "calvin/IMG_3801.png",
        "calvin/IMG_4027.png",
        "calvin/69826195512__A04C87B3-4D18-4232-B18B-85986676B0B9.png",
        "calvin/IMG_1728.png",
        "calvin/IMG_2031.png",
        "calvin/IMG_3276.png",
        "calvin/IMG_3631.png",
        "calvin/IMG_3681.png",
        "calvin/IMG_3855.png",
        "calvin/IMG_4028.png",
        "calvin/69849643662__AF9BEB50-49C3-4662-8ADA-63EAB7F3C6E5.png",
        "calvin/IMG_1772.png",
        "calvin/IMG_2906.png",
        "calvin/IMG_3314.png",
        "calvin/IMG_3635.png",
        "calvin/IMG_3685.png",
        "calvin/IMG_3870.png",
        "calvin/IMG_4061.png",
        "calvin/IMG_1639.png",
        "calvin/IMG_1827.png",
        "calvin/IMG_2927.png",
        "calvin/IMG_3315.png",
        "calvin/IMG_3648.png",
        "calvin/IMG_3698.png",
        "calvin/IMG_4086.png"
    ],
    'Helmut': [
        "helmut/69576217057__DD107E89-6B75-47F0-959C-CEEF0CA3B262.png",
        "helmut/IMG_0311.png",
        "helmut/IMG_1827.png",
        "helmut/IMG_3508.png",
        "helmut/IMG_3660.png",
        "helmut/IMG_3874.png",
        "helmut/IMG_3984.png",
        "helmut/IMG_4002.png",
        "helmut/IMG_0287.png",
        "helmut/IMG_1631.png",
        "helmut/IMG_1828.png",
        "helmut/IMG_3509.png",
        "helmut/IMG_3671.png",
        "helmut/IMG_3998.png",
        "helmut/IMG_4063.png",
        "helmut/IMG_0309.png",
        "helmut/IMG_1730.png",
        "helmut/IMG_1866.png",
        "helmut/IMG_3510.png",
        "helmut/IMG_3702.png",
        "helmut/IMG_3904.png",
        "helmut/IMG_3999.png",
        "helmut/IMG_0310.png",
        "helmut/IMG_1735.png",
        "helmut/IMG_2047.png",
        "helmut/IMG_3642.png",
        "helmut/IMG_3812.png",
        "helmut/IMG_3983.png",
        "helmut/IMG_4001.png"
    ]
};


let correctCat = '';

function startGame() {
    document.getElementById('result').textContent = '';
    const randomCat = cats[Math.floor(Math.random() * cats.length)];
    correctCat = randomCat;
    const images = catImages[randomCat];
    const randomImage = images[Math.floor(Math.random() * images.length)];
    document.getElementById('cat-image').src = randomImage;
    generateOptions();
}

function generateOptions() {
    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';
    const shuffledCats = cats.sort(() => 0.5 - Math.random());
    shuffledCats.forEach(cat => {
        const button = document.createElement('button');
        button.textContent = cat;
        button.classList.add('btn', 'btn-primary'); // Added for styling
        button.onclick = () => checkAnswer(cat);
        optionsDiv.appendChild(button);
    });
}


function checkAnswer(selectedCat) {
    if (selectedCat === correctCat) {
        document.getElementById('result').textContent = 'Correct!';
    } else {
        document.getElementById('result').textContent = `Wrong! It was ${correctCat}.`;
    }
}

window.onload = startGame;
