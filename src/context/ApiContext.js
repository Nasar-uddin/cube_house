import React, {createContext, useState} from 'react'
import axios from 'axios'

export const ApiContext = createContext()

function ApiProvider(props) {
    const [siteData, setSiteData] = useState()
    const [testimonials, setTestimonials] = useState()
    const [dataLoaded, setDataLoaded] = useState(false)
    const [projects, setProjects] = useState()
    const [catagory, setCatagory] = useState()
    const [projectSlidesToShow, setProjectSlidesToShow] = useState(3)
    const [categorySlidesToShow, setCategorySlidesToShow] = useState(3)
    const [panoramaImage, setPanoramaImage] = useState()
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
    const loadProjects = (categoryId)=>{
        // change the route according to your need
        axios.get(rootUrl+'/api/projects/').then((response)=>{
            setProjectSlidesToShow(response.data.results.length > 3 ? 3: Math.max(1, response.data.results.length-1))
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
        }
    }
    
    const loadCatagory = ()=>{
        axios.get(rootUrl+'/api/categories/').then((response)=>{
            setCategorySlidesToShow(response.data.results.length > 3 ? 3: Math.max(1, response.data.results.length-1))
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
        }
    }

    const loadPanoramaImage = (id)=>{
        if(panoramaImage) return
        axios.get(rootUrl+`/api/360photo/${id}/`).then((response)=>{
            setPanoramaImage(response.data)
        }).catch(error=>{
            console.log(error)
        })
    }
    const toggleProjectInterest = (projectId)=>{
        axios.put(
            `${rootUrl}/api/project/interest/`,
            {'projectId': projectId}).then((response)=>{
                if(response.status >=200 && response.status <400){
                    const newProjects = {
                        ...projects,
                        results: projects.results.map((res)=>{
                            if(res.id === projectId){
                                return {
                                    ...res,
                                    interested: !res.interested,
                                }
                            }
                            return res
                        })
                    }
                    setProjects(newProjects)
                }else{
                    console.log('Project interest error')
                }
            }).catch((error)=>{
                console.log(error)
            })
    }
    return (
        <ApiContext.Provider value={{
            siteData, dataLoaded, loadProject, loadTestimonials, projects, loadProjects, loadMoreProjects, catagory, loadCatagory, loadMoreCatagory, projectSlidesToShow, categorySlidesToShow, loadPanoramaImage, panoramaImage, toggleProjectInterest
        }}>
            {{...props.children}}
        </ApiContext.Provider>
    )
}

export default ApiProvider
