import { Link } from "react-router-dom";
import AddComment from "../RecipeAdd/AddComment";
import paths from "./../../context/utils";

function Comment({ comment, path, user }) {
  return (
    <div>
      <div className='my-4 mx-auto'>
        {comment.map((element, index) => (
          <div className='py-6' key={index}>
            <Link
              to={`${paths[2]}/${element.userID}`}
              className='text-gray-500 text-xl'
            >
              {element.name}
            </Link>
            <div className='flex justify-between px-4 my-3'>
              <p className='text-gray-800'>{element.text}</p>
              <p className='bg-[color:var(--primary)] text-white py-1 px-3 rounded-lg'>
                {element.createdAt.split("T")[0]}
              </p>
            </div>
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
