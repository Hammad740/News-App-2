import { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Loader from './Loader';
import PaginationComponent from './PaginationComponent';

const NewsList = (props) => {
  const { category, searchTerm } = props;
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 4;

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    const fetchNews = async () => {
      let url =
        'https://gnews.io/api/v4/top-headlines?lang=en&country=in&max=10&apikey=64baa5bc902ca8865059b70d333d30f8';

      if (category) {
        url += `&topic=${category}`;
      }
      if (searchTerm) {
        url += `&q=${searchTerm}`;
      }

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setNews(data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNews();
  }, [category, searchTerm]);

  const totalArticles = news.length;
  const totalPages = Math.ceil(totalArticles / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentArticles = news.slice(startIndex, endIndex);

  return isLoading ? (
    <Loader />
  ) : (
    <Container>
      <Row>
        {currentArticles.map((article, index) => (
          <Col key={index} xs={12} md={6} lg={4} className="mb-4">
            <Card className="border-dark">
              <Card.Img
                variant="top"
                src={article.image}
                className="img-fluid"
              />
              <Card.Body>
                <Card.Title>{article.title}</Card.Title>
                <Card.Text>{article.description}</Card.Text>
                <Card.Link
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read more
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <PaginationComponent
        currentPage={currentPage}
        totalPages={totalPages}
        handleClick={handleClick}
      />
    </Container>
  );
};

export default NewsList;
