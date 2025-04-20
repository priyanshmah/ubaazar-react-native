export const UserDataSchema = {
    name: 'UserData',
    properties: {
        id: 'string',
        name: 'string',
        email: 'string?',
        mobileNumber: 'string',
        gender: 'string?'
    },
    primaryKey: 'id',
};