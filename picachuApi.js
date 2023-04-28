
const fetchApi1 = async()=> {
    try {
        const url = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
        const data = await url.json();
        console.log(data);
    } catch (error) {
        console.log(error)
    }
    finally{
        console.log("termino")
    }
}
fetchApi1();


