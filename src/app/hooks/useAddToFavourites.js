import { API_ENDPOINT } from '@env'
import axiosInstance from '../utils/axios/axiosClient';
import Realm from 'realm';

const addToFavourites = async (productId, realm, userId) => {


  try {
    const response = await axiosInstance.post(
      `/product/add-favourite`,
      JSON.stringify({ productId })
    );

    if (response.data?.success && response.data?.favourites) {
      let favourites = response.data?.favourites;
      realm.write(() => {

          const productReferences = favourites?.map((product) => {
           
            const existingProduct = realm.create('Product', {
              id: product?._id,
              image: product?.image || '',
              productName: product?.productName,
              mrp: Number(product?.mrp || Math.floor(product?.price * 1.5)),
              price: Number(product?.price),
            },
              Realm.UpdateMode.Modified
            );

            return existingProduct.id;
          });

          let cachedFavourites = realm.objectForPrimaryKey('Favourites', userId);          
          if (!cachedFavourites) {
            cachedFavourites = realm.create('Favourites', {
              id: userId,
              products: [],
            });
          } else {            
            cachedFavourites.products.splice(0, cachedFavourites.products.length, ...productReferences);            
          }
        });
    }
    return response.data.success;


  } catch (error) {
    return null;
  }
};

export default addToFavourites;