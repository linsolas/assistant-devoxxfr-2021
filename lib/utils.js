"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addComment = void 0;
var addComment = function (context, body, delay) {
    if (!!delay) {
        return setTimeout(function () {
            context.octokit.issues.createComment(context.issue({
                body: body
            }));
        }, delay);
    }
    return context.octokit.issues.createComment(context.issue({
        body: body
    }));
};
exports.addComment = addComment;
//# sourceMappingURL=utils.js.map