import React from 'react';
import ProTypes from 'prop-types';
import _ from'lodash';

const Pagination = ({itemsCount, pageSize, currentPage, onPageChange }) => {
    const pageCount = Math.ceil(itemsCount / pageSize);
    if(pageCount === 1) return null;
    const pages = _.range(1, pageCount + 1);
    
    return (
        <nav>
        <ul className="pagination">
                {pages.map(page => (
                <li key={page}
                 className={page === currentPage ? 'page-item active' : 'page-item'} 
                >
                <a href="/#" className="page-link" onClick={() => onPageChange(page)}>
                    {page}
                 </a>
                </li>
              ))}
          </ul>
      </nav>
    );
};

Pagination.prototype = {
    itemsCount:ProTypes.number.isRequired,
    pageSize:ProTypes.number.isRequired,
    currentPage:ProTypes.number.isRequired,
    onPageChange:ProTypes.func.isRequired,
}
export default Pagination;