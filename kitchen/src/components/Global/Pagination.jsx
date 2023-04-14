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
            href='#!'
            onClick={() => paginate(number)}
            className='px-4 py-2 leading-tight text-[19px] border border-gray-400 rounded-lg text-black active:bg-slate-900 active:text-white active:border-slate-900 hover:bg-slate-900 hover:text-white hover:border-slate-900 '
          >
            {number}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Pagination;
