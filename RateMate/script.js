const BASE_URL =
  "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");
const exchangeRateBtn = document.querySelector("button");
const fromCurrency = document.querySelector("#from-currency");
const toCurrency = document.querySelector("#to-currency");
const exchangeRateMsg = document.querySelector(".currency-exchange-rate");

// Currency Code Dropdown
for (let select of dropdowns) {
  for (const currencyCode in currencies) {
    let newOption = document.createElement("option");
    newOption.innerText = currencyCode;
    newOption.value = currencyCode;

    // Default 'from' value
    if (select.name === "from-currency" && currencyCode === "USD") {
      newOption.selected = "selected";
    }
    // Default 'to' value
    else if (select.name === "to-currency" && currencyCode === "INR") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }

  select.addEventListener("change", (e) => {
    updateFlag(e.target);
  });
}

// Update the country flag field
const updateFlag = (e) => {
  let currencyCode = e.value;
  let countryCode = currencies[currencyCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = e.parentElement.querySelector("img");
  img.src = newSrc;
};

// Get the exchange rates for the country
const updateExchangeRate = async () => {
  let inputAmt = document.querySelector(".amount input ");
  let inputAmtValue = inputAmt.value;

  if (inputAmtValue < 1 || inputAmtValue == " ") {
    inputAmt.value = 1;
    inputAmtValue = 1;
  }

  // Constructing the URL from the selected option
  let currency =
    fromCurrency.options[fromCurrency.selectedIndex].value.toLowerCase();
  let currency2 =
    toCurrency.options[toCurrency.selectedIndex].value.toLowerCase();

  const URL = `${BASE_URL}/${currency}.json`;

  const response = await fetch(URL);
  const data = await response.json();

  const rate = data[currency][currency2] / data[currency][currency];

  let finalAmount = rate * inputAmtValue;

  exchangeRateMsg.innerText = `1 ${currency.toUpperCase()} = ${finalAmount.toFixed(
    2
  )} ${currency2.toUpperCase()}`; // 1 USD = 84 INR
};

exchangeRateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  updateExchangeRate();
});

// Load the default currency rate on window load
window.addEventListener("load", async () => {
  updateExchangeRate();
});

// Get the currency list with EUR as base currency:
// https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json
//                                                       /currencies/{currencyCode}.json
// json = fetchJSON(`/currencies/{fromCurrency}`)
// rate = json[fromCurrency][toCurrency]
