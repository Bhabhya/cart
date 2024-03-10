import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Section = () => {
  const [postData, setPostData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        // Handle successful response
        setPostData(response.data);
      })
      .catch(error => {
        // Handle error
        setError(error);
      });
  }, []); // Empty dependency array ensures that the effect runs once when the component mounts

  return (
    <Main>
      <h2>Hello</h2>
      <div className='api'>
        {/* Display the fetched data */}
        {postData.map(post => (
          <div key={post.id}>
            <h3>{post.userId}</h3>
          </div>
        ))}
        
        {/* Display error message if there's an error */}
        {error && <p>Error fetching data: {error.message}</p>}
      </div>
    </Main>
  );
}

export default Section;

const Main = styled.div`
  .api {
    display: flex;
    flex-wrap: wrap; /* Allow items to wrap to the next row */
  }

  h3 {
    flex: 1; /* Each title takes equal space within the flex container */
    margin: 8px; /* Adjust margin as needed */
  }
`;
