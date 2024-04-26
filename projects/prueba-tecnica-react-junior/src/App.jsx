import { useEffect, useState } from "react"
const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red&json=true`
const CAT_PREFIX_IMAGE_URL ='https://cataas.com' 
export function App() {

    const [fact, setFact] = useState()
    const [imageUrl, setImageUrl] = useState()

    // aveces no puede usar React Query, SWR, axios, apollo...
   // fetch a la API con UseEffect(), si no haria un loop infinito
    useEffect(()=>{
        fetch(CAT_ENDPOINT_RANDOM_FACT)
        .then(res => res.json())
        .then(data => {
            const { fact } = data
            setFact(fact)
            //nos piden recuperar la primera palabra
            const firstWord = fact.split(' ')[0]
            console.log(firstWord)
        
            const imageURL = `https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red`
            setImageUrl(imageURL)

            // fetch(`https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red&json=true`)
            // .then(res => res.json())

            // .then(response => {
            //     const { url } = response
            //     console.log(url)
            //     if (response && response.url) {
            //         setImageUrl(url)

            //     }else {
            //         console.error("Image URL not found in response");
            //     }
            //     // console.log(url)


            //     // console.log(response) 
            // })
            //pero podrian pedir por ejemplo las tres primeras
            // const firstWord = fact.split(' ').slice(0, 3).join(' ')
            // oder -> firstWord = fact.split(' ', 3).join(' ')
            // console.log(firstWord)
        })
    
    }, [])  //con [] le decimos que se reenderize 1 vez

    // //con async :
    // useEffect(() => {
    //     async function getRandomFact () {
    //         const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
    //         const json = await res.json()
    //         setFact(json.fact)
    //     }
    //     getRandomFact()
    // }, [])
    return (
        <main>
            <h1>App de gatitos</h1>
        {fact && <p>{fact}</p>} 
        <img src={imageUrl} alt="" />
        <div>
            <p>APIs</p>
            <ul>
                <li>Random Facts: https://catfact.ninja/fact</li>
                <li>Random image: https://cataas.com/cat/says/hello</li>
            </ul>
            <p>Retrieves a random cat fact and displays an image of a cat with the first word of the retrieved fact using the second API.</p>
        </div>
        <div>
            <p>Practice fetch(), useState() and useEffect() with React & JS </p>
        </div>
        </main>
    )
}