import dbConnection from './dbConnection.js'

const sendQuery = (req, res, command) => {
    dbConnection.connect(err => {
        if (!err) {
            dbConnection.query(command, (err, result) => {
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

export default sendQuery;