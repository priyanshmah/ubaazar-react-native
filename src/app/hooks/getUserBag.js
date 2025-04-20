import { API_ENDPOINT } from '@env'
import axiosInstance from '../utils/axios/axiosClient';
import Realm from 'realm';

const getUserBag = async (realm, userId) => {
  try {
    console.log("sending request to fetch  bag ...");
    
    const response = await axiosInstance.get(
      `/auth/user/get-bag`,
    );

    console.log("response is: ", response.data.success);
    

    if (response.data?.success && response.data?.bag) {
      
      let bag = response.data?.bag?.items;

      realm.write(() => {
        const productReferences = bag?.map((product) => {
                      
            const existingProduct = realm.create('Product', {
              id: product?.product?._id,
              image: product?.product?.variant?.image || '',
              productName: product?.product?.productName,
              mrp: Number(product?.product?.mrp || Math.floor(product?.product?.price * 1.5)),
              price: Number(product?.product?.price),
              quantity: product?.quantity,
              size: product?.size,
              variantId: product?.variantId
            },
              Realm.UpdateMode.Modified
            );
                    

          return existingProduct.id;
        });


        let cachedBag = realm.objectForPrimaryKey('Bag', userId);

        if (!cachedBag) {
          cachedBag = realm.create('Bag', {
            userId: userId,
            products: productReferences,
          });
        } else {
          cachedBag.products.splice(0, cachedBag.products.length, ...productReferences);
        }
      });

      return response.data;
    }

    return;
  } catch (error) {
    return;
  }
};

export default getUserBag;