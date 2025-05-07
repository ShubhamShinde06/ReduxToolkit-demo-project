import { useSelector } from "react-redux";
//import { addToCart } from "../store/actions/cart";
import { useDispatch } from "react-redux";
import {updateCart} from '../store/reducers/cart.js'

const List = () => {

  const dispatch = useDispatch()

  const products = useSelector(function(state){
    return state?.products?.product
  })

  //console.log(products)

  const isLoading = useSelector(function(state){
    return state?.isLoading
  })



  // const {isLoading, products} = productsFromStore

  if(isLoading){
    return <h1 className=" text-2xl text-center">Loading Data...</h1>
  }

  function handleAddToCart(product){

    return () => {
      dispatch(updateCart(product))
    }
  }

  

  return (
    <div className=" w-full h-full flex flex-wrap gap-5 py-5 justify-center">
      {products?.map((item, id) => (
        <div key = {id + 1} className="w-50 h-60 border rounded-md p-2 flex flex-col items-center justify-between gap-3 overflow-hidden">
          <img src={item.image} alt="" className="w-full h-1/2 overflow-hidden" />
          <h1 className=" w-full line-clamp-1">{item.title}</h1>
          <button className=" border p-1 rounded-md cursor-pointer bg-white text-black font-bold" onClick={handleAddToCart(item)}>Add to cart</button>
          <h1>{!!item.discount && 'This is free now'}</h1>
          <h1>₹ {Math.floor(item.price)}</h1>
        </div>
      ))}
    </div>
  );
};

export default List;
