import { Link } from "react-router-dom";
import AddComment from "../RecipeAdd/AddComment";

function Comment({ comment }) {
  return (
    <div>
      <div className=' mx-auto'>
        {comment.map((element, index) => (
          <div
            className='border border-white border-b-gray-400 rounded px-8 py-6 mb-4'
            key={index}
          >
            <Link to={`http://localhost:5173/profile/${element.userID}`}>
              <p className='text-gray-500 text-sm mb-2'>{element.name}</p>
            </Link>
            <p className='text-gray-800'>{element.text}</p>
          </div>
        ))}
      </div>

      <div>
        <AddComment />
      </div>
    </div>
  );
}

export default Comment;
