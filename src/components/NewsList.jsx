import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const NewsList = (props) => {
  const { category, searchTerm } = props;
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      let url =
        'https://gnews.io/api/v4/top-headlines?l&lang=en&country=in&max=10&apikey=64baa5bc902ca8865059b70d333d30f8';

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
        console.log(data);
        setNews(data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
        // Handle error state or alert the user
      }
    };

    fetchNews();
  }, [category, searchTerm]); // Add category and searchTerm to dependencies array

  return (
    <Container>
      <Row>
        {news.map((article, index) => (
          <Col key={index} sm={6} md={4} lg={3} className="mb-4">
            <Card>
              <Card.Img variant="top" src={article.image} />
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
    </Container>
  );
};

export default NewsList;
