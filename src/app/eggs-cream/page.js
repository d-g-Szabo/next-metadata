// we will add a data from an API
// I need to have an async server component
import Link from "next/link";
export default async function EggsCreamPage({ searchParams }) {
  // I need to fetch my data from the API
  const result = await fetch("https://dummyjson.com/recipes");
  const data = await result.json();
  console.log(data);

  // I will add query string to filter the data
  // I need to destructure searchParams --> I will use the URLSearchParams object to get the query string
  if (searchParams.sort === "desc") {
    data.recipes.reverse();
  }
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        This is the Eggs & Cream page!
        <Link href={"/eggs-cream?sort=asc"}>Sort Asc</Link>
        <Link href={"/eggs-cream?sort=desc"}>Sort Desc</Link>
        <ol>
          {data.recipes.map((recipe, key) => {
            return (
              <li key={recipe.id}>
                <Link href={`/eggs-cream/${recipe.id}`}>{recipe.name}</Link>
              </li>
            );
          })}
        </ol>
      </div>
    </>
  );
}
