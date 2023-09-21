import React from 'react'
import './Available-Meals.css'
import Card from '../../UI/Card/Card';
import MealItems from '../Meal-Items/Meal-Items';
import { useEffect } from 'react';
import { useState } from 'react';


const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const [httpError, setHttpError] = useState()

  useEffect(()=>{
    const fetchMeals = async () => {
     
   const response = await fetch('https://http-post-59704-default-rtdb.firebaseio.com/meals.json')
      
   if(!response.ok){
    throw new Error('Someting Went wrong!');
   }
   const responseData= await response.json();

      const loadedMeals = [];

      for (const key in responseData ){
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          price: responseData[key].price,
          description: responseData[key].description,


        })
        
        }
        setMeals(loadedMeals)
        setIsLoading(false)
      }
        

  fetchMeals().catch((error) => {
    setIsLoading(false);
    setHttpError(error.message)
  });



  }, [])

  if (isLoading){
    return (<section className='mealsLoading'>
      <p>Loading...</p>
    </section>)
  }

  if (httpError) {
    return <section className='mealsError'>
    <p>{httpError}</p>
  </section>
  }

    const mealsList =meals.map(
      meal => <MealItems 
      id={meal.id}
      key= {meal.id} 
      name={meal.name} 
    description = {meal.description}
     price = {meal.price} />);
  return (
    <section className='meals'>
        <Card>
            {mealsList}
        </Card>
    </section>
  )
}

export default AvailableMeals