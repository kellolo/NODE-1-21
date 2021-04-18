import mysql2 from 'mysql2';

const config = {
    host: 'localhost',
    user: 'root',
    database: 'node',
    password: 'rootroot',
}

const dataBase = () => {
    const connection = mysql2.createConnection(config);
    return connection;
};

export const sendQuery = (req, res, command) => {
    dataBase().connect(err => {
        if (!err) {
            dataBase().query(command, (err, result) => {
                if (!err) {
                    res.json(result)
                } else {
                    console.log(err);
                    res.send('Error DATABASE READ');
                }
            });
        } else {
            res.send('Error DATABASE');
        }
    });
}