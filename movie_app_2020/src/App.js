import React, { Component, Fragment } from 'react';
import './App.css';
import PropTypes from 'prop-types';

// function Lim({ name, image, rating }) {
//   return <div> <h3> Lim loves {name} </h3>
//     <h3>{rating}/5.0</h3>
//     <img src={image} alt='img' />
//   </div>;
// }
// Lim.propTypes = {
//   name: PropTypes.string.isRequired,
//   image: PropTypes.string.isRequired,
//   // isRequired를 지워도 작동은 한다 => undefined로 나올 뿐
//   rating: PropTypes.number.isRequired
//   // rating의 propTypes가 string으로 돼있으면 콘솔창에 에러가 발생
// };

// // father component
// function App() {
//   return (
//     <div>
//       {/* dish is object, dish는 각각의 아이템이야 */} {/* foodLike라는 object에 map함수 적용 */}
//       {foodLike.map(dish => <Lim key={dish.id} name={dish.name} image={dish.image} rating={dish.rating} />)}


//       {/* <Lim fav='develop' />
//       <Lim fav='eunsoo' />
//       <Lim fav='Apple' /> */}
//     </div>);

// }

// export default App;



// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           {/* <img src={logo} className="App-logo" alt="logo" /> */}
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;




// import MyName from './MyName.js';
// import Change from './Change.js';
// class App extends Component {
//   render() {
//     return (

//       <Fragment>
//         {/* defaultProps */}
//         {/* <MyName> // name이라는 props를 보여주도록 설정 */}
//        name은 property, '자바스'는 name property의 value
//         <MyName name='자바스'></MyName>
//       </Fragment>


//     )
//   }
// }
// export default App;



///////////////////////////// Counter /////////////////////////////



// import Counter from './counter.js';
// class App extends Component {
//   render() {
//     return (
//       <div className='App'>
//         {/* Counter라는 component */}
//         <Counter></Counter>
//       </div>
//     )
//   }
// }
// export default App;
///////////////////////////// Counter /////////////////////////////



// #2 Nomad coders = JSX, props
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
//         {/* dish는 object, 임의로 지은 이름. foodILike라는 배열의 각 원소를 한번씩 iter하는 object로 생각하자 */}
//         {/* map함수가 없었다면, 일일이 foodILike의 원소들을 기입해야한다.*/}
//         {foodILike.map(dish => (
//           <Food
//             key={dish.id} //key props를 넘겨주어야한다 고유성을 위해.
//             name={dish.name}
//             picture={dish.image}
//             rating={dish.ratings} />
//         ))}
//       </div>
//     );
//   }
// }
// export default App;

// Food.propTypes = {
//   name: propTypes.string.isRequired,
//   picture: propTypes.string.isRequired,
//   ratings: propTypes.number.isRequired
// }


// // 상위 App 컴포넌트에서 받은 name과 picture라는 props들
// function Food({ name, picture, rating }) {
//   return (
//     <div>
//       <h2>I like {name}</h2>
//       <h3> {rating}/5.0 </h3>
//       <img src={picture} />
//     </div>
//   );
// }



class App extends Component { // class App은 return을 가지지 않는다 . function App이 아니기 때문에, 그러므로 render를 갖는다, 이 render는 Component에서 땡겨온것이다

  // state는 object, 변경될수 있는 data를 넣을 수 있는. 그것이 state를 쓰는 이유 
  // we push the data that want to change in the state.

  state = {
    count: 0
  };

  add = () => {
    // Do not mutate state directly. Use setState() <= 경고문, setState()라는 메서드를 이용해서 state(데이터)를 바꿔주자.
    // 왜냐하면 setState()를 사용하지 않으면, render()메서드가 새로 호출되지 않기 때문이다. 즉 setState()를 사용해야 render()가 반복적으로 작동한다.
    // this.state.count = 1;

    // this.setState({ count: this.state.count + 1 }); // 이런식으로 state를 사용하는 것은 좋지 않기에, current를 사용한다.

    this.setState(current => ({ count: current.count + 1 }))
  }
  minus = () => {
    this.setState(current => ({ count: current.count - 1 }))
  }

  // 즉 render()메서드 이하는, 매순간 내가 setState()를 호출할 때마다, react는 새로운 state와 함께 render method()를 호출할 것이다.
  render() {
    return <div>
      <h1>
        {this.state.count}
      </h1>
      <button onClick={this.add}>ADD</button>
      <button onClick={this.minus}>MINUS</button>
    </div>
  }
}



// 3. Movie_app
import axios from "axios"; // fetch 대신 사용..? (HTTP 비동기 통신 라이브러리)
import Movie from "./movie.js";

class App extends React.Component {

  // state를 사용한다 => 클래스형이다
  state = {
    isLoading: true,
    movies: []
  };

  // await은 async와 한 세트
  getMovies = async () => {
    const { data: { data: { movies } } } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({ movies, isLoading: false }); // state 객체를 변경시키고 싶을 때 setState 메서드 사용한다
  };


  componentDidMount() { // component가 rendering될 때, getMovies()메서드 실행
    this.getMovies();
  }

  render() {

    // 아래 return문 이하에서 간략하게 isLoading, movies를 간략하게 쓰기 위해
    const { isLoading, movies } = this.state;


    return (
      <section className='container'>
        {/* 원래는 this.state.isLoading이지만, 위에서 const 내에 선언하여 간략화한다(movies도 마찬가지). */}
        {isLoading
          ? <div className='loader'>
            <span className='loader__text'>
              Loading...
            </span>
          </div>
          : <div className='movies'>
            {/* state에서 정의한 movies */}
            {movies.map(movie => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        }
      </section>
    );
  }
}

export default App;