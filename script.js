const getSumBtn = document.createElement("button");
const getAllprice = document.querySelectorAll("td:last-child");
const table = document.querySelector("#table");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  //Add your code here
  let totalSum = 0;
  for (let i of getAllprice) totalSum += parseFloat(i.textContent);
  const row = table.insertRow(table.children[1].childElementCount);
  const totalPrice = row.insertCell(0);
  const price = row.insertCell(1);
  totalPrice.textContent = "Total Price";
  price.textContent = `${totalSum}`;
};

getSumBtn.addEventListener("click", getSum);
