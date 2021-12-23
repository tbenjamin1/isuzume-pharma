import { useEffect, useState } from "react";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealsItem from "./mealsitem/MealsItem";
import Pagination from "../pagination/Pagination";

const AvailableMeals = (props) => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [httpError, setHttpError] = useState();
  const [CurrentPage, setCurrentPage] = useState(1);
  const [picturePerPage] = useState(10);

  //get currentpictures
  const indexOfLastPic = CurrentPage * picturePerPage;
  const indexOfFirstPic = indexOfLastPic - picturePerPage;

  // change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        throw new Error("something went wrong!");
      }

      const responseData = await response.json();
      console.log("ici c paris");
      console.log(responseData);
      const loadedMeals = [];
      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          title: responseData[key].title,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setMeals(loadedMeals);
      setIsloading(false);
    };

    fetchMeals().catch((error) => {
      setIsloading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.Loading}>
        <p>loading ...</p>
      </section>
    );
  }
  // error massege

  if (httpError) {
    return (
      <section className={classes.Error}>
        <p>{httpError}</p>
      </section>
    );
  }

  // const mapData = Data.slice(indexOfFirstPic, indexOfLastPic).map((picture) => {
  //   return (
  //     <Card key={picture.id} url={picture.thumbnailUrl} title={picture.title} />
  //   );
  // });

  // maping our available foods to mealsitem in order to acces each item
  console.log(meals);

  const mealsList = meals
    .slice(indexOfFirstPic, indexOfLastPic)
    .map((meal) => (
      <MealsItem
        id={meal.id}
        key={meal.id}
        title={meal.title}
        description={meal.description}
        price={meal.price}
      />
    ));
  return (
    <div className="container">
      <div className={classes.containercard}>{mealsList}</div>

      <Pagination
        picturePerPage={picturePerPage}
        totalPictures={meals.length}
        paginate={paginate}
      />
    </div>
  );
};

export default AvailableMeals;
