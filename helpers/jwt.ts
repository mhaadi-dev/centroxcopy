import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'your-jwt-secret-key' 

interface TokenPayload {
    exp: number;
    iat: number;
    email: string;
}

export const generateToken = (email: string): string => {
    return jwt.sign(
        { email },
        JWT_SECRET,
        { expiresIn: '18s' }  
    )
}

export const verifyToken = (token: string): TokenPayload | null => {
    try {
        return jwt.verify(token, JWT_SECRET) as TokenPayload
    } catch (error) {
        return null
    }
}