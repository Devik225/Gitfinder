import React, {useState, useEffect}from 'react'
import '../componentsCSS/RepoContainer.css'
import Card from './Card'
import Pagination from 'react-responsive-pagination';
import '../componentsCSS/pagination.css';

function RepoContainer() {
  const totalPages = 10;
  const [currentPage, setCurrentPage] = useState(1);

  function handlePageChange(page) {
    setCurrentPage(page);
  }

  return (
    <div className='repoContainer'>
    <div className='repoHeading'>Repositories</div>
    <div className='repoContainerContent'>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      </div>
      <div className='pagination'>
      <Pagination
      total={totalPages}
      current={currentPage}
      onPageChange={page => handlePageChange(page)}
      />
      </div>
    </div>
  )
}

export default RepoContainer