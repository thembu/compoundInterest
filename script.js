let p = document.getElementById("amount");
let r = document.getElementById("interest");
let n = document.getElementById("period");
let years = document.getElementById('years')
let months = document.getElementById('months')
let compound_period = document.getElementById('selector')
let res = document.getElementById("result");

let output;
let compound_time;
let period;

let Compound_interest = () => {

  period = Number(years.value) + Number(months.value/12)
  if(compound_period.value === 'yearly') compound_time = 1
  if(compound_period.value === 'quarterly') compound_time = 4
  if(compound_period.value === 'monthly') compound_time = 12


  let c_interest = Math.floor(
    Number(p.value) * Math.pow(1 + Number(r.value / 100)/(compound_time),period*compound_time)
  );

    output = `  
    <h3>${c_interest}
        
    </h3>
    `;
    res.innerHTML = output;
};

let simple_interest = () => {

  let si = Math.floor(Number(p.value)*(1 + Number(r.value/100 * Number(n.value))))

  output = `
     <h3> ${si} </h3
  `

  res.innerHTML = output

}

