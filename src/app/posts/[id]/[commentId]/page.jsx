export default function CommentIdPage({ params }) {
  console.log(params);
  return (
    <>
      <h1 className="flex min-h-screen flex-col items-center justify-between p-24">
        This is the commentId nested route!
        <p>Post Page : {params.id}</p>
        <p>Comment Page : {params.commentId}</p>
      </h1>
    </>
  );
}
