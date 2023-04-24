import AddComment from "../RecipeAdd/AddComment";

function Comment() {
  return (
    <div>
      <div className=' mx-auto'>
        <div className='border border-gray-400 rounded px-8 py-6 mb-4'>
          <p className='text-gray-500 text-sm mb-2'>Username</p>
          <p className='text-gray-800'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            ullamcorper diam quis quam varius convallis. Praesent in dui metus.
          </p>
        </div>
      </div>
      <div>
        <AddComment />
      </div>
    </div>
  );
}

export default Comment;
