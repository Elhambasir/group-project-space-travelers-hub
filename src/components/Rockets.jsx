import { useSelector,useDispatch } from "react-redux"
import { useEffect } from "react"
import { getAPI } from "../redux/Rockets/rocketsSlice"

const Rocket = () => {
    const dispatch = useDispatch()
    const {} = useSelector((store) => 
        store.rockets
        
    )
    useEffect(() => {
        
        dispatch(getAPI())
    }, [dispatch])
    
}


export default Rocket