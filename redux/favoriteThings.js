"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var actions_1 = require("./actions");
function addFavoriteThing(thing) {
    return {
        type: actions_1.ActionNames.ADD_FAVORITE_THING,
        payload: thing
    };
}
exports.addFavoriteThing = addFavoriteThing;
function removeFavoriteThing(thing) {
    return {
        type: actions_1.ActionNames.REMOVE_FAVORITE_THING,
        payload: thing
    };
}
exports.removeFavoriteThing = removeFavoriteThing;
function favoriteThingsReducer(favoriteThings, action) {
    if (favoriteThings === void 0) { favoriteThings = []; }
    switch (action.type) {
        case actions_1.ActionNames.ADD_FAVORITE_THING:
            return __spreadArrays(favoriteThings, [action.payload]);
        case actions_1.ActionNames.REMOVE_FAVORITE_THING: {
            var updatedArr = favoriteThings.filter(function (thing) { return thing.toLowerCase() !== action.payload.toLowerCase(); });
            return updatedArr;
        }
        default:
            return favoriteThings;
    }
}
exports.favoriteThingsReducer = favoriteThingsReducer;
//# sourceMappingURL=favoriteThings.js.map