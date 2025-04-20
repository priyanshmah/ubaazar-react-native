import axiosInstance from '../utils/axios/axiosClient';
import Realm from 'realm';

const addToBag = async (productId, variantId, quantity, size, realm, userId) => {
  try {
    const response = await axiosInstance.post(
      `/product/add-bag`,
      JSON.stringify({ productId, quantity, variantId, size }),
    );


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
    }

    return response.data?.success;

  } catch (error) {
    return null;
  }
};

export default addToBag;