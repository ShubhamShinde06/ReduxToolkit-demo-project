import axios from "axios";
import { useDispatch } from "react-redux";
//import { updateLoader, updateError, updateData } from "../store/actions/product-list";
import {getData, isLoading, Error} from '../store/reducers/product'

function useNetwork() {

  const dispatch = useDispatch()

  async function fatch() {
    dispatch(isLoading(true))
    dispatch(Error(''))
    dispatch(getData([]))
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      //console.log(response.data)
      //dispatch(updateData(response.data));
      dispatch(getData(response.data))
      dispatch(isLoading(false))
    } catch (error) {
      console.log("api error :", error);
      dispatch(Error('Error occured while fetching data'))
      dispatch(isLoading(false))
    }

  }

  return {fatch}
}


export default useNetwork