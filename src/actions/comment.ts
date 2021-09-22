import { Context } from 'probot';
import { AUTHORIZED_USERS, IMAGE_BASE } from '../constants';
import { addComment } from '../utils';


export async function onIssueCommented(context: Context) {
  const user = context.payload.issue.user.login;
  if (AUTHORIZED_USERS.indexOf(user) === -1) {
    return;
  }
  const { body } = context.payload.comment;
  if (/romain/i.test(body)) {
    addComment(context, `Oups ! Désolé ! Et voilà :

![Romain Linsolas](${IMAGE_BASE}/romain.png)
    `);
  } else if (/toi/i.test(body)) {
    addComment(context, `Oh, c'est gentil de demander :smiley:

Je suis un robot :robot: fait avec [Probot](https://probot.github.io).

![Probot](${IMAGE_BASE}/probot.png)

  `);
  }
  return;
}
