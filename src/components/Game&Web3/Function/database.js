export function Set(data) {
    localStorage.setItem('user', JSON.stringify(data))
}


export function Get() {
    try {
        const userData = localStorage.getItem('user');
        if (userData) {
            return JSON.parse(userData);
        }
        return null; // Return null if no data is found
    } catch (e) {
        return null; // Return null if parsing fails
    }
}
export function Delete() {
    localStorage.removeItem('user');
}

