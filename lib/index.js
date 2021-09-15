"use strict";
var comment_1 = require("./actions/comment");
var issue_1 = require("./actions/issue");
module.exports = function (app) {
    app.on("issues.opened", issue_1.onIssueCreated);
    app.on('issue_comment.created', comment_1.onIssueCommented);
    // For more information on building apps:
    // https://probot.github.io/docs/
    // To get your app running against GitHub, see:
    // https://probot.github.io/docs/development/
};
//# sourceMappingURL=index.js.map