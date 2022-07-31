import React from 'react';
import styled from "styled-components";
import {DOTS, usePagination} from "../../hooks/usePagination";

const PaginationComponentWrapper = styled.ul`
  display: flex;
  list-style-type: none;
  max-width: 1280px;
  overflow-x: scroll;

  .pagination-item {
    margin-right: 10px;
    padding: 12px;
    text-align: center;
    color: rgba(0,0,0,.87);
    display: flex;
    box-sizing: border-box;
    align-items: center;
    border-radius: 21px;
    font-size: 13px;

    &.dots:hover {
      background-color: transparent;
      cursor: default;
    }
    &:hover {
      background-color: rgba(0, 0, 0, 0.04);
      cursor: pointer;
    }

    &.selected {
      background-color: rgba(0, 0, 0, 0.08);
    }

    .arrow {
      &::before {
        position: relative;
        /* top: 3pt; Uncomment this to lower the icons as requested in comments*/
        content: '';
        /* By using an em scale, the arrows will size with the font */
        display: inline-block;
        width: 0.4em;
        height: 0.4em;
        border-right: 0.12em solid rgba(0, 0, 0, 0.87);
        border-top: 0.12em solid rgba(0, 0, 0, 0.87);
      }

      &.left {
        transform: rotate(-135deg) translate(-50%);
      }

      &.right {
        transform: rotate(45deg);
      }
    }

    &.disabled {
      pointer-events: none;

      .arrow::before {
        border-right: 0.12em solid rgba(0, 0, 0, 0.43);
        border-top: 0.12em solid rgba(0, 0, 0, 0.43);
      }

      &:hover {
        background-color: transparent;
        cursor: default;
      }
    }
  }
`

const PaginationComponent = ({totalCount , rows , changePage, page }) => {
  const paginationRange = usePagination({
    currentPage: page,
    totalCount,
    siblingCount: 10,
    pageSize: rows
  });

  if (page === 0 || paginationRange.length < 2) {
    return null;
  }

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <PaginationComponentWrapper>
      <li
        className={`pagination-item ${page === 1 ? 'disabled' : ''}`}
        onClick={() => changePage(page - 1)}
      >
        <div className="arrow left" />
      </li>
      {paginationRange.map((pageNumber, index) => {
        if (pageNumber === DOTS) {
          return <li key={index} className="pagination-item dots">&#8230;</li>;
        }
        return (
          <li
            key={index}
            className={`pagination-item ${pageNumber === page ? 'selected' : ''}`}
            onClick={() => changePage(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        className={`pagination-item ${page === lastPage ? 'disabled' : ''}`}
        onClick={() => changePage(page + 1)}
      >
        <div className="arrow right" />
      </li>
    </PaginationComponentWrapper>
  );
};

export default PaginationComponent;
