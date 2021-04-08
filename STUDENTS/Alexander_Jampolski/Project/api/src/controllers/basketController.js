import fs from "fs";

const BASKET_FILE_PATH = process.env.BASKET_FILE_PATH ?? './src/db/basket.json';
const basket = JSON.parse(fs.readFileSync(BASKET_FILE_PATH, 'utf-8'));

// Display list of all basket items.
export const basketList = async (req, res) => {
    fs.readFile(BASKET_FILE_PATH, 'utf-8', (err, data) => {
        if (!err) {
            res.json(JSON.parse(data));
        }
    });
}

// Handle basket item create on POST.
export const basketCreateItem = async (req, res) => {
    try {
        basket.content.push(req.body);
        updateBasket(basket, res);
    } catch (err) {
        errorHandling(res, 'BASKET::POST: ' + err);
    }
}

// Handle basket item update on PUT.
export const basketUpdateItem = async (req, res) => {
    try {
        basket.content = basket.content.map(
            el => el.productId === req.params.id ? {
                ...el,
                amount: req.body.amount
            } : el
        );
        updateBasket(basket, res);
    } catch (err) {
        errorHandling(res, 'BASKET::PUT: ' + err);
    }
}

// Handle basket item delete on DELETE.
export const basketDeleteItem = async (req, res) => {
    try {
        basket.content = basket.content.filter(el => el.productId !== req.params.id)
        updateBasket(basket, res);
    } catch (err) {
        errorHandling(res, 'BASKET::DELETE: ' + err);
    }
}

/**
 * Update basket and send response
 * @param basket
 * @param res
 */
let updateBasket = function (basket, res) {
    fs.writeFileSync(BASKET_FILE_PATH, JSON.stringify(basket, null, ' '));
    res.json({status: true});
}

/**
 * Error handling
 * @param res
 * @param message
 */
let errorHandling = function (res, message) {
    console.log(message);
    res.sendStatus(500);
}
