module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortune = ["A faithful friend is a strong defense", "A dubious friend may be an enemy in camouflage","A beautiful, smart, and loving person will be coming into your life", "A feather in the hand is better than a bird in the air", "A feather in the hand is better than a bird in the air"];

        let randomIndex = Math.floor(Math.random() * fortune.length);
        let randomFortune = fortune[randomIndex];

        res.status(200).send(randomFortune);
    
    },
    getHappyfact: (req, res) => {
        const happyfacts = ["Male Puppies Let Female Puppies Win Play Fights", "Night Rainbows Are Real. They're Called Moonbows", "Penguins Propose and Stick Together for Life", "Forcing a Smile Actually Makes You Happier"];
      
        let randomIndex = Math.floor(Math.random() * happyfacts.length);
        let randomHappyfacts = happyfacts[randomIndex];
      
        res.status(200).send(randomHappyfacts);
    },
    getgoodnews: (req, res) => {
        const goodnews =["Utah is getting more snow then in a long time, ending the drought", "It is a new year!", "I got a fish the other day!","Me and my wife moved to a bigger apartment for less money!"]
        
        let randomIndex = Math.floor(Math.random() * goodnews.length);
        let randomgoodnews = goodnews[randomIndex];
      
        res.status(200).send(randomgoodnews);
    },
    
    getcodingrocks: (req, res) => {
        const codingrocks =["You get to be in of the most popular professions", "You get to understand the electronics you love", "You learn to adapt and work hard everyday", "You get to meet new and awesome people!"]
        
        let randomIndex = Math.floor(Math.random() * codingrocks.length);
        let randomcodingrocks = codingrocks[randomIndex];
      
        res.status(200).send(randomcodingrocks);
    }
}   