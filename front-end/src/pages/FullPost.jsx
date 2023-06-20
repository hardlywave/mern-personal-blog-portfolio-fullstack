import React from "react";
import axios from "./axios.js";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import { Post } from "../components/Post";
import { Index } from "../components/AddComment";
import { CommentsBlock } from "../components/CommentsBlock";
import { useSelector } from "react-redux";
import { selectIsAuth } from "../redux/slices/auth.js";

export const FullPost = () => {
  const isAuth = useSelector(selectIsAuth);
  const [data, setData] = React.useState();
  const [isLoading, setLoading] = React.useState(true);
  const { id } = useParams();

  React.useEffect(() => {
    axios
      .get(`/posts/${id}`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  if (isLoading) {
    return <Post isLoading={setLoading} isFullPost />;
  }
  return (
    <>
      <Post
        id={data._id}
        title={data.title}
        imageUrl={data.imageUrl ? `http://localhost:4444${data.imageUrl}` : ""}
        user={data.user}
        createdAt={data.createdAt}
        viewsCount={data.viewsCount}
        commentsCount={3}
        tags={data.tags}
        isFullPost
      >
        <ReactMarkdown children={data.text} />
      </Post>
      <CommentsBlock
        items={[
          {
            user: {
              fullName: "Name 1",
              avatarUrl: "https://mui.com/static/images/avatar/1.jpg",
            },
            text: "Example #1",
          },
          {
            user: {
              fullName: "Name 2",
              avatarUrl: "https://mui.com/static/images/avatar/2.jpg",
            },
            text: "Example #2",
          },
        ]}
        isLoading={false}
      >
        {isAuth ? <Index {...data.user} /> : ""}
      </CommentsBlock>
    </>
  );
};
