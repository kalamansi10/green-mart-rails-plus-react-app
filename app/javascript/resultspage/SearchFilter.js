import React, {useEffect} from 'react'

export default function SearchFilter({keyword}) {

  useEffect(() => {
    let params = new URL(document.location).searchParams;
    for (const [key, value] of params.entries()) {
      if (value!=null) {
        document.querySelector(`input[value=${value}]`).checked = true
      }
    }
  }, [])

  function clearFilters() {
    radioButtons = document.querySelectorAll('input[type=radio]')
    radioButtons.forEach(dom => dom.checked = false)
  }

  return (
    <>
      <form action='/results' method='get'>
        <section>
          <input type="text" name='keyword' defaultValue={keyword}/>
        </section>
        <section>
          <input type="submit" />
          <button type="button" onClick={clearFilters}>Clear Filters</button>
        </section>
        <section>
          <input type='radio' name='filter[plant_type]' value="Flowers"/>Flowers
          <input type='radio' name='filter[plant_type]' value="Vegetables"/>Vegetables
          <input type='radio' name='filter[plant_type]' value="Herbs"/>Herbs
          <input type='radio' name='filter[plant_type]' value="Fruits"/>Fruits
          <input type='radio' name='filter[plant_type]' value="Trees"/>Trees
          <input type='radio' name='filter[plant_type]' value="Shrubs"/>Shrubs
          <input type='radio' name='filter[plant_type]' value="Grasses"/>Grasses
        </section>
        <section>
          <input type='radio' name='filter[growing_season]' value="Spring"/>Spring
          <input type='radio' name='filter[growing_season]' value="Summer"/>Summer
          <input type='radio' name='filter[growing_season]' value="Fall"/>Fall
          <input type='radio' name='filter[growing_season]' value="Winter"/>Winter
        </section>
        <section>
          <input type='radio' name='filter[seed_varieties]' value="Heirloom"/>Heirloom
          <input type='radio' name='filter[seed_varieties]' value="Organic"/>Organic
          <input type='radio' name='filter[seed_varieties]' value="Non-GMO"/>Non_GMO
          <input type='radio' name='filter[seed_varieties]' value="Rare or Specialty"/>Rare or Specialty
          <input type='radio' name='filter[seed_varieties]' value="Native Species"/>Native Species
        </section>
        <section>
          <input type='radio' name='filter[planting_location]' value="Indoor"/>Indoor
          <input type='radio' name='filter[planting_location]' value="Outdoor"/>Outdoor
          <input type='radio' name='filter[planting_location]' value="Greenhouse"/>Greenhouse
        </section>
        <section>
          <input type='radio' name='filter[special_attributes]' value="Drought-Tolerant"/>Drought_Tolerant
          <input type='radio' name='filter[special_attributes]' value="Shade-Tolerant"/>Shade_Tolerant
          <input type='radio' name='filter[special_attributes]' value="Wildlife-Attracting"/>Wildlife_Attracting
          <input type='radio' name='filter[filter[special_attributes]]' value="Pollinator-Friendly"/>Pollinator_Friendly
        </section>
        <section>
          <input type='radio' name='filter[planting_method]' value="Direct Sowing"/>Direct Sowing
          <input type='radio' name='filter[planting_method]' value="Transplanting"/>Transplanting
        </section>
        <section>
          <input type='radio' name='filter[package_size]' value="Individual Packets"/>Individual Packets
          <input type='radio' name='filter[package_size]' value="Bulk or Wholesale"/>Bulk or Wholesale
        </section>
      </form>
    </>
  )
}
