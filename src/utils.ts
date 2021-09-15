import { Context } from "probot";

export const addComment = (
  context: Context, body: string, delay?: number
) => {
  if (!!delay) {
    return setTimeout(() => {
      context.octokit.issues.createComment(context.issue({
        body
      }))
    }, delay);
  }
  return context.octokit.issues.createComment(context.issue({
    body
  }));
};
