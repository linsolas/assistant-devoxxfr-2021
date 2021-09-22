import { Probot } from "probot";
import { onIssueCommented } from "./actions/comment";
import { onIssueClosed, onIssueCreated } from "./actions/issue";

export = (app: Probot) => {
  app.on('issues.opened', onIssueCreated);
  app.on('issues.closed', onIssueClosed);
  app.on('issue_comment.created', onIssueCommented);
};
