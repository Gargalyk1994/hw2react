// Задание: Список комментариев с удалением.
// Цель: Комбинирование useState, рендеринга списков и обработки событий для создания интерактивного интерфейса.
// Задача:
// Создать компонент CommentsList, который отображает список комментариев. Каждый комментарий должен иметь кнопку для его удаления. При нажатии на кнопку комментарий должен удаляться из списка.

// Можно использовать заготовку:
// const [comments, setComments] = useState([
// { id: 1, text: "Это первый комментарий" },
// { id: 2, text: "Это второй комментарий" },
// { id: 3, text: "Это третий комментарий" }
// ]);
import {useState} from 'react';

function CommentsList() {
    const [comments, setComments] = useState([
        { id: 1, text: "Это первый комментарий" },
        { id: 2, text: "Это второй комментарий" },
        { id: 3, text: "Это третий комментарий" }
    ]);

    const handleDeleteComment = (commentId) => {
        setComments(comments.filter(comment => comment.id !== commentId));
    };
    return ( 
        <div>
            <h2>Список комментариев</h2>
            {comments.map(comment => (
                <div key={comment.id}>
                    <p>{comment.text}</p>
                    <button onClick={() => handleDeleteComment(comment.id)}>Удалить</button>
                </div>
            ))}
        </div>
    );
}

export default CommentsList;