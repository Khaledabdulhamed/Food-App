import React, { Fragment } from 'react'
import MealsSummary from './Meals-Summary/Meals-Summary'
import AvailableMeals from './Available-Meals/Available-Meals'
const Meals = () => {
  return (
    <Fragment>
        <MealsSummary />
        <AvailableMeals />
    </Fragment>
  )
}

export default Meals