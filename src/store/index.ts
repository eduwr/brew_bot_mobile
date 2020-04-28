// import { createStore } from 'redux';
// import { HopInterface } from '../interfaces/index';

// const initialHop: HopInterface = {
//   weight: 0,
//   alphaAcid: 0,
//   boilTime: 0
// };

// function hopsAction(hops = [initialHop], action): HopInterface[] {
//   switch (action.type) {
//     case 'INCREMENT':
//       return [...hops, initialHop];
//     case 'DECREMENT':
//       if (hops) {
//         return hops.splice(-1, 1);
//       } else {
//         return hops;
//       }
//     default: return hops
//   }
// }

// let store = createStore(hopsAction)

// store.subscribe(() => console.log(store.getState()))

// store.dispatch({type: 'INCREMENT'})
