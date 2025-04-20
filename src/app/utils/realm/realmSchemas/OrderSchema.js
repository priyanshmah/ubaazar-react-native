export const OrderSchema = {
    name: 'Order',
    properties: {
        orderNumber: 'string',
        products: 'Product[]',
        date: 'date',
        totalPrice: 'int',
        status: 'string',
        userId: 'string'
    } ,
    primaryKey: 'userId',
};