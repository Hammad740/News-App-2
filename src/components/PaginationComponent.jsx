import { Pagination } from 'react-bootstrap';

const PaginationComponent = (props) => {
  const { currentPage, totalPages, handleClick } = props;

  const renderPageItems = () => {
    const pageItems = [];
    for (let i = 1; i <= totalPages; i++) {
      pageItems.push(
        <Pagination.Item
          key={i}
          active={i === currentPage}
          onClick={() => handleClick(i)}
        >
          {i}
        </Pagination.Item>
      );
    }
    return pageItems;
  };

  return (
    <div className="d-flex justify-content-center">
      <Pagination>
        <Pagination.Prev
          onClick={() => currentPage > 1 && handleClick(currentPage - 1)}
        />
        {renderPageItems()}
        <Pagination.Next
          onClick={() =>
            currentPage < totalPages && handleClick(currentPage + 1)
          }
        />
      </Pagination>
    </div>
  );
};

export default PaginationComponent;
