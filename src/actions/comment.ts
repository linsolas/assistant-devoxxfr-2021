import { Context } from 'probot';
import { AUTHORIZED_USERS } from '../constants';
import { addComment } from '../utils';

export async function onIssueCommented(context: Context) {
  const user = context.payload.issue.user.login;
  if (AUTHORIZED_USERS.indexOf(user) === -1) {
    return;
  }
  const { body } = context.payload.comment;
  if (/moi/i.test(body)) {
    addComment(context, `Oups ! Désolé ! Alors:
# Romain Linsolas

Bla bla bla
    `);
  } else if (/toi/i.test(body)) {
    addComment(context, `Oh, c'est gentil de demander :smiley:

Je suis un robot :robot:  fait avec [Probot](https://probot.github.io).

![Probot](https://probot.github.io/assets/img/logo.png)

Allez, je vous laisse, je vais aller prendre un Cappuchino-Huile de vidange au Starbucks...
    `);
  }
  return;
}
