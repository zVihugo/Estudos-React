import {useState, useEffect} from 'react'

//custom hook

export const useFetch = (url) =>{
    const [data, setData] = useState(null)

    //Refatorando o POST
    const [config, setConfig] = useState(null)
    const [method, setMethod] = useState(null)
    const [callFetch, setCallFetch] = useState(false)


    const httpConfig = (data, method) =>{
        if(method === "POST"){
            setConfig({
                method,
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            setMethod(method)
        }
    }

    useEffect(() => {
        const fetchData = async () =>{
            const res = await fetch(url)
            const dados = await res.json()
            setData(dados)
        }

        fetchData()
    }, [url, callFetch])

    useEffect(() => {
        const httpRequest = async () =>{
            if(method === "POST"){
                let fetchOptions = [url, config]
                const res = await fetch(...fetchOptions)
                const json = await res.json()
                setCallFetch(json)
            }
        }
        httpRequest()
    },[config, method, url])

    return {data, httpConfig}
}