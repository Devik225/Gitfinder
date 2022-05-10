import React, {useState, useEffect}from 'react'
import '../componentsCSS/RepoContainer.css'
import Card from './Card'
import Pagination from 'react-responsive-pagination';
import '../componentsCSS/pagination.css';

function RepoContainer(props) {
  let totalPages = parseInt(props.pages/6);
  if(props.pages % 6){
    totalPages++;
  }
  const data = props.data;
  const [currentPage, setCurrentPage] = useState(1);

  function handlePageChange(page) {
    setCurrentPage(page);
    props.updateRepo(page);
  }

  return (
    <div className='repoContainer'>
    <div className='repoHeading'>Repositories</div>
    <div className='repoContainerContent'>
    {Array.from(data).map(val=><Card link={val.html_url} name={val.name} description={val.description} language={val.language} fork={val.forks_count}/>)}
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