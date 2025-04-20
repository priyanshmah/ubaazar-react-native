import { API_ENDPOINT } from '@env';
import axiosInstance from '../utils/axios/axiosClient';
import Realm from 'realm';

const getFavourites = async (realm, userId) => {
  try {
    const response = await axiosInstance.get(
      `/auth/user/get-favourite`
    );

    if (response.data?.success && response.data?.favourites) {

      let favourites = response.data.favourites;
      realm.write(() => {
        // Create or update product documents first
        const productReferences = favourites.map((product) => {
            let existingProduct = realm.objectForPrimaryKey('Product', product._id);
    
            if (!existingProduct) {
                existingProduct = realm.create('Product', {
                    id: product._id,
                    image: product.images?.[0] || '', // Avoid undefined errors
                    productName: product.productName,
                    rating: product.rating || 0,
                    mrp: Number(product.mrp || Math.floor(product.price * 1.5)),
                    price: Number(product.price),
                    isFavourite: true,
                }, Realm.UpdateMode.Modified);
            }
    
            return existingProduct.id; // Store reference to use later
        });
    
        // Now create or update the Favourites document with product references
        let cachedFavourites = realm.objectForPrimaryKey('Favourites', userId);
    
        if (!cachedFavourites) {
            cachedFavourites = realm.create('Favourites', {
                userId: userId,
                products: productReferences, // Store product references
            });
        } else {
            cachedFavourites.products.splice(0, cachedFavourites.products.length, ...productReferences);
        }
    });
    
      return response.data?.favourites;
    }

    return;
  } catch (error) {
    console.error("Error fetching favourites:", error);
    return;
  }
};

export default getFavourites;
