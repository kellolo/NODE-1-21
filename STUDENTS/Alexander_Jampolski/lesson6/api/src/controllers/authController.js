import {createToken, checkToken} from '../utils/jwt.js';
import databaseConnection from "../db/index.js";

export const login = async (req, res) => {
    const {login, password} = req.body;
    const command = `
        SELECT *
        FROM users
        WHERE login = '${login}'
    `;
    databaseConnection.query(command, (err, response) => {
        if (!err) {
            const user = response[0];
            if (user) {
                console.log(user);
                if (user.password === password) {
                    const token = createToken();
                    console.log(token);
                    const tokenSetRequest = `
                        UPDATE users
                        SET sessionId='${token.token}'
                        WHERE login = '${login}'
                    `;
                    databaseConnection.query(tokenSetRequest, (err, result) => {
                        if (!err) {
                            res.json({token: token.token});
                        } else {
                            console.log(err);
                        }
                    });
                } else {
                    res.send('err PASSWORD DONT MATCH');
                }
            } else {
                console.log('err CANT FIND');
                res.send('err CANT FIND');
            }
        } else {
            console.log(err);

        }
    });
};

export const checkLogin = async (req, res) => {
    let authorizationToken = req.get('Authorization');
    if (authorizationToken) {
        const command = `
            SELECT *
            FROM users
            WHERE sessionId = '${authorizationToken}'
        `;
        databaseConnection.query(command, (err, result) => {
            if (!err && checkToken(authorizationToken)) {
                res.send('ok USER IS LOGGED IN');
            } else {
                res.send('err USER IS NOT LOGGED IN');
            }
        });
    } else {
        res.send('err NOT SET AUTHORIZATION HEADER');
    }
};