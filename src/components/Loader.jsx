import { Comment } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Comment
        visible={true}
        height="80"
        width="80"
        ariaLabel="comment-loading"
        wrapperStyle={{}}
        wrapperClass="comment-wrapper"
        color="#fff"
        backgroundColor="#222"
      />
    </div>
  );
};
export default Loader;
