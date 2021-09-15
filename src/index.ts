import { Probot } from "probot";
import { onIssueCommented } from "./actions/comment";
import { onIssueCreated } from "./actions/issue";

export = (app: Probot) => {
  app.on("issues.opened", onIssueCreated);
  app.on('issue_comment.created', onIssueCommented);
  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
};
