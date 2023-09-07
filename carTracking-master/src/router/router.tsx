import { Routes, Route } from "react-router-dom"
import Map from "../pages/map/map"
import Error from "../pages/error/error"

const standAloneRoute = [
    {
        name : Error,
        path : '*'
    },
    {
        name : Map,
        path : '/'
    },
    {
        name : Map,
        path : '/home'
    },
]

const Router = () => {
    return(
        <Routes>
             {/* <Route path={'/dummyName'} element={<ComMap />} /> */}
                {
                    standAloneRoute.map((path, index : number)=>{
                        return(
                            <Route key={index} path={path.path} element={<path.name />} />
                        )
                    })
                }
        </Routes>
    )
}

export default Router