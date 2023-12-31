import React, {useState, useEffect} from 'react'

export default function Index({API}) {
  const [items, setItems] = useState()

  useEffect(() => {
    fetch(API)
    .then(response => response.json())
    .then(items => mapItems(items))
    .then(mappedItems => setItems(mappedItems))
  },[API])

  function mapItems(items) {
    return items.map((item) =>
      <a href={'/show/' + item.id}>
        <div className="item-card flex-column justify-between box-shadow" key={item.id}>
          <div>
            <img src={item.image_links[0]} alt="placeholder" />
            <div className="item-padding">
              <h3>{item.name}</h3>
            </div>
          </div>
          <div>
            <hr />
            <div className="flex-row align-center item-padding">
              <h4>PHP {item.price}</h4>
              <div>
                <button>Buy now</button>
              </div>
              <div>
                <button>Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </a>
    )
  }

  return (
    <div className="items-grid">
      {items}
    </div>
  )
}
