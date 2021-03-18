import React, {useEffect, useState} from 'react'
import axios from 'axios'
import '../App.css';



function OrderForm() {

  const [orders, setOrders] = useState([]);
  const [editing, setEditing] = useState();

  const onSubmit = async e => {
    e.preventDefault()
    const {firstName, lastName, email, file} = e.target
    await axios.post('http://localhost:5001/api/orders', {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      file: file.value,
    })
    firstName.value = ''
    lastName.value = ''
    email.value = ''
    file.value = ''
    getOrders()
  }
  
  const getOrders = async () => {
    const res = await axios.get('http://localhost:5001/api/orders')
    const data = res.data
    setOrders(data)
  }
  
  const onSubmitEdits = async (e, id) => {
      e.preventDefault()
      const {firstName, lastName, email, file} = e.target
      await axios.post(`http://localhost:5001/api/orders/update/${id}`, {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        file: file.value
      })
      setEditing()
      getOrders()
    }
    
   
    const deleteOrder = async orderToDelete => {
      await axios({
        method: 'DELETE',
        url: 'http://localhost:5001/api/orders/',
        data: {
          id: orderToDelete,
        },
      })
      await getOrders()
    }

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <div className="OrderForm">
      <div className="Form">
        <h2>Place Order Here</h2>
        <form onSubmit={e => onSubmit(e)}>
          <label htmlFor="firstName">First Name:</label>
          <input type="text" name="firstName"/>
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" name="lastName"/>
          <label htmlFor="email">Email:</label>
          <input type="text" name="email"/>
          <label htmlFor="file">File Link:</label>
          <input type="text" name="file"/>
          <button>Submit Request</button>
        </form>
      </div>

      <div className="OrderConfirm">
        {orders.map(order => (
        <div key={order._id}>
        {editing !== order._id ? (
          <div key={order._id} className="OrderConfirm__card">
            <div className="OrderConfirm__card--details">
              <div>
                <span>First Name:</span>
                {order.firstName}
              </div>
              <div>
                <span>Last Name:</span>
                {order.lastName}
              </div>
              <div>
                <span>Email:</span>
                {order.email}
              </div>
              <div>
                <span>File Link:</span>
                {order.file}
              </div>
            </div>
            <div className="OrderConfirm__card--options">
              <button onClick={() => setEditing(order._id)}>Edit</button>
              <button onClick={() => deleteOrder(order._id)}>Delete</button>
            </div>
          </div>
          ) : (
          <div key={order._id} className="OrderConfirm__editing">
            <form onSubmit={e => onSubmitEdits(e, order._id)}>
              <div className="OrderConfirm__editing--option">
                <label htmlFor="firstName">First Name:</label>
                <input type="text" name="firstName" defaultValue={order.firstName} />
              </div>
              <div className="OrderConfirm__editing--option">
                <label htmlFor="lastName">Last Name:</label>
                <input type="text" name="lastName" defaultValue={order.lastName} />
              </div>
              <div className="OrderConfirm__editing--option">
                <label htmlFor="email">Email:</label>
                <input type="text" name="email" defaultValue={order.email} />
              </div>
              <div className="OrderConfirm__editing--option">
                <label htmlFor="file">File Link:</label>
                <input type="text" name="file" defaultValue={order.file} />
              </div>
              <div>
                <button type="Submit">Submit</button>
                <button
                  className="OrderConfirm__editing--cancel" onClick={() => setEditing(null)}>Cancel</button>
              </div>
            </form>
          </div>
        )}
      </div>
        ))}
    </div>

  </div>
  );
}

export default OrderForm;
