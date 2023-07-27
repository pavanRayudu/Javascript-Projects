var category = "happiness";
const apikey = "E6jRzSdLnKM7DP5gGpNjuw==QOJdyOpO1k08VwSx";
const url = "https://api.api-ninjas.com/v1/quotes";
let random = Math.floor(Math.random(10) * 251);
let random2 = Math.floor(Math.random(10) * 251);
let random3 = Math.floor(Math.random(10) * 251);
const list = document.querySelector(".liked_list");
const like_button = document.getElementById("like_button")

let quotes_list = JSON.parse(localStorage.getItem("list")) || [];
console.log(quotes_list);

if(localStorage.getItem('list')){
    quotes_list.map((ele) =>{
        createLikedQuote(ele)
    })
}

async function generateQuote() {
  const res = await fetch(url, { headers: { "X-Api-Key": apikey } }).then(
    (res) => res.json()
  );

  document.querySelector(
    ".main"
  ).style.background = `rgb(${random},${random2},${random3})`;
  document.getElementById("quote").innerHTML = res[0].quote;
  document.getElementById("author").innerHTML = "-" + res[0].author;
  const list = {
    quote: res[0].quote,
    author: res[0].author,
  };
  like_button.addEventListener("click", () => {
    quotes_list.push(list);
    createLikedQuote(list)
    like_button.setAttribute('disabled', true)
    document.getElementById('like_icon').style.color = 'red'

    save();
  });
}
function save() {
  let data = JSON.stringify(quotes_list);
  localStorage.setItem("list", data);
}

generateQuote();

const button = document.getElementById("showLikedQuotes");
let state = false;
button.addEventListener("click", () => {
  state = !state;
  list.style.display = state ? "flex" : "none";
});

function createLikedQuote(ele) {
    const liked_quotes_list_item = document.createElement('div');
    liked_quotes_list_item.classList.add('liked_quotes_list-item');

    const liked_quote = document.createElement('span');
    liked_quote.setAttribute('id','liked_quote');
    liked_quote.innerHTML = ele.quote;
    const liked_quote_author = document.createElement('span');
    liked_quote_author.id= "liked_quote_author";
    liked_quote_author.innerHTML = ele.author;

    liked_quotes_list_item.appendChild(liked_quote);
    liked_quotes_list_item.appendChild(liked_quote_author);
    list.append(liked_quotes_list_item)
}
