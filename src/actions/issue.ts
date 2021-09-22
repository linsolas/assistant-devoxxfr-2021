import { Context } from 'probot';
import { AUTHORIZED_USERS, IMAGE_BASE } from '../constants';
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
      `Salut @${user}. Si tu le souhaites, je peux m'en occuper.

Attends une petite seconde...`,
      5000);
    addComment(context, `Et voici pour Alicia:

![Alicia Stotz](${IMAGE_BASE}/alicia.png)
`, 10000);
    return;
  }
  return;
}

export async function onIssueClosed(context: Context) {
  const user = context.payload.issue.user.login;
  if (AUTHORIZED_USERS.indexOf(user) === -1) {
    return addComment(context, `Bonjour ${user}. On se connaît ?`);
  }
  return addComment(context, `
    Allez, je vous laisse, je vais aller prendre un Cappuchino-Huile de vidange au Starbucks :coffee:

    A plus dans l'bug!
  `);
}
