import './App.css';
import React, { Component, Fragment } from 'react';

import propTypes from 'prop-types'
import { render } from 'react-dom';

////////////////////////////////////////////// 배열 rendering 연습 ////////////////////////////////////////////

// const foodILike = [
//   {
//     ratings: 4.5,
//     id: 1,
//     name: "Kimchi",
//     image:
//       "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg"

//   },
//   {
//     ratings: 4.7,
//     id: 2,
//     name: "Samgyeopsal",
//     image:
//       "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg"
//   },
//   {
//     ratings: 5.0,
//     id: 3,
//     name: "Bibimbap",
//     image:
//       "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb"
//   },
//   {
//     ratings: 4.0,
//     id: 4,
//     name: "Doncasu",
//     image:
//       "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg"
//   },
//   {
//     ratings: 4.2,
//     id: 5,
//     name: "Kimbap",
//     image:
//       "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg"
//   }
// ];

// class App extends Component {
//   render() {
//     return (
//       <div>
//         {foodILike.map(dish => (
//           <Food key={dish.id}
//             name={dish.name}
//             picture={dish.image}
//             rating={dish.ratings} />
//         ))}
//       </div>
//     )
//   }
// }

// function Food({ name, picture, rating }) {
//   return (
//     <div>
//        <h4> key: {key} </h4>
//       <h2>Menu: {name}</h2>
//       <h4>Rating: {rating} / 5.0</h4>
//       <img src={picture} />

//     </div>
//   )
// }

// export default App;

// jsx는 div에 감싸는것 잊지말고, function은 return 당연히 달아주고.

// const Friends = [
//   {
//     key: 1,
//     name: 'Lim',
//     hobby: 'crossfit',
//     info: 'busan',
//     brand: 'nike'
//   },
//   {
//     key: 2,
//     name: 'Kim',
//     hobby: 'soccer',
//     info: 'ulsan',
//     brand: 'UA'
//   },
//   {
//     key: 3,
//     name: 'Him',
//     hobby: 'basketball',
//     info: 'tokyo',
//     brand: 'adidas'
//   }
// ];

// class App extends Component {
//   render() {
//     return (
//       <Fragment>
//         {Friends.map(person => (
//           <Group
//             name={person.name}
//             hobby={person.hobby}
//             info={person.info}
//             brand={person.brand} />
//         ))}
//       </Fragment>
//     );
//   }
// }

// function Group({ name, hobby, info, brand }) {
//   return (
//     <div>
//       <h1>name: {name}</h1>
//       <h3>hobby: {hobby}</h3>
//       <h3>hometown: {info}</h3>
//       <h4>fav_brand: {brand}</h4>
//     </div>
//   );
// }
// export default App;

////////////////////////////////////////////// 배열 rendering 연습 ////////////////////////////////////////////


////////////////////////////////////////////// Counter  연습 ////////////////////////////////////////////

// class App extends Component {
//   state = {
//     count: 0,
//     temp: 0
//   };

//   add = () => {
//     this.setState(current => ({ //current는 state를 조회하는 객체
//       count: current.count + 1,
//       temp: current.count
//     }))
//   }
//   minus = () => {
//     this.setState(current => ({
//       count: current.count - 1,
//       temp: current.count
//     }))
//   }
//   zero = () => {
//     this.setState(current => ({
//       count: 0,
//       temp: current.count
//     }))
//   }
//   rollback = () => {
//     this.setState(current => ({
//       count: current.temp
//     }))
//   }
//   render() {
//     return <div>
//       <h1>
//         {this.state.count}
//       </h1>
//       <button onClick={this.add}>Add</button>
//       <button onClick={this.minus}>minus</button>
//       <button onClick={this.zero}>zero</button>
//       <button onClick={this.rollback}>rollback</button>
//     </div>

//   }
// }
// export default App;

class App extends Component {
  render() {
    return (
      <Counter></Counter>
    )
  }
}
export default App;

class Counter extends Component {
  state = {
    count: 0,
    temp: 0
  }
  add = () => {
    this.setState(current => ({
      count: current.count + 1,
      temp: current.count
    }))
  }

  render() {
    return (
      <div>
        { this.state.count}
        < button onClick={this.add} > + </button >
      </div>
    )
  }
}