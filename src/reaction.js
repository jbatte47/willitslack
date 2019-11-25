import yesReactions from './yes-reactions';
import noReactions from './no-reactions';

const randomItem = items => items[Math.floor(Math.random() * items.length)];

const reaction = condition => (condition ? randomItem(yesReactions) : randomItem(noReactions));

export default reaction;
