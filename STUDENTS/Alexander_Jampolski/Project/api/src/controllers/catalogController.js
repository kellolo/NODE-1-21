import fs from 'fs';

// Display list of all catalog items
export const catalogList = async (req, res) => {
    fs.readFile('./src/db/catalog.json', 'utf-8', (err, data) => {
        if (!err) {
            res.json(JSON.parse(data));
        }
    });
}
