import React from 'react'

export default function ItemBanner({item}) {
  return (
    <div>
      <div>
        <h2>{item.name}</h2>
      </div>
      <div className='flex-row'>
        <div>
          {'rating'}
        </div>
        <div>
          {'rating'}
        </div>
        <div>
          {'sold'}
        </div>
      </div>
      <div>
        {item.price}
      </div>
    </div>
  )
}
