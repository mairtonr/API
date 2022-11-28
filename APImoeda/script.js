const url = "https://economia.awesomeapi.com.br/last/"
const moedas = ["USD-BRL", "BRL-USD", "EUR-BRL", "BRL-EUR", "EUR-USD", "USD-EUR"]
const converter = document.querySelector("#btn-1")
const input2 = document.getElementById("input_2")
const limpar = document.querySelector("#btn-2")
var input = document.getElementById('input_1')

converter.addEventListener('click', (event) => {
    event.preventDefault()

    let select1 = document.querySelector('#moedas_1').value
    let select2 = document.querySelector('#moedas_2').value


    fetch(`${url}${select1}-${select2}`).then(response => response.json().then(data => {

            var input1 = input.value
        
                if ((select1 ===  select2)) {
                    input2.value = input1
                    console.log("aaa")
                }  
         
           else if (select1 == "BRL") {
                if (select2 == "USD") {
                    let valor1 = (data.BRLUSD.high * input1).toFixed(3)
                    input2.value = valor1
                }
               else {
                    let valor1 = (data.BRLEUR.high * input1).toFixed(3)
                    input2.value = valor1
                }
            }

            else if (select1 == "USD") {
                if (select2 == "BRL") {
                    let valor1 = (data.USDBRL.high * input1).toFixed(3)
                    input2.value = valor1
                }
               else {
                    let valor1 = (data.USDEUR.high * input1).toFixed(3)
                    input2.value = valor1
                }
            }

            else if (select1 == "EUR") {
                if (select2 == "BRL") {
                    let valor1 = (data.EURBRL.high * input1).toFixed(3)
                    input2.value = valor1
                }
               else {
                    let valor1 = (data.EURUSD.high * input1).toFixed(3)
                    input2.value = valor1
                }
            }
    }))
})

            
limpar.addEventListener('click',() =>{
    input.value = ""
    input2.value = ""
})