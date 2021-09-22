import React from 'react';
import MainBtn from '../UI/MainButton/MainBtn';
import {useHistory} from 'react-router-dom'
const Item = (props) => {
    const router = useHistory()
    console.log(router)
  return (
    <div className="output">
      <div>
        <strong>
          {props.items.id}. {props.items.title}
        </strong>
        <p>{props.items.body}</p>
      </div>
      <div>
            <MainBtn onClick={() => router.push(`/posts/${props.items.id}`)}>Add</MainBtn>
          <MainBtn onClick={() => props.remove(props.items)}>delete</MainBtn>
      </div>
    </div>
  );
};

export default Item;
