# React-Paper-Scissors

Excuse the pun.

This is an implementation of Rock Paper Scissors using ReactJS and Redux.

This project grew quite steadily in size and complexity as it developed, leaping from one creative idea to the next.
Making a game that is engaging, aesthetically pleasing, and most-importantly - simple - can be challenging.

### What did you learn?

There are many things to consider when building an experience, such as: user journeys, game mechanics, players&#39; response to respective mechanics (in a meta-game sort of way). Not to mention the interesting idea of how to best rewarding and punishing a player, and have them emotionally invest in the game. Very cool thought provoking stuff.

While the project is currently incomplete, I had a blast learning about state management, immunitability, and higher-order functions through Redux (though I didn&#39;t explicitely use action and action-generators), abstracting components, as well as animations with CSS
Keyframes and JQuery, among other things.

It was also a great exercise exploring ExpressJS and it&#39;s middleware to create API endpoints for the game data to be
exposed from.

When viewing the demo, please bare in mind the following still needs to be completed however:

* Mobile-Responsivity (currently best viewed with a resolution larger than **900x700**)
* General game styling to facilitate game-flow between duels and rounds.
* The game-over game-state and respective styling.

### What would you do better?

Map and plan the structure of the game better from the beginning, and keep everything as simple as possible.

This project was simply an opportunity to learn new tools and methodologies, which led to code being re-written and re-purposed into more generic and abstract terms (good!), as I implemented different tools (e.g adding the first implementation of Redux to the game, or deciding that adding animations to the game would be engaging).

Code can get messy though, and hard to maintain withhout a clear plan or flow to the application, and each of it's methods.
Lesson learned.

Fortunately this project left me with abundance of opportunity to ponder on method and application flow.

### Okay, let's see it!

The demo is viewable [HERE](http://159.65.21.186/), where it's hosted by ExpressJS on Digital Ocean.
I opted to use Google Cloud for the MySQL data to see how their cloud services compares to AWS.

The API endpoints are availabel at:

* [/games/all](http://159.65.21.186/games/all)
* [/games/leaderboard/](http://159.65.21.186/games/leaderboard)

If you have any critique or feedback, please do reach out.
