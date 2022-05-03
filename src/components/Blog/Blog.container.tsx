
import React from "react";
import BlogView from "./Blog.view";
import { BlogContext } from "./utils/context";

export default function BlogContainer() {
    const [count, setCount] = React.useState(1);
    return (
    <BlogContext.Provider
        value={{
        count: count,
        }}
    >
        <BlogView />
    </BlogContext.Provider>
    );
}
