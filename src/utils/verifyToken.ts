import { jwtDecode } from "jwt-decode";
export const verifyToken = (token: string): object | null => {
    try {
        return jwtDecode(token); 
    } catch (error) {
        console.error('Invalid token:', error);
        return null; 
    }
};