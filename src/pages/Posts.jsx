import React, {useEffect, useState} from 'react';
import '../Main.css'
import PostService from "../API/PostService";
import {getPageCount} from "../components/utils/pages";
import {useFetching} from "../hooks/useFetching";
import {usePosts} from "../hooks/usePost";
import MainBtn from "../components/UI/MainButton/MainBtn";
import MyModal from "../components/UI/MyModal/MyModal";
import PostForm from "../components/PostForm";
import Postfilter from "../components/Postfilter";
import Loader from "../components/loader/Loader";
import List from "../components/List";
import Pagination from "../components/UI/Pagination/Pagination";

function Posts() {
    const [post, setPost] = useState([{ id: 1, title: 'Here I am', body: 'IAM PHREAKING ON FIRE' }]);

    const [filter, setFilter] = useState({ sort: '', query: '' });
    const [totalPages, setTotalPages] = useState(0);
    const [modal, setModal] = useState(false);
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    // функция просто перебирает массив
    const remover = (item) => {
        setPost(post.filter((p) => p.id !== item.id));
    };
    const [fetchPosts, isPostLoading, postError] = useFetching(async (limit, page) => {
        const response = await PostService.getAll(limit, page)
        setPost(response.data)
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit))
    })

    console.log(totalPages)
    useEffect(() => {
        fetchPosts(limit, page)
    }, [page])

    const creation = (newList) => {
        setPost([...post, newList]);
        setModal(false);
    };
    const changePage = (page) => {
        setPage(page)
        fetchPosts(limit, page)
    }
    //создаем состояние, функцию изменяющую состояние и инициализиурем
    const sortedAndSearchPost = usePosts(post, filter.sort, filter.query);
    return (
        <div className="App">
            <MainBtn onClick={() => setModal(true)}>CREATE A TASK</MainBtn>
            <MyModal visable={modal} setVisable={setModal}>
                <PostForm create={creation} />
            </MyModal>
            <hr />
            <Postfilter filter={filter} setFilter={setFilter} />
            {/* используем условную отрисовку */}
            {postError && <h1>There is a mistake  </h1>}
            {isPostLoading ?
                <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}>
                    <Loader />
                </div> :
                <List remove={remover} post={sortedAndSearchPost} title="This is our list" />
            }
            <Pagination
                page={page}
                changePage={changePage}
                totalPages={totalPages}/>
        </div>
    );
}

export default Posts;
