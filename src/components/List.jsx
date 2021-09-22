import React from 'react';
import Item from './item/Item';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const List = ({ post, title, remove }) => {
  if (!post.length) {
    return <h2 style={{ textAlign: 'center' }}>There is empty ^.^</h2>;
  }
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>{title}</h1>
      <TransitionGroup>
        {post.map((items, index) => (
          <CSSTransition key={items.id} timeout={500} classNames="post">
            <Item
              remove={remove}
              items={items}
              number={index + 1}
              key={items.id}
              title={'This is first list'}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default List;
