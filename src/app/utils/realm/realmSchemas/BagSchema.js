export const BagSchema = {
    name: 'Bag', 
    properties: {
        products: 'string?[]',
        userId: 'string'
    },
    primaryKey: 'userId',
  };