const revenueInput = document.getElementById("revenue");
const orderValueInput = document.getElementById("orderValue");
const leadRateInput = document.getElementById("leadRate");
const prospectRateInput = document.getElementById("prospectRate");

const customersText = document.getElementById("customers");
const leadsText = document.getElementById("leads");
const prospectsText = document.getElementById("prospects");

function calculate() {

  const revenue = Number(revenueInput.value);
  const orderValue = Number(orderValueInput.value);
  const leadRate = Number(leadRateInput.value);
  const prospectRate = Number(prospectRateInput.value);

  const customers = revenue / orderValue;

  const leads = customers * 100 / leadRate;

  const prospects = leads * 100 / prospectRate;

  customersText.textContent = Math.round(customers);
  leadsText.textContent = Math.round(leads);
  prospectsText.textContent = Math.round(prospects);
}

revenueInput.addEventListener("input", calculate);
orderValueInput.addEventListener("input", calculate);
leadRateInput.addEventListener("input", calculate);
prospectRateInput.addEventListener("input", calculate);

calculate();