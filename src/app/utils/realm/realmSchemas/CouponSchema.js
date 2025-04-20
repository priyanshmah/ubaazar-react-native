export const CouponSchema = {
    name: 'Coupon',
    properties: {
        userId: 'string',
        code: 'string',
        description: 'string',
        discountValue: 'int',
        maxDiscount: 'int',
        discountType: 'string',
        minPurchase: 'int'
    }
};