// 通常の使い方
// import React from 'react';
// import Article from './Article';
// // import {Foo, Bar} from './components/FooBar';
// import * as FooBar from './components/FooBar';
// import Hoge from './components/Hoge';

// // クラスコンポーネント
// class Blog extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isPublished: false,
//       order: 1,
//       count: 0
//     }
//   }

//   componentDidMount() {
//     // いいねカウントあっぷ
//     document.getElementById('counter').addEventListener('click', this.countUp)
//   }

//   componentDidUpdate() {
//     if (this.state.count >= 10) {
//       this.setState({count: 0})
//     }
//   }

//   componentWillUnmount() {
//     document.getElementById('counter').removeEventListener('click', this.countUp)
//   }

//   公開状態を反転
//   togglePublished = () => {
//     this.setState({
//       isPublished: !this.state.isPublished
//     })
//   };

//   orderUp = () => {
//     this.setState({
//       order: this.state.order += 1
//     })
//   }

//   countUp = () => {
//     this.setState({ count: this.state.count + 1})
//   }

//   render() {
//     return (
//       <>
//         <Article title={"Reactの使い方"} 
//                  isPublished={this.state.isPublished} 
//                  order={this.state.order} 
//                  toggle={() => this.togglePublished()} 
//                  orderUp={() => this.orderUp()}
//                  count={this.state.count}
//         />
//         <FooBar.Foo />
//         <FooBar.Bar />
//         <Hoge />
//       </>
//     )
//   }
// }
// export default Blog


  // React Hooksを使う
import React from 'react';
import Article from './Article';
// import {Foo, Bar} from './components/FooBar';
import * as FooBar from './components/FooBar';
import Hoge from './components/Hoge';  

const Blog = () => {


  return (
    <>
      <Article title={"Reactの使い方"} 
      />
      <FooBar.Foo />
      <FooBar.Bar />
      <Hoge />
    </>
  )
}

export default Blog

