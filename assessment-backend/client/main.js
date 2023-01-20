const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4002/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)

const fortuneBtn = document.getElementById ("fortuneButton")

const getFortune = () => {
    console.log("hello!")
    axios.get("http://localhost:4002/api/fortune")
        .then(res => { 
            const data = res.data;
            alert(data);
        });
};
fortuneBtn.addEventListener('click', getFortune)

const happyfactsBtn = document.getElementById("happyfactsButton")

const getHappyfact = () => {
    axios.get("http://localhost:4002/api/happyfacts/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

happyfactsBtn.addEventListener('click', getHappyfact)

const goodnewsBtn = document.getElementById("goodnewsButton")

const getgoodnews = () => {
    axios.get("http://localhost:4002/api/goodnews/")
        .then(res => {
            const data = res.data;
            alert(data);
        });
};

goodnewsBtn.addEventListener('click', getgoodnews)

const codingrocksBtn = document.getElementById("codingrocksButton")

const getcodingrocks = () => {
    axios.get("http://localhost:4002/api/codingrocks/")
        .then(res => {
            const data = res.data;
            alert(data);
        });
};

codingrocksBtn.addEventListener('click', getcodingrocks)






