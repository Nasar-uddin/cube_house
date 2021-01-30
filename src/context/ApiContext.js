import React, {createContext, useState} from 'react'
import axios from 'axios'

export const ApiContext = createContext()

function ApiProvider(props) {
    const [siteData, setSiteData] = useState()
    const [testimonials, setTestimonials] = useState()
    const [dataLoaded, setDataLoaded] = useState(false)
    const loadProject = (projectId)=>{
        // #TODO: chnage the route to your project route
        return new Promise((resolve, reject)=>{
            if(!dataLoaded){
                axios.get(`http://127.0.0.1:8000/api/projects/${projectId}/`).then((response)=>{
                    setSiteData(response.data)
                    setDataLoaded(true)
                    resolve(response.data)
                }).catch(error=>{
                    console.log(error)
                    setDataLoaded(false)
                    reject(error)
                })
            }
        })
    }
    const loadTestimonials = ()=>{
        return new Promise((resolve, reject)=>{
            if(!testimonials){
                axios.get('http://127.0.0.1:8000/api/testimonials/').then((response)=>{
                    setTestimonials(response.data)
                    resolve(response.data)
                }).catch((error)=>{
                    console.log(error)
                    reject(error)
                })
            }else{
                resolve(testimonials)
            }
        })
    }
    return (
        <ApiContext.Provider value={{
            siteData, dataLoaded, loadProject, loadTestimonials
        }}>
            {{...props.children}}
        </ApiContext.Provider>
    )
}

export default ApiProvider
