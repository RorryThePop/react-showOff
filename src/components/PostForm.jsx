import React, { useState } from 'react';
import MainInput from './input/MainInput';
import Button from './UI/MainButton/MainBtn';
const PostForm = ({ create }) => {
  const [input, setInput] = useState({ title: '', body: '' });

  const AddNewPost = (e) => {
    e.preventDefault();
    const newList = {
      ...input,
      id: Date.now(),
    };
    create(newList);
    setInput({ title: '', body: '' });
  };
  return (
    <div className="input">
      <form>
        <MainInput
          type="text"
          placeholder="title"
          value={input.title}
          onChange={(e) => setInput({ ...input, title: e.target.value })}
        />
        <MainInput
          type="text"
          placeholder="description"
          value={input.body}
          onChange={(e) => setInput({ ...input, body: e.target.value })}
        />
        <Button onClick={AddNewPost}>create post</Button>
      </form>
    </div>
  );
};

export default PostForm;
