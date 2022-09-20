export default [
  {
    title: 'Price',
    name: 'price',
    type: 'radio',
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
    title: 'Sort',
    name: 'sort',
    type: 'radio',
    fields: [
      {
        label: 'High to low',
        name: 'price:desc'
      },
      {
        label: 'Low to high',
        name: 'price:asc'
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
    title: 'Categories',
    name: 'categories',
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
