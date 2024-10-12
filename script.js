
document.addEventListener('DOMContentLoaded', function() {
  const phrases = [
      "(◕‿◕)",
      "i hope this js doesn't break",
      "science isn't about why, it's about WHY NOT!",
      "i may potentially not be very cis",
      "mia is a good girl",
      "how much wood would a woodchuck chuck if a woodchuck could chuck wood? such is a mystery...",
      "3257840388504953787 x=49 z=0",
      "16/16/16/16",
      "it's ultrakilling time",
      "Despite everything, it's still you.",
      "I CAN FINALLY ULTRAKILL MYSELF!!!!",
      "GIRL HELL 1999 FEMTANYL",
      "oh, don't mind         me",
      "hey VSAUCE, micheal here. how flexible... is your skin?",
      "What the fuck did you just fucking say about me, you little bitch? I'll have you know I graduated top of my class in the Navy Seals, and I've been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills. I am trained in gorilla warfare and I'm the top sniper in the entire US armed forces. You are nothing to me but just another target. I will wipe you the fuck out with precision the likes of which has never been seen before on this Earth, mark my fucking words. You think you can get away with saying that shit to me over the Internet? Think again, fucker. As we speak I am contacting my secret network of spies across the USA and your IP is being traced right now so you better prepare for the storm, maggot. The storm that wipes out the pathetic little thing you call your life. You're fucking dead, kid. I can be anywhere, anytime, and I can kill you in over seven hundred ways, and that's just with my bare hands. Not only am I extensively trained in unarmed combat, but I have access to the entire arsenal of the United States Marine Corps and I will use it to its full extent to wipe your miserable ass off the face of the continent, you little shit. If only you could have known what unholy retribution your little 'clever' comment was about to bring down upon you, maybe you would have held your fucking tongue. But you couldn't, you didn't, and now you're paying the price, you goddamn idiot. I will shit fury all over you and you will drown in it. You're fucking dead, kiddo.",
      '"Mortifying" Don\'t you mean "Gratifying?"',
      "once upon a time",
      "❤️☀️💔",
      "BITE ME",
      "nyanyanyaa, trotzdem da, Katzenohren-Antifa",
      'Here come the test results: "You are a horrible person." That\'s what it says: a horrible person. We weren\'t even testing for that.',
      "The automobile brake was not invented until 1895. Before this, someone had to remain in the car at all times, driving in circles until passengers returned from their errands",
      "SPAAAAAAAAAAAAAAAAAAAAAAAAAAACE",
      "Have you tried turning it on and off again",
      '<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" alt="never gonna give you up link">a completely normal link that you should click</a>',
      "You, [subject name here], must be the pride of [subject hometown here]",
      "<p alt=\"I\'m making a note here: HUGE SUCCESS!!\">This Was A Triumph</p>",
      "You wouldn't download a car...",
      "Fuck Furball",
      "hatsune miku does not talk to british people",
      '<img src="assets/catgirl.png" alt="a meme with the text \"yes i\'m a catgirl yes i love other catgirls its 2008. get over it\" with a anime-style female drawing in the background">',
      "Mankind Is Dead.<br>Blood Is Fuel.<br>Hell Is Full.",
      "THY END IS NOW!!!",
      "<img src='assets/thesilly.jpg' alt='cyn from murder drones with the caption \"I have personally killed 12 TRILLION PEOPLE\"'>",
      '\"But there are multiple cats in this image\" - &#129299;',
      "let's just say i'm. yknow. straight up surfin' it",
      "I'm not a cat, I'm a catgirl!!!!!!!!!!!!!!!!!!!!!!",
      "did you know that on average, a cat will spend 2 to 3 years of its life cleaning itself?",
      "i am making 99% of these facts up",
      "human, i remember your transgenders",
      "did you know that cats are the most popular pet in the united states?",
      "human, i remembr you're genocides"

  ];

  function getRandomInt(max) {
      return Math.floor(Math.random() * max);
  }

  const randomTextElement = document.getElementById('changingtext');

  randomTextElement.innerHTML = phrases[getRandomInt(phrases.length)];
});

function copyfunction() {
  navigator.clipboard.writeText('<a href="https://skysyrup.dev/" alt="skysyrup link"><img src="https://skysyrup.dev/assets/skysyrup_webbutton.png" alt="web button for skysyrup.dev"></a>');

  // Alert the copied text
  alert("Copied the text: " + copyText.value);
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
        "calvin/IMG_3873.png",
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
