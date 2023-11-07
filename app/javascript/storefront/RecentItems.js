import React, {useState, useEffect} from 'react'

export default function Index() {
  const [recentSeeds, setrecentSeeds] = useState()

  useEffect(() => {
    fetch("/v1/seeds/most-recent")
    .then(response => response.json())
    .then(seeds => mapRecentSeeds(seeds))
    .then(mappedSeeds => setrecentSeeds(mappedSeeds))
  },[])

  function mapRecentSeeds(seeds) {
    return seeds.map((seed) =>
      <div className="item-card flex-column justify-between box-shadow" key={seed.id}>
        <div>
          <img src={seed.image_links[0]} alt="placeholder" />
          <div className="item-padding">
            <h3>{seed.name}</h3>
          </div>
        </div>
        <div>
          <hr />
          <div className="flex-row align-center item-padding">
            <h4>PHP {seed.price}</h4>
            <div>
              <button>Buy now</button>
            </div>
            <div>
              <button>Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="items-grid">
      {recentSeeds}
    </div>
  )
}
