import { Context } from 'probot';
import { AUTHORIZED_USERS } from '../constants';
import { addComment } from '../utils';

export async function onIssueCreated(context: Context) {
  const user = context.payload.issue.user.login;
  if (AUTHORIZED_USERS.indexOf(user) === -1) {
    return addComment(context, `Bonjour ${user}. On se connaît ?`);
  }
  const { title } = context.payload.issue;
  if (/presentation/i.test(title)) {
    addComment(
      context,
      `Salut ${user}. Si tu le souhaites, je peux m'en occuper.

Attends une petite seconde...`,
      5000);
    addComment(context, `# Alicia Stotz

Lorem Ipsum...`, 10000);
    return;
  }
  console.log('Pas compris', title);
  return;
}
