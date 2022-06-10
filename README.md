# React Exercise

The exercise code can be found on [CodeSandbox](https://codesandbox.io/s/into-to-react-2022-movie-list-step-1-ocfn03).

## Todo

### Step 1 - Cleanup

_Goal: Learn how to think in component based user interfaces and how React components are rendered._

- [ ] ♻️ Cleanup the application by splitting App.js into (reusable) smaller components
- [ ] ♻️ Refactor app.css into smaller CSS files, co-located with the relevant component. 
- [ ] 🐛 Fix all console warnings & errors

> Tip: Use a CSS-in-JS library like [styled-components](https://www.styled-components.com/) or [emotion](https://emotion.sh/docs/introduction) for easier code colocation of a single component. It also enables component-oriented theming patterns.

### Step 2 - Make it work - [CodeSandbox](https://codesandbox.io/s/react-exercise-2022-movie-list-step-2-kj3f64)

_Goal: Learn how we can use React Hooks and EcmaScript to make applications do more than just display data._

- [ ] 🚸 Display the actual genre name in stead of the genre id
- [ ] ✨ Clicking the "+"-icon on a post should add the movie to the watchlist
- [ ] ✨ Save the watchlist in localStorage, load it back from localStorage when visiting the app
- [ ] ✨ Selecting a "Sort by" option should sort the watchlist
- [ ] ✨ The "Genres" filter should display all genres found in the watchlist
- [ ] ✨ Clicking a genre in "Genres" should filter the watchlist, so only movies with the selected genre are displayed
- [ ] 💅 Format the date to e.g. 19 sep 2019

### Step 3 - Make it dynamic

_Goal: Real applications often work with remote data. Learn how we can fetch data in React_

- [ ] 🔑 Create an account at [The Movie DB](https://www.themoviedb.org/), and obtain your API key in [your profile settings](https://www.themoviedb.org/settings/api)
- [ ] 📝 API documentation can be found [here](https://developers.themoviedb.org/3/getting-started/introduction)
