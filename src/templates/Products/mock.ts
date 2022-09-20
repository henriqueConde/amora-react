export const productsResponseMock = {
  data: {
    products: {
      data: [
        {
          attributes: {
            name: 'Coffee',
            slug: 'coffee',
            price: 164.9,
            brand: {
              data: {
                attributes: { name: 'Lumiere Eau', __typename: 'Brand' },
                __typename: 'BrandEntity'
              },
              __typename: 'BrandEntityResponse'
            },
            cover: {
              data: {
                attributes: {
                  url: '/uploads/ma_cherie_cover_b5ac84d5f2.png',
                  __typename: 'UploadFile'
                },
                __typename: 'UploadFileEntity'
              },
              __typename: 'UploadFileEntityResponse'
            },
            __typename: 'Product'
          },
          __typename: 'ProductEntity'
        },
        {
          attributes: {
            name: 'Ma Chérie',
            slug: 'ma-cherie',
            price: 95.9,
            brand: { data: null, __typename: 'BrandEntityResponse' },
            cover: {
              data: {
                attributes: {
                  url: '/uploads/ma_cherie_cover_b5ac84d5f2.png',
                  __typename: 'UploadFile'
                },
                __typename: 'UploadFileEntity'
              },
              __typename: 'UploadFileEntityResponse'
            },
            __typename: 'Product'
          },
          __typename: 'ProductEntity'
        },
        {
          attributes: {
            name: 'Glamour',
            slug: 'glamour',
            price: 123.9,
            brand: { data: null, __typename: 'BrandEntityResponse' },
            cover: {
              data: {
                attributes: {
                  url: '/uploads/glamour_cover_5d3e1fa760.png',
                  __typename: 'UploadFile'
                },
                __typename: 'UploadFileEntity'
              },
              __typename: 'UploadFileEntityResponse'
            },
            __typename: 'Product'
          },
          __typename: 'ProductEntity'
        },
        {
          attributes: {
            name: 'Florata',
            slug: 'florata',
            price: 103,
            brand: {
              data: {
                attributes: { name: 'Elyseé Parfum', __typename: 'Brand' },
                __typename: 'BrandEntity'
              },
              __typename: 'BrandEntityResponse'
            },
            cover: {
              data: {
                attributes: {
                  url: '/uploads/florata_cover_fa34c70658.png',
                  __typename: 'UploadFile'
                },
                __typename: 'UploadFileEntity'
              },
              __typename: 'UploadFileEntityResponse'
            },
            __typename: 'Product'
          },
          __typename: 'ProductEntity'
        },
        {
          attributes: {
            name: 'Lily',
            slug: 'lily',
            price: 233.9,
            brand: { data: null, __typename: 'BrandEntityResponse' },
            cover: {
              data: {
                attributes: {
                  url: '/uploads/glamour_cover_5d3e1fa760.png',
                  __typename: 'UploadFile'
                },
                __typename: 'UploadFileEntity'
              },
              __typename: 'UploadFileEntityResponse'
            },
            __typename: 'Product'
          },
          __typename: 'ProductEntity'
        }
      ],
      __typename: 'ProductEntityResponseCollection'
    }
  }
}
