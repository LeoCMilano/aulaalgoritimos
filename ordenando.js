const nomes = ['JS','php','Java','Elixir','Go','Python'];
const precos = [25, 15,30,50,45,20];

const nomesEPrecos= [];

nomes.map(function(nome, i) {
    nomesEPrecos.push ([nome, precos[i]]);
});

const precosOrdenados = nomesEPrecos.sort((a,b)=>a[1]-b[1]);

console.log(precosOrdenados);