export const FavouriteSchema = {
    name: 'Favourites', 
    properties: {
        products: 'string?[]',
        userId: 'string'
    },
    primaryKey: 'userId',
  };