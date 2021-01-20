import React, {createContext, useState} from 'react'

export const ApiContext = createContext()

function ApiProvider(props) {
    const [name, setName] = useState('Nasar uddin')
    return (
        <ApiContext.Provider value={{
            name, setName
        }}>
            {{...props.children}}
        </ApiContext.Provider>
    )
}

export default ApiProvider
