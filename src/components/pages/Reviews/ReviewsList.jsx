import { Review } from './Review';

export const ReviewsList = ({ reviews }) => {
  return (
    <>
      {reviews.length === 0 ? (
        <article>no reviews</article>
      ) : (
        reviews.map(({ id, author, content }) => {
          return (
            <ul>
              <Review key={id} review={content} reviewer={author}></Review>
            </ul>
          );
        })
      )}
    </>
  );
};
