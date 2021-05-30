const pizzas = [
    {
        id: 1,
        sabor: "Quatro Queijos",
        categoria: "Salgada",
        preco: 15
    },
    {
        id: 2,
        sabor: "Morango com Nutela",
        categoria: "Doce",
        preco: 30
    },
    {
        id: 3,
        sabor: "Brócolis",
        categoria: "Vegetariana",
        preco: 35
    },
    {
        id: 4,
        sabor: "Lombo canadense",
        categoria: "Salgada",
        preco: 25
    },
];

const listarTodasAsPizzas = () => {
    let conteudo = "";

    pizzas.forEach((pizza) => {
        conteudo += `
        id: ${pizza.id}
        Sabor: ${pizza.sabor}
        Categoria: ${pizza.categoria}
        Preço: ${pizza.preco}
        `
    });

    return conteudo;
};


const adicionarPizza = function(sabor, categoria, preco) {
    const pizzaNova = {
        id: pizzas[pizzas.length -1].id + 1,
        sabor,
        categoria,
        preco
    };
    pizzas.push(pizzaNova);
    console.log(`A pizza de ${sabor} foi adicionada com sucesso!`)
};


adicionarPizza("Presunto", "Salgado", 25);
adicionarPizza("Catupiry", "Salgado", 40)
console.log(listarTodasAsPizzas());

const infoPizza = (pizza) => {
    function buscarPizza(sabor){
        return sabor.sabor === pizza;
    }
    console.log(pizzas.find(buscarPizza));
}
infoPizza("Catupiry")

