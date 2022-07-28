import React, { useEffect, useState } from 'react'
import { db } from './firebase';
import "./Orders.css";
import { useStateValue } from './StateProvider';
import Order from './Order';

function Orders() {
  const [orders, setOrders] = useState([]);
  const [{basket, user}, dispatch] = useStateValue();

  useEffect(() => {
    if (user) {
    db.collection("users")
    // ^^ Accediendo a la coleccion de usuarios
    .doc(user?.uid)
    // ^^ Buscando el usuario especificio que está realizando la acción.
    .collection("orders")
    // ^^ Acceso a las ordenes del usuario
    .orderBy("created", "desc")
    // ^^ Se ordenan las orders de forma que la más reciente esté arriba.
    .onSnapshot(snapshot => {
      setOrders(snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })))
    })
  } else {
    setOrders([])
  }
  }, [user])
  return (
    <div className='orders'>
        <h1>Your Orders.</h1>

        <div className='orders__order'>
          {orders?.map(order => (
            <Order order={order} />
          ))}
        </div>
    </div>
  )
}

export default Orders