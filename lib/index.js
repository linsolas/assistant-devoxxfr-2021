"use strict";
var comment_1 = require("./actions/comment");
var issue_1 = require("./actions/issue");
module.exports = function (app) {
    app.on('issues.opened', issue_1.onIssueCreated);
    app.on('issues.closed', issue_1.onIssueClosed);
    app.on('issue_comment.created', comment_1.onIssueCommented);
};
//# sourceMappingURL=index.js.map