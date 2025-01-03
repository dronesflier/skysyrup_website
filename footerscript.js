
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
    "let's just say i'm. yknow. straight up pullin' it",
    "world is mine",
    "did you know that on average, a cat will spend 2 to 3 years of its life cleaning itself?",
    "i am making 99% of these facts up",
    "human, i remember your transgenders",
    "four fucking pixels",
    "human, i remember you're genocides",
    "hey, it's me! hi me!",
    "<href='https://ddosecrets.com/' <p>https://ddosecrets.com/</p> :3",
    "i know what you are",
    "SCP-6133",
    "<img src='assets/skiplogosmall.png' alt='scp foundation logo'><br>The following is a message composed via consensus of the O5 Council.<br>For those who are not currently aware of our existence, we represent the organization known as the SCP Foundation.<br><br>Our previous mission centered around the containment and study of anomalous objects, entities and other assorted phenomena. This mission was the focus of our organization for more than one-hundred years.Due to circumstances outside of our control, this directive has now changed.Our new mission will be the extermination of the human race.<br>There will be no further communication.",
    "..they were.. disgusting",

];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const randomTextElement = document.getElementById('changingtext');

randomTextElement.innerHTML = phrases[getRandomInt(phrases.length)];
