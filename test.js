// 1. Programming Basics
// 'Spaghetti', 'Lasagne', 'Beans on toast', 'Porridge', 'Tomato soup', 'Salmon'
// Create an array of the dishes listed above. Loop through the array using aforloop.
// 1.Log out all the dishes.
// 2.Log out a randomly chosen dish (randomly generated  index).

const dishes = [
  "Spaghetti",
  "Lasagne",
  "Beans on toast",
  "Porridge",
  "Tomato soup",
  "Salmon",
];

function fetchingDishes() {
  for (i = 0; i < dishes.length; i++) {
    console.log(dishes[i]);
  }
}
fetchingDishes();

function getRandomDish() {
  const getRandomArbitrary = function (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  };

  console.log(`Random dish is: ${dishes[getRandomArbitrary(0, 6)]}.`);
}
getRandomDish();

// 2. DOM manipulation
// Using JavaScript, create a button and add it to the html (the document)
// When the button is clicked:
// -Insert an h1 tag below the button with the text “Javascripttest”.
// -Change the background color of the document body.

const testBtn = document.createElement("button");
testBtn.innerHTML = "Test Button";
document.body.appendChild(testBtn);

const h1 = document.createElement("h1");
h1.innerHTML = "Javascripttest";

testBtn.addEventListener(
  "click",
  function () {
    document.body.style.backgroundColor = "orangered";
    document.body.after(h1);
  },
  { once: true }
);

// 3. Async API calls
// Make an API call using the Fetch API. Make use of the following API:
// https://reqres.in/api/users
// Display the first_name of the first three users in the DOM, using aloopor.map().
const getEmails = async function () {
  try {
    const response = await fetch(`https://reqres.in/api/users`);

    const data = await response.json();

    for (let i = 0; i <= 2; i++) {
      const pEl = document.createElement("p");
      const email = data.data[i].email;
      pEl.innerHTML = `Email of user id ${i + 1} is: ${email}`;
      document.body.after(pEl);
    }
  } catch (err) {
    console.error(`${err.message} 💣💥`);
  }
};

getEmails();

// 4. Class (optional)
// Create a class called “Person”. The constructor should have 1 parameter called
// firstname. It should have 1 method calledsayHellothat should log: 'Hello my name is
// <firstname>’.
// Here is an example:
// const peter = new Person('peter');
