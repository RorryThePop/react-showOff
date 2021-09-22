import { useMemo } from 'react';

export const useSortedPosted = (post, sort) => {
  const sortMyPost = useMemo(() => {
    console.log('worked');

    if (sort) {
      return [...post].sort((a, b) => a[sort].localeCompare(b[sort]));
    } else {
      return post;
    }
  }, [sort, post]);
  return sortMyPost;
};

export const usePosts = (post, sort, query) => {
  const sortedPosts = useSortedPosted(post, sort);
  const sortedAndSearchPost = useMemo(() => {
    return sortedPosts.filter((post) => post.title.toLowerCase().includes(query.toLowerCase()));
  }, [query, sortedPosts]);
  return sortedAndSearchPost;
};
