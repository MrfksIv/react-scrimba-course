"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var actions_1 = require("./actions");
function changeCount(amount) {
    if (amount === void 0) { amount = 1; }
    return {
        type: actions_1.ActionNames.CHANGE_COUNT,
        payload: amount
    };
}
exports.changeCount = changeCount;
function countReducer(count, action) {
    if (count === void 0) { count = 0; }
    switch (action.type) {
        case actions_1.ActionNames.CHANGE_COUNT:
            return count + action.payload;
        default:
            return count;
    }
}
exports.countReducer = countReducer;
//# sourceMappingURL=count.js.map