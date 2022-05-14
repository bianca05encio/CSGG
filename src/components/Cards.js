import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-13.jpg'
              text='Tokyo, Japan'
              label='POPULAR'
              path='/services'
            />
            <CardItem
              src='images/img-12.jpg'
              text='Paris, France'
              label='POPULAR'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-10.jpg'
              text='San Diego, California'
              label='HOT'
              path='/services'
            />
            <CardItem
              src='images/img-14.jpg'
              text='South Island, New Zealand'
              label='HOT'
              path='/products'
            />
            <CardItem
              src='images/img-11.jpg'
              text='London, United Kingdom'
              label='HOT'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
