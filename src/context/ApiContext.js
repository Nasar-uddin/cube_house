import React, {createContext, useState} from 'react'
import axios from 'axios'

export const ApiContext = createContext()

function ApiProvider(props) {
    const [siteData, setSiteData] = useState()
    const [testimonials, setTestimonials] = useState()
    const [dataLoaded, setDataLoaded] = useState(false)
    const [projects, setProjects] = useState()
    const [catagory, setCatagory] = useState()
    const rootUrl = 'http://127.0.0.1:8000'

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
    const loadProjects = ()=>{
        axios.get(rootUrl+'/api/projects/').then((response)=>{
            setProjects(response.data)
        }).catch((error)=>{
            console.log(error)
        })
    }
    const loadMoreProjects = ()=>{
        if(projects.next !== null){
            axios.get(rootUrl+projects.next).then((response)=>{
                const newPorject = {
                    ...response.data,
                    results: [
                        ...projects.results,
                        ...response.data.results
                    ]
                }
                setProjects(newPorject)
            }).catch(error=>{
                console.log(error)
            })
        }else{
            console.log('reached at the end')
        }
    }
    
    const loadCatagory = ()=>{
        axios.get(rootUrl+'/api/categories/').then((response)=>{
            setCatagory(response.data)
        }).catch((error)=>{
            console.log(error)
        })
    }
    const loadMoreCatagory = ()=>{
        if(catagory.next){
            axios.get(rootUrl+catagory.next).then((response)=>{
                const newCatagory = {
                    ...response.data,
                    results: [
                        ...catagory.results,
                        ...response.data.results
                    ]
                }
                setCatagory(newCatagory)
            }).catch(error=>{
                console.log(error)
            })
        }else{
            console.log('reached at the end')
        }
    }
    return (
        <ApiContext.Provider value={{
            siteData, dataLoaded, loadProject, loadTestimonials, projects, loadProjects, loadMoreProjects, catagory, loadCatagory, loadMoreCatagory
        }}>
            {{...props.children}}
        </ApiContext.Provider>
    )
}

export default ApiProvider
