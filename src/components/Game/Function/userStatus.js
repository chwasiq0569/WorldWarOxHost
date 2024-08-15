import md5 from 'md5';
const userStatus = async ({name, status, type}) => {
    const secretKey = '1234567'; // Replace with your actual secret key
    const hash = md5(name + secretKey).toString().toLowerCase();
    const sid = crypto.randomUUID(); // Generate a unique SID

    const formData = new URLSearchParams();
    formData.append('name', name);
    formData.append('status', status);
    formData.append('type', type);
    formData.append('hash', hash);
    formData.append('sid', sid); // Include SID if needed

    try {
        const response = await fetch('https://www.worldwar0x.io/play/php/bl_UserStatus.php', { // Replace with your URL
            method: 'POST',
            body: formData
        });

        const result = await response.text();

        if (response.ok) {
            // Handle successful response
            console.log('Update successful', result);
        } else {
            console.error('Request failed', result);
        }
    } catch (error) {
        console.error('Network error', error);
    }
};

export default userStatus;
