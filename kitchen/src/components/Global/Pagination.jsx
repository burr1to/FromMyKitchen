import React from "react";

function Pagination({ per, total, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(total / per); i++) {
    pageNumbers.push(i);
  }
  return (
    <ul className='inline-flex -space-x-px gap-x-2'>
      {pageNumbers?.map((number) => (
        <li key={number} className=''>
          <a
            href='#'
            onClick={() => paginate(number)}
            className='px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
          >
            {number}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Pagination;
