export const ProductSchema = {
    name: 'Product', 
    properties: {
        id: 'string',
        image: 'string',
        productName: 'string',
        price: 'int',
        rating: 'double?',
        mrp: 'int?',
        quantity: 'int?',
        size: 'string?',
        variantId: 'string?',
    },
    primaryKey: 'id',
  };