let btn= document.getElementById('btn');
let output= document.getElementById('output');
let quotes=[
    "If you don't build your dream, someone else will hire you to help them build theirs.-Tony Gaskins",
    "If you want to make your dreams come true, the first thing you have to do is wake up.-J.M. Power",
    '"The measure of intelligence is the ability to change" -Albert Einstein.',
    '“It is not death that a man should fear, but he should fear never beginning to live".— Marcus Aurelius, former Roman emperor.',
    '"The greatest discovery of all time is that a person can change his future by merely changing his attitude" -Oprah Winfrey.',
    'If life were predictable it would cease to be life, and be without flavor.',
    "I'm not here to be perfect, I'm here to be real.- Lady Gaga",
    "I'm not interested in money. I just want to be wonderful. - Marilyn Monroe",
    "The only thing that feels better than winning is winning when nobody thought you could.- Hank Aaron",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.- Winston Churchill",
    "If you can dream it, you can do it.- Walt Disney",
    "Don't let anyone tell you what you can't do. Follow your dreams and persist.- Barack Obama",
    "If you want something you've never had, you must be willing to do something you've never done.- Unknown",
    "Everything happens for a reason.- Unknown",
    "Life is what we make it and how we make it whether we realize it or not.- Napoleon Hill"

];

btn.addEventListener('click',function(event){
    var randomQuote=quotes[Math.floor(Math.random()*quotes.length)]
    output.innerHTML=randomQuote;
    console.log('button click',event)
})