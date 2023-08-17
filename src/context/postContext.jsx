import {createContext, useContext, useState} from "react";

export const postContext = createContext();

// export const MyContext = ({children}) => {
//     const [posts, setPosts] = useState('Hello world')
//     return (
//         <postContext.Provider value={'posts'}>
//             {children}
//         </postContext.Provider>
//     )
// }
// export const useMyContext = () => {
//     return useContext(MyContext)
// }