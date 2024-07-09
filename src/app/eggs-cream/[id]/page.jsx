// this is a dynamic route that will be nested under the eggs-cream route
// to access the value of the ID, you can use the params object

import Link from "next/link";

// the params object is passed to the component as a prop (folder name is the same as the file name) the value of the ID is accessed by using params.id
export default async function IDPage({ params }) {
  const result = await fetch(`https://dummyjson.com/recipes/${params.id}`);
  const data = await result.json();

  console.log(params);
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <Link href={"/eggs-cream"}>Back</Link>
        This is the ID nested route!
        <p>These are the params: {params.id}</p>
        <h2>Recapies: {data.name}</h2>
        <p>Cuisine: {data.cuisine}</p>
      </div>
    </>
  );
}
