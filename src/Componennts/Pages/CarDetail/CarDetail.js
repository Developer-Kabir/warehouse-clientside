
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const CarDetail = () => {
  const { carId } = useParams();

  const [item, setItem] = useState({});
  let { quantity } = item;

  useEffect(() => {
    fetch(`https://salty-meadow-11371.herokuapp.com/car/${carId}`)
      .then(res => res.json())
      .then(data => setItem(data))
  }, [carId])

  const handleDeliverd = () => {
    const url = `https://salty-meadow-11371.herokuapp.com/car/${carId}`

    if (quantity > 0) {
      quantity = quantity - 1;
      const updatedQuantity = { quantity };
      item.quantity = quantity;


      fetch(url, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(updatedQuantity)
      })
        .then(res => res.json())
        .then(data => {
          if (data.modifiedCount) {
            setItem(updatedQuantity);
          }
        })

    }
    else if (quantity === 0) {
      quantity = 'Sold Out';
      const updatedQuantity = { quantity };
      fetch(url, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(updatedQuantity)
      })
        .then(res => res.json())
        .then(data => {
          if (data.modifiedCount) {
            setItem(updatedQuantity);
          }
        })

    }
  }

  const handleRestock = event => {
    event.preventDefault()

    const oldQuantity = parseInt(item.quantity)

    const newQuantity = parseInt(event.target.number.value)
    const updatedQuantity = oldQuantity + newQuantity
    const updatedCar = { ...item, quantity: updatedQuantity }
    console.log(updatedCar)
    const url = `https://salty-meadow-11371.herokuapp.com/car/${carId}`
    fetch(url, {
      method: 'put',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(updatedCar)
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          console.log('success', data)
          setItem(updatedCar)
          toast.info('Quantity is added.', {
            position: toast.POSITION.TOP_CENTER
          })
          event.target.reset()
        }
      })
  }
  return (
    <div className='my-5'>
      <h1 className='text-center text-dark mb-3 fw-bold'>CAR DETAIL</h1>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-lg-4 col-sm-12">
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.Description}</p>
              <p className="card-text"><small>Supplier Name: {item.supplier}</small></p>
              <p className="card-text">Quantity: {quantity}</p>
              <button onClick={handleDeliverd} type="button" className="btn btn-dark">Delivered</button>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12">
            <img src={item.picture} height={300} className="w-100 rounded-start" alt="..." />
          </div>
          <div className="col-lg-4 col-sm-12 mt-5">
            <div className="card-body">
              <h5 className="card-title">Restock The Items</h5>
              <form onSubmit={handleRestock}>
                <input placeholder='Quantity' type="number" name="number" id="" /> <br />
                <button type="submit" className="btn btn-dark my-2">Restock</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CarDetail;

