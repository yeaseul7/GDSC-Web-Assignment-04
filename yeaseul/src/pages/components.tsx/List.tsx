import Image from 'next/image'
import { ChangeEvent, FormEvent, useState } from 'react';

interface IComment{
    id: number;
    content: string;
}
//배열을 랜더링할때는 key가 꼭 필요하다.

function List(){
    const [isEmpty, setIsEmpty] = useState(true);
    const [comment, setComment] = useState<IComment[]>([])
    const [newComment, setNewComment] = useState<string>("");

    function onSubmitForm(event: FormEvent<HTMLFormElement>){
        event.preventDefault();
        setComment((prev) => [...prev, {id: prev.length, content: newComment}]);
        setNewComment("");
    }

    function onChangeInput(event: ChangeEvent<HTMLInputElement>){
        // console.log(event.target.value);
        setNewComment(event.target.value);
    }

    return (
        <article>
            <Image 
             src="/웰시코기.jpeg"
             alt='웹시코기'
             width={100}
             height={100}
             className="whelshi"
             />
            <h1>웰시 왕국</h1>
            <div className='feed'>
                <Image
                src="/kong.jpg"
                
                alt='kong'
                width={380}
                height={380}
                className="kong"

                />
                <article className='heart'>
                <Image src={isEmpty ? '/empty.png': "/heart.png"} alt="heart" width={50} height={50} className="heart" onClick={()=>{
                    setIsEmpty(prev => !prev) 
                    //?prev=> prevState
                }}/>
                </article>
            </div>
            <div className='commentBox'>
                <form onSubmit={onSubmitForm}>
                <input 
                id='commentList'
                placeholder='엔터를 누르세요'
                value={newComment}
                onChange={onChangeInput}
                />
                </form>
                <ul className='list'>
                    {comment.map((todo: IComment)=>(
                        <li key={todo.id}>
                            {todo.id}번 {todo.content}
                        </li>
                    ))}
                </ul>
            </div>
        </article>
    )
}


export default List;