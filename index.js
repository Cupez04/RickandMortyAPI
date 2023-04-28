// Array de objetos
let products = [
    {
        nombre: "Ordenador Gaming",
        marca: "Asus",
        precio: 1200
    },
    {
        nombre:"Tablet",
        marca: "Samsung",
        precio: 300
    },
    {
        nombre: "Camara",
        marca: "Cannon",
        precio:200
    }
];
/**
 * Funcion que retorna una promesa con un retardo de 3s para mostrar 
 * en consola la llamada a a la funcion productos
 */
function conseguirProductos() {
    return new Promise((resolve, rejected)=> {
        console.log("cargando productos...");

        setTimeout(()=>{
            resolve(products)
        },3500)
    })
}

async function getMisProductos(){
    let product= await conseguirProductos();
    console.log(product);
}
getMisProductos();




