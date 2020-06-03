// Reactだけを使う
// import React from 'react';

// const LikeButton = (props) => {
//   return(
//   <button id="counter">いいね数：{props.count}</button>
//   )
// }

// export default LikeButton


// ReactHooks useEffectを使う
import React, {useState, useEffect} from 'react';

const LikeButton = (props) => {

  const test = "test"

  const [count, counter] = useState(0);
  const [limit, release] = useState(true);

  const countUp = () => {
    counter(count + 1)
  }

  const test = "testttest"

  useEffect(() => {
    // console.log('render')
    document.getElementById('counter').addEventListener('click', countUp)
    if (count >= 10) {
      counter(0);
    }
    return () => {
      // console.log('unmounting')
      document.getElementById('counter').removeEventListener('click', countUp)
    }
  }, [limit]);

  return(
    <>
      <button id="counter">いいね数：{count}</button>
      <button onClick={() => release(!limit)}>もっといいね</button>
    </>
  )
}

export default LikeButton