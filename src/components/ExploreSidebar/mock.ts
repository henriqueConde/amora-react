export default [
  {
    title: 'Price',
    name: 'price',
    type: 'checkbox',
    fields: [
      {
        label: 'Under $50',
        name: 'under-50'
      },
      {
        label: 'Under $100',
        name: 'under-100'
      },
      {
        label: 'Under $150',
        name: 'under-150'
      },
      {
        label: 'Under $200',
        name: 'under-200'
      },
      {
        label: 'Discounted',
        name: 'discounted'
      }
    ]
  },
  {
    title: 'Sort by',
    name: 'sort_by',
    type: 'radio',
    fields: [
      {
        label: 'High to low',
        name: 'high-to-low'
      },
      {
        label: 'Low to high',
        name: 'low-to-high'
      }
    ]
  },
  {
    title: 'Brand',
    name: 'brand',
    type: 'checkbox',
    fields: [
      {
        label: 'Boticario',
        name: 'boticario'
      },
      {
        label: 'Elysee',
        name: 'elysee'
      },
      {
        label: 'Chanel',
        name: 'chanel'
      }
    ]
  },
  {
    title: 'Category',
    name: 'category',
    type: 'checkbox',
    fields: [
      {
        label: 'Aromatic',
        name: 'aromatic'
      },
      {
        label: 'Citric',
        name: 'citric'
      },
      {
        label: 'Oriental',
        name: 'oriental'
      }
    ]
  }
]
