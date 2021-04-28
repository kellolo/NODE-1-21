import jwt from 'jsonwebtoken';

const privateKey = 'eyJmb28iOiJiYXIiLCJpYXQiOjE2MTkzNTI1Mjd9';

export const createToken = () => {
    const token = jwt.sign({foo: 'bar'}, privateKey);
    return {
        token,
        created: new Date()
    };
};

export const checkToken = (tokenIn) => {
    return jwt.verify(tokenIn, privateKey);
};