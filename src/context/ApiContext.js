import React, {createContext, useState, useEffect} from 'react'
import data from '../assets/data.json'

export const ApiContext = createContext()

function ApiProvider(props) {
    const [siteData, setSiteData] = useState()
    const [dataLoaded, setDataLoaded] = useState(false)
    const loadData = ()=>{
        // make async request to fetch data
        setSiteData(data)
        setDataLoaded(true)
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
