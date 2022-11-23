import Image from "next/image";
import { ChangeEvent, FormEvent, useState } from "react";

interface IComment {
  id: number;
  content: string;
}
//배열을 랜더링할때는 key가 꼭 필요하다.

function List() {
  const [isEmpty, setIsEmpty] = useState(true);
  const [comment, setComment] = useState<IComment[]>([]);
  const [newComment, setNewComment] = useState<string>("");

  function onSubmitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setComment((prev) => [...prev, { id: prev.length, content: newComment }]);
    setNewComment("");
  }

  function onChangeInput(event: ChangeEvent<HTMLInputElement>) {
    // console.log(event.target.value);
    setNewComment(event.target.value);
  }

  return (
    <article>
      <Image
        src="/웰시코기.jpeg"
        alt="웹시코기"
        width={200}
        height={200}
        className="whelshi"
      />
      <h1>코기 왕국에 오신것을 환영합니다</h1>
      <div className="box">
        <div className="feed">
          <Image
            src="/kong.jpg"
            alt="kong"
            width={360}
            height={360}
            className="kong"
          />
          <article className="heart">
            <div className="heartBox">
              <Image
                src={isEmpty ? "/empty.png" : "/heart.png"}
                alt="heart"
                width={30}
                height={30}
                className="heart"
                onClick={() => {
                  setIsEmpty((prev) => !prev);
                  //?prev=> prevState
                }}
              />
              <p className="like">
                {" "}
                좋아요 <span>{isEmpty ? 0 : 1}</span>개
              </p>
            </div>
            <div className="name">
              <h4 className="yeaseul">GDSC WEB 이예슬</h4>
              <p>성냥팔이 소녀 컨셉이에요ㅎㅎ</p>
              <p className="date">2022.11.23</p>
            </div>
          </article>
        </div>
        <div className="commentBox">
          <form onSubmit={onSubmitForm}>
            <input
              className="commentInput"
              placeholder="댓글을 입력해주세요"
              value={newComment}
              onChange={onChangeInput}
            />
          </form>
          <ul className="list">
            {comment.map((todo: IComment) => (
              <li key={todo.id}>
                <div className="num">익명 {todo.id} </div>
                {todo.content}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export default List;
