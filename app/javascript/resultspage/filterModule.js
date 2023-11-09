function filterModule() {
  const filters = [
    'plant_type',
    'growing_season',
    'seed_varieties',
    'planting_location',
    'special_attributes',
    'planting_method',
    'package_size',
  ]

  const options = {
    'plant_type': [
      'Flowers',
      'Vegetables',
      'Herbs',
      'Fruits',
      'Trees',
      'Shrubs',
      'Grasses',
    ],
    'growing_season': [
      'Spring',
      'Summer',
      'Fall',
      'Winter',
    ],
    'seed_varieties': [
      'Heirloom',
      'Organic',
      'Non-GMO',
      'Rare or Specialty',
      'Native Species',
    ],
    'planting_location': [
      'Indoor',
      'Outdoor',
      'Greenhouse',
    ],
    'special_attributes': [
      'Drought-Tolerant',
      'Shade-Tolerant',
      'Wildlife-Attracting',
      'Pollinator-Friendly',
    ],
    'planting_method': [
      'Direct Sowing',
      'Transplanting',
    ],
    'package_size': [
      'Individual Packets',
      'Bulk or Wholesale',
    ],
  }

  return {filters, options}
}

export default filterModule()