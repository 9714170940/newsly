import CryptoJS from "crypto-js";

export const encrypt = (data) => {
    const text = CryptoJS.AES.encrypt(JSON.stringify(data), 'my-secret-key@123').toString();
    return text
}

export const decrypt = (data) => {
    const bytes = CryptoJS.AES.decrypt(data, 'my-secret-key@123');
    const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return decryptedData 
}