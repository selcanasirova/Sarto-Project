import React, { useState, useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import slugify from 'slugify';
import { useCart } from 'react-use-cart';
import { useWishlist } from 'react-use-wishlist';
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast.success('Product added to your Card.', {
  style: {
    border: '2px solid #bb1a14',
    padding: '16px',
    color: '#bb1a14',
  },
  iconTheme: {
    primary: '#bb1a14',
    secondary: '#FFFAEE',
  },
});

const SingleCard = ({ alldata }) => {
  const { addItem } = useCart();
  const { addWishlistItem, getWishlistItem, removeWishlistItem } = useWishlist();
  const [isInWishlist, setIsInWishlist] = useState(() => {
    return getWishlistItem(alldata.id) !== undefined;
  });
  useEffect(() => {
    localStorage.setItem('wishlistIcon', JSON.stringify(isInWishlist));
  }, [isInWishlist]);

  const WishlistClick = () => {
    if (isInWishlist) {
      removeWishlistItem(alldata.id);
    } else {
      addWishlistItem(alldata);
    }
    setIsInWishlist(!isInWishlist);
  };

  const addtoCart= () =>{
    addItem(alldata);
    notify();
  }
  return (
    <Card className='col-md-4 col-sm-12' key={alldata.id}>
      <div className="product-img">
        <Link to={`/shop-sidebar/${slugify(alldata.name)}`}>
          <Card.Img variant="top" src={alldata.img} />
        </Link>
        <Button className='addToCart py-3' onClick={addtoCart} variant="ms-2">
          <b>Add to Cart</b>
        </Button>
        <Button className='addToFav' onClick={WishlistClick} variant="ms-2">
          <b><i className={`fa${isInWishlist ? '-solid' : '-regular'} fa-heart`}></i></b>
        </Button>
      </div>
      <Card.Body>
        <div className="product-main">
          <div className="product-name">
            <Card.Title><b>{alldata.name}</b></Card.Title>
            <Card.Text>
              <h6>{alldata.title}</h6>
            </Card.Text>
          </div>
          <div className="product-price">
            <h5><b className='me-4 text-danger'><del>{alldata.oldprice}</del></b></h5>
            <h5><b>{alldata.price} $</b></h5>
          </div>
        </div>
      </Card.Body>
      <Toaster position="bottom-right" reverseOrder={true}/>
    </Card>
  );
};

export default SingleCard;
