import React from 'react';
import styles from './Blog.module.css'
import {NavLink} from "react-router-dom";
const Blog = props => {
    return <div>
        {props.posts.map( p => <div key={p.id}>
            <div>{p.date}</div>
            <div><NavLink to={`/post/${p.id}`}>{p.title}</NavLink></div>
            <div>{p.text}</div>
            <div>
                {p.isLiked
                    ? <div className={styles.like + ' ' +  styles.active} onClick={() => {props.unlikePost(p.id)}}></div>
                    : <div className={styles.like} onClick={()=> {props.likePost(p.id)}}></div>
                }
                {p.likesCount}
            </div>
            <div>
                <button>Read more</button>
            </div>
        </div>)}


    </div>
}

export default Blog;