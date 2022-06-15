import{collection,getDoc} from 'firebase/firestore'
import db from './firebaseConfig'


 const productsCollection = collection(db,'products')
export const getProduct=async()=>{
    const snaphsat = await getDoc(productsCollection)

    if(snaphsat.exists()){
        console.log(snaphsat.data)
    }else{
        console.log("not execte")
    }
}


