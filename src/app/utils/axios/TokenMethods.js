import EncryptedStorage from 'react-native-encrypted-storage';

const setTokens = async (accessToken, refreshToken) => {
    try {
        await EncryptedStorage.setItem(
            'userTokens',
            JSON.stringify({ accessToken, refreshToken })
        );
        return true;
    } catch (error) {
        console.error('Failed to save tokens:', error);
        return false;
    }
};

const getTokens = async () => {
    try {
        const tokenData = await EncryptedStorage.getItem('userTokens');
        if (tokenData) {
            return JSON.parse(tokenData);
        }
        return { accessToken: null, refreshToken: null};
    } catch (error) {
        console.error('Failed to retrieve tokens:', error);
        return null;
    }
};

const clearTokens = async () => {
    try {
        await EncryptedStorage.removeItem('userTokens');
        return true;
    } catch (error) {
        console.error('Failed to clear tokens:', error);
        return false;
    }
};

export { setTokens, getTokens, clearTokens };