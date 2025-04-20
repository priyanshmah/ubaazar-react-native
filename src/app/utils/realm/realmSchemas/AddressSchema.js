export const AddressSchema = {
    name: 'Address',
    properties: {
        id: 'string',
        userId: 'string',
        address: 'string',
        area: 'string',
        pincode: 'string',
        city: 'string',
        state: 'string',
        mobileNumber: 'string',
        name: 'string',
        addressType: 'string',
        isDefault: { type: 'bool', default: true },
    },
    primaryKey: 'id',
};