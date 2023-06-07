import { Link } from "react-router-dom";
import AddComment from "../RecipeAdd/AddComment";

function Comment({ comment, path, user }) {
  return (
    <div>
      <div className=' mx-auto'>
        {comment.map((element, index) => (
          <div className='border rounded px-8 py-6 mb-4' key={index}>
            <p className='text-gray-500 text-xl mb-2'>{element.name}</p>

            <p className='text-gray-800'>{element.text}</p>
          </div>
        ))}
      </div>
      {user.user && (
        <div>
          <AddComment path={path} />
        </div>
      )}
    </div>
  );
}

export default Comment;
