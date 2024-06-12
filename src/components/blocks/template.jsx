import { set } from 'firebase/database'
import { React, useEffect, useState } from 'react'
import Post from '../cards/post'

function BlockPosts(props) {

    const args = props.args;
    const block_name = "__block_name__";

    const block = {};
    block.id = args.block.id ?? "block-" + block_name + "-" + (Math.random() + 1).toString(36).substring(7);
    block.name = block_name;
    block.title = args.block.title;


    return (
        <section className={"vlx-block vlx-block--" + block.name} id={block.id}>
            <div className="container">
                { block.title != "" ?
                    <div className="vlx-text">
                        {block.title}
                    </div>
                : null}
                <div className="inner">
                </div>
            </div>
        </section>
    )
}

export default BlockPosts
