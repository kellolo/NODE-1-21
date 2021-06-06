const addToBasket = (basket, req) => {
    basket.content.push(req.body);
    return basket;
}

const delFromBasket = (basket, req) => {
    const idx = basket.content.findIndex((el) => el.productId === req.params.id);
    idx !== -1 ? basket.content.splice(idx, 1) : console.warn('item not found in basket');
    return basket;
}

const changeBasket = (basket, req) => {
    const idx = basket.content.findIndex((el) => el.productId == req.params.id);
    idx !== -1 ? basket.content[idx].amount = req.body.amount : console.warn('item not found in basket');
    return basket;
}

module.exports = {
    addToBasket, delFromBasket, changeBasket
}