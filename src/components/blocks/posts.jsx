import { set } from 'firebase/database'
import { React, useEffect, useState } from 'react'
import Post from '../cards/post'

function BlockPosts(props) {

    const args = props.args;
    const block_name = "posts";

    const block = {};
    block.id = args.block.id ?? "block-" + block_name +"" + (Math.random() + 1).toString(36).substring(7);
    block.name = block_name;
    block.title = args.block.title;


    const posts = args.posts;


    return (
        <section className={"vlx-block vlx-block--" + block.name} id={block.id}>
            <div className="container">
                { block.title != "" ?
                    <div className="vlx-text">
                        {block.title}
                    </div>
                : null}
                <div className="inner d-grid g-20">

                    {posts?.map((item) => (
                        <Post key={item.id} args={item} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default BlockPosts
