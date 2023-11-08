import React from 'react'

export default function SearchFilter({keyword}) {
  return (
    <>
      <form action='/results' method='get'>
        <section>
          <label htmlFor="keyword"></label>
          <input type="text" name='keyword'id='keyword' defaultValue={keyword}/>
        </section>
        <section>
          <input type='checkbox' name='filter[plant_type]' value="Flowers"/>Flowers
          <input type='checkbox' name='filter[plant_type]' value="Vegetables"/>Vegetables
          <input type='checkbox' name='filter[plant_type]' value="Herbs"/>Herbs
          <input type='checkbox' name='filter[plant_type]' value="Fruits"/>Fruits
          <input type='checkbox' name='filter[plant_type]' value="Trees"/>Trees
          <input type='checkbox' name='filter[plant_type]' value="Shrubs"/>Shrubs
          <input type='checkbox' name='filter[plant_type]' value="Grasses"/>Grasses
        </section>
        <section>
          <input type='checkbox' name='filter[growing_season]' value="Spring"/>Spring
          <input type='checkbox' name='filter[growing_season]' value="Summer"/>Summer
          <input type='checkbox' name='filter[growing_season]' value="Fall"/>Fall
          <input type='checkbox' name='filter[growing_season]' value="Winter"/>Winter
        </section>
        <section>
          <input type='checkbox' name='filter[seed_varieties]' value="Heirloom"/>Heirloom
          <input type='checkbox' name='filter[seed_varieties]' value="Organic"/>Organic
          <input type='checkbox' name='filter[seed_varieties]' value="Non-GMO"/>Non_GMO
          <input type='checkbox' name='filter[seed_varieties]' value="Rare or Specialty"/>Rare or Specialty
          <input type='checkbox' name='filter[seed_varieties]' value="Native Species"/>Native Species
        </section>
        <section>
          <input type='checkbox' name='filter[planting_location]' value="Indoor"/>Indoor
          <input type='checkbox' name='filter[planting_location]' value="Outdoor"/>Outdoor
          <input type='checkbox' name='filter[planting_location]' value="Greenhouse"/>Greenhouse
        </section>
        <section>
          <input type='checkbox' name='filter[special_attributes]' value="Drought-Tolerant"/>Drought_Tolerant
          <input type='checkbox' name='filter[special_attributes]' value="Shade-Tolerant"/>Shade_Tolerant
          <input type='checkbox' name='filter[special_attributes]' value="Wildlife-Attracting"/>Wildlife_Attracting
          <input type='checkbox' name='filter[filter[special_attributes]]' value="Pollinator-Friendly"/>Pollinator_Friendly
        </section>
        <section>
          <input type='checkbox' name='filter[planting_method]' value="Direct Sowing"/>Direct Sowing
          <input type='checkbox' name='filter[planting_method]' value="Transplanting"/>Transplanting
        </section>
        <section>
          <input type='checkbox' name='filter[package_size]' value="Individual Packets"/>Individual Packets
          <input type='checkbox' name='filter[package_size]' value="Bulk or Wholesale"/>Bulk or Wholesale
        </section>
        <section>
          <input type="submit" />
        </section>
      </form>
    </>
  )
}
