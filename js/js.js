const quotes = [
    {
      quote:
        "Life is too short and sweet to be spent by cribbing and complaining about things. Here are some random quotes about the most wonderful gift that we've got",
      author: " Life"
    },
    {
      quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe",
      author: "Albert Einstein"
    },
    {
      quote: "Be yourself; everyone else is already taken.",
      
      author: "Oscar Wilde"
    },
    {
      quote: "The price of anything is the amount of life you exchange for it.",
      author: "David Thoreau"
    },
    {
      quote: "You only live once, but if you do it right, once is enough.",
      author: "Mae West"
    },
    {
      quote: "In three words I can sum up everything I've learned about life: it goes on.",
      author: "Robert Frost"
    },
    {
        quote: "If you tell the truth, you don't have to remember anything.",
        author: "Mark Twain"
      },
      {
        quote: "Live as if you were to die tomorrow. Learn as if you were to live forever",
        author: "Mahatma Gandhi"
      },
      {
        quote: "We accept the love we think we deserve.",
        author: "Stephen Chbosky, The Perks of Being a Wallflower"
      },
      {
        quote: "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.",
        author: "H. Jackson Brown Jr., P.S. I Love You"
      },
  ];

let myBtn = document.getElementById("myBtn");
let quoteText = document.getElementById("quote");
let author = document.getElementById("author");

myBtn.addEventListener("click", function(){
    let randomValue = Math.floor(Math.random() * quotes.length);
    quoteText.innerHTML = quotes[randomValue].quote;
    author.innerHTML = quotes[randomValue].author;


})


