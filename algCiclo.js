let num = parseInt(prompt("Ingrese el año actual"))
let resta = 0
for (let i=0; i<5; i++){
    let num2 = parseInt(prompt("Ingrese el año de nacimiento de 5 personas para saber su edad actual"))
    resta = num - num2
    console.log(resta)
}