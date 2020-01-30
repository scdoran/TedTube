// import { withA11y } from '@storybook/addon-a11y';

// // import TedCard from './Card/TedCard';
// import TedList from './TedList';

// // import videos from '../shared/mock-data/mock-data';

// export default {
//   title: 'TedList',
//   component: TedList,
//   decorators: [withA11y],
//   excludeStories: /.*Data$/,
// };

// const emptyTemplate = `<TedList :results="results" />`;
// // const listTemplate = `<TedList :results="results"><TedCard v-for="item in results" :key="item.id || 0" :item="item" :isFavorite="item.favorite" :inMyWatchlist="item.watchlist" :width="350"/></TedList>`;

// export const headingData = {
//   text: 'Heading',
//   uppercase: false,
// };

// // export const DisplayResults = () => ({
// //   components: {
// //     TedCard,
// //     TedList,
// //   },
// //   template: listTemplate,
// //   props: {
// //     results: {
// //       default: videos,
// //     },
// //   },
// // });

// export const EmptyResults = () => ({
//   components: {
//     TedList,
//   },
//   template: emptyTemplate,
//   props: {
//     results: {
//       default: [],
//     },
//   },
// });

// export const NullResults = () => ({
//   components: {
//     TedList,
//   },
//   template: emptyTemplate,
//   props: {
//     results: {
//       default: null,
//     },
//   },
// });
