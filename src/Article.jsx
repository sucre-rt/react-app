// 通常の使い方
// import React from 'react';
// import LikeButton from './LikeButton';

// const Article = (props) =>{
//   return (
//     <div>
//       <h2>{props.title}</h2>
//       <label htmlFor="check">公開状態：</label>
//       <input type="checkbox" checked={props.isPublished} id="check" onClick={() => props.toggle()}/>
//       <p onClick={() => props.orderUp()}>{props.order}</p>
//       <LikeButton count={props.count}/>
//     </div>
//   )
// };

// export default Article


// React Hooksを使う  
import React, {useState} from 'react';
import LikeButton from './LikeButton';

const Article = (props) =>{
  const [isPublished, togglePublished] = useState(false)

  return (
    <div>
      <h2>{props.title}</h2>
      <label htmlFor="check">公開状態：</label>
      <input type="checkbox" checked={isPublished} id="check" onClick={() => togglePublished(!isPublished)}/>
      <p onClick={() => props.orderUp()}>{props.order}</p>
      <LikeButton />
    </div>
  )
};

export default Article