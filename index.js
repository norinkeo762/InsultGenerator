// javascript - make sure you write a code that returns the photo of the person who quoted the insult along with the photo of the person
let insults = [
    "You look like a bag of farts. -Mo", //parse in photo
    "You look like you hold the crayon with your whole hand.",
    "You give off dirty booty hole vibes.",
    "You look like you take the box out of the garbage to re-read the instructions at least 3 times and still get the recipe wrong.",
    "You look like you're very familiar with getting back hands in the face.",
    "You are like a walking stroke.",
    "You are about as useful as a white crayon.",
    "Did you use a mud puddle as a mirror this morning?",
    "Were you carrying an umbrella when God was giving out beauty?",
    "I would call you a pussy. But you lack warmth and depth.",
    "If opposites attract, then I hope you meet someone who is attractive, honest, intelligent, and cultured.",
    "You should carry a plant around with you to replace the oxygen you waste.",
    "You look like a stepped-on sandcastle.",
    "You look like you snuck onto earth.",
    "I see that you’ve set aside this special time to humiliate yourself in public by going outside today.",
    "I bet the people that know you change the subject when their friends ask about you.",
    "If you had another brain, it would be lonely.",
    "You look like you eat buttons off the remote control.",
    "You look like you sleep on a stained mattress in a damp basement and the pillow you use was passed down from generation to generation.",
    "I envy everyone you have never met. — TheGarp",//parse photo
    "You’re not pretty enough to be that stupid.",
    "Somewhere out there, there’s a tree whose single purpose on earth is to replace the oxygen you waste. Go find it and apologize.",
    "Your heart is full of unwashed socks. -The Grinch(TV Show)",//parse photo
    "Some cause happiness wherever they go; others, whenever they go. — Oscar Wilde",//parse photo
    "Troglodye.",
    "Foul wench.",
    "You look like 6 wet bags of sand.",
    "You look like you enjoy ranch as a snack.",
    "You look like a melted candle. The ones that don't smell nice.",
    "You look like you don't clean your ass because you're afraid it will make you gay.",
    "You look like you chewed rocks recreationally as a child.",
    "You're a little touched.",
    "You look like you have to sneak up on a glass of water just to take a sip.",
    "You give off pedophile vibes.",
    "Who is this clown? You're not a very good one.",
    "You're trash hoping to be garbage.",
    "You look like your family tree is a wreath.",
    "Of all the millions of sperm, how were you the fittest?",
    "You are the load that your mother should have swallowed.",
    "You look like somthing that a vulture would eat.",
    "In the land of the witless, you would be king.",
    "I regard you with indifference bordering on adversion.",
    "Sometimes I need what only you can provide with your absence.",
    "You have delusions of adequacy.",
    "Isn’t it rather dangerous to use one’s entire vocabulary in a single sentence?",
    "The problem with closed minded people is that they're mouths are always open",
    "The trash got picked up this morning, it seems that you have missed your ride.",
    "You are not only stupid, you are the cause of stupid in other people who are unfortunate enough to be around you.",
    "Some people cause happiness whereever they go. You? You cause it whenever you go.",
    "You don't have to have enemies. I'm sure the fact that your friends hate you accounts for that.",
    "Mirrors can't talk. Luckily for you, they can't laugh either.",
    "You smell like hotdog water.",
    "You are the human form of period cramps.",
    "Your face makes onions cry.",
    "Why do you look easy to draw -- with my non-dominant hand.",
    "I'd give you a nasty look but you've already got one.",
    "Take my lowest priority and put everything about you beneath it.",
    "You're only purpose in this life is to be an organ donor.",
    "You make happy meals cry.",
    "You should shut your mouth when you're speaking.",
    "You are so ugly that when your mom dropped you off at school, she got a ticket for littering.",
    "If genius skips a generation, your children will be brilliant.",
    "Don't be ashamed of who you are. That's your parents' job.",
    "Your family tree must be a cactus 'cause you're all a bunch of pricks.",
    "You have an entire life to be an idiot. Why not take today off?",
    "You're everything I want in someone I don't want anymore.",
    "I don't know what your problem is, but I'm guessing it's hard to pronounce.",
    "You're easily ignorable.",
    "Good story, but in what chapter do you shut up?",
    "I'm just glad that you're stringing words into sentences now.",
    "You're my favorite person… besides every other person I've ever met.",
    "You smell better than you look.",
    "I've been called worse things by better men. — Pierre Trudeau on Richard Nixon",
    "You've got no more backbone than a chocolate éclair.",
    "I don't want to be rude but, really, you have the charisma of a damp rag and the appearance of a low-grade bank clerk.",
    "You're like a shiver waiting for a spine.",
    "Did you play too much football with the helmet off?",
    "Don't be so humble, you're not that great.",
    "You speak an infinite deal of nothing.",
    "If looks could kill, you'd soon find out that yours couldn't.",
    "May your genitals sprout wings and fly away.",
    "Go back to Party City, where you belong!",
    "Listen, you insignificant, square-toed, pimple-headed swine!",
    "Uncultured swine.",
    "Philistine.",
    "You're somewhere between a cockroach and that white stuff that accumulates at the corner of your mouth when you're really thirsty.",
    "Light travels faster than sound. This is why some people appear bright until they speak.",
    "He may look like an idiot and talk like an idiot but don't let that fool you—he really is an idiot.",
    "There's no need to tell me who you are; you're already showing me.",
    "In order for you to insult me I would first have to value your opinion.",
    "I can't imagine what qualities you may have that would compensate for your behavior in public.",
    "You look like I need a drink.",
    "You lack so much brain matter that you’d float on water.",
    "In what way are your parents related to each other?",
    "I’m jealous of how you can be so dumb.",
    "Don’t ever wear a burlap sack on your head. People won’t be able to tell where the sack started and where your face ended.",
    "Your face.",
    "What contraceptive do you use? Your face?",
    "Taking a picture of you would put a virus on my phone.",
    "Your birth certificate is a letter of apology from a condom manufacturer.",
    "There are a million words in the English language, and there’s no such way to combine them to describe how much I want to beat you with a chair.",
    "Your asshole must be so jealous of your mouth from all the shit it’s been spewing.",
    
    
    
]


let generateButton = document.getElementById("btn-el")
generateButton.addEventListener("click", function(){
    text();
})

let insultsEl = document.getElementById("insults-el")

function text() {
    let random = Math.floor(Math.random() * insults.length)
    console.log(insults[random])
    insultsEl.textContent = "Insult: " + insults[random];
    
}