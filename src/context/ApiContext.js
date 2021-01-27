import React, {createContext, useState, useEffect} from 'react'
import axios from 'axios'

export const ApiContext = createContext()

function ApiProvider(props) {
    const [siteData, setSiteData] = useState()
    const [dataLoaded, setDataLoaded] = useState(false)
    const loadData = ()=>{
        // #TODO: chnage the route to your project route
        axios.get('http://127.0.0.1:8000/api/projects/1/').then((response)=>{
            setSiteData(response.data)
            setDataLoaded(true)
        }).catch(error=>{
            console.log(error)
            setDataLoaded(false)
        })
    }
    useEffect(() => {
        loadData()
    }, [])
    return (
        <ApiContext.Provider value={{
            siteData, dataLoaded
        }}>
            {{...props.children}}
        </ApiContext.Provider>
    )
}

export default ApiProvider
