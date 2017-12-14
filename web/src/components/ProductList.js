import React, { Fragment } from 'react'
import Product from './Product'

function ProductList({
  products,
  productsInWishlist,
  editedProductID,
  onEditProduct,
  onAddProductToWishlist,
  onRemoveProductFromWishlist,
  renderEditForm
}) {

  return (
    <div className='mb-3'>
      <h2>Products</h2>
      { 
        products.map((product) => {
          let inWishlist = false
          
          if (!!productsInWishlist && productsInWishlist.find(productInWishlist => productInWishlist._id === product._id)) {
            inWishlist = true
          }

          for (var i = 1; i < 21; i++) {
            console.log(`i = ${i} :`,inWishlist)
          }

          // wishlist.forEach((productInWishlist) => {
          //   if (productInWishlist._id === product._id) {
          //     inWishlist = true
          //   }
          // })
          
          const showAddToWishlist = !!productsInWishlist && !inWishlist
          const showRemoveFromWishlist = !!productsInWishlist && inWishlist


          return (
            <Fragment key={ product._id }>
              <Product
                {...product}
                onEdit={ () => {
                  onEditProduct(product._id)
                } }
                onAddToWishlist={ showAddToWishlist ? () => {
                  onAddProductToWishlist(product._id)
                } : null }
                onRemoveFromWishlist={ showRemoveFromWishlist ? () => {
                  onRemoveProductFromWishlist(product._id)
                } : null }
              />
              { editedProductID === product._id &&
                renderEditForm(product)
              }
            </Fragment>
          )
        })
      }
    </div>
  )
}

export default ProductList