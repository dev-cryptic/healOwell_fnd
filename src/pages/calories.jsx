import React, { useState } from "react";

const CalorieFinder = () => {
  const [meals, setMeals] = useState([]);
  const [nutritionalValues, setNutritionalValues] = useState({});
  const [totalCalories, setTotalCalories] = useState(0);
  const [query, setQuery] = useState("");

  // Function to add a meal
  const addMeal = () => {
    if (query.trim()) {
      setMeals([...meals, query.trim()]);
      setQuery(""); // Clear input after adding
    }
  };

  // Function to remove a meal
  const removeMeal = (index) => {
    setMeals(meals.filter((_, i) => i !== index));
  };

  // Function to fetch nutritional values and calculate total calories
  const findCalories = async () => {
    let newTotalCalories = 0;
    const combinedNutritionalValues = {
      serving_size_g: 0,
      carbohydrates_total_g: 0,
      cholesterol_mg: 0,
      fat_saturated_g: 0,
      fat_total_g: 0,
      fiber_g: 0,
      potassium_mg: 0,
      protein_g: 0,
      sodium_mg: 0,
      sugar_g: 0,
    };

    const promises = meals.map(async (meal) => {
      const response = await fetch(
        `https://api.api-ninjas.com/v1/nutrition?query=${meal}`,
        {
          headers: { "X-Api-Key": "/FCrN3MexHhGU3hh0b5hgQ==dGSlyDmxbUbtfY1i" },
        }
      );
      const result = await response.json();

      // Check if result is available and contains the expected data
      if (result && result[0]) {
        const mealData = result[0];
        console.log("Fetched meal data:", mealData); // Log the fetched meal data for debugging
        newTotalCalories += mealData.calories;

        // Update combined nutritional values
        Object.keys(combinedNutritionalValues).forEach((key) => {
          combinedNutritionalValues[key] += mealData[key] || 0;
        });
      } else {
        console.error("No data found for meal:", meal);
      }
    });

    // Wait for all API requests to complete
    await Promise.all(promises);

    console.log("Total Calories:", newTotalCalories); // Log the total calories for debugging

    // Update state after fetching data
    setNutritionalValues(combinedNutritionalValues);
    setTotalCalories(newTotalCalories);
  };

  // Calculate exercise duration based on total calories
  const calculateExerciseDuration = (calories) => {
    const joggingCaloriesPerMinute = 378;
    const yogaCaloriesPerMinute = 223;
    const gymCaloriesPerMinute = 483;
    const walkingCaloriesPerMinute = 294;

    return {
      jogging: Math.round((calories / joggingCaloriesPerMinute) * 60),
      yoga: Math.round((calories / yogaCaloriesPerMinute) * 60),
      gym: Math.round((calories / gymCaloriesPerMinute) * 60),
      walking: Math.round((calories / walkingCaloriesPerMinute) * 60),
    };
  };

  // Render component
  const exerciseDuration = calculateExerciseDuration(totalCalories);

  return (
    <div className="container mx-auto py-10">
      <div className="text-center">
        <div className="flex justify-center">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="form-control inputstyle p-4 border border-gray-300 rounded-lg text-lg"
            placeholder="Search for calories in your food..."
          />
          <button
            type="button"
            onClick={addMeal}
            className="ml-3 bg-green-500 text-white px-6 py-3 rounded-lg text-xl font-semibold"
          >
            Add Meal
          </button>
        </div>

        <div className="mt-6">
          <h3 className="text-2xl font-semibold text-gray-700">Added Meals:</h3>
          <table className="w-full mt-4 border border-collapse">
            <thead>
              <tr>
                <th className="bg-black text-white p-2">Meal</th>
                <th className="bg-black text-white p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {meals.map((meal, index) => (
                <tr
                  key={index}
                  className={
                    index % 2 === 0
                      ? "bg-blue-400 text-white"
                      : "bg-green-400 text-white"
                  }
                >
                  <td className="p-3">{meal}</td>
                  <td className="p-3">
                    <button
                      onClick={() => removeMeal(index)}
                      className="bg-gray-500 text-black px-3 py-1 rounded-lg hover:bg-red-600 transition duration-300"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <button
          type="button"
          onClick={findCalories}
          className="mt-8 bg-green-500 text-white px-6 py-3 rounded-lg text-xl font-semibold"
        >
          Find Calories
        </button>

        <div className="shadow-lg rounded-lg p-8 mt-8 bg-white">
          <div className="text-2xl font-bold text-green-600 mb-4">
            Nutritional Values
          </div>
          <ul className="text-lg space-y-4">
            <li>Total Serving Size: </li>
            <li>Total Carbohydrates: {nutritionalValues.carbohydrates_total_g} g</li>
            <li>Total Cholesterol: {nutritionalValues.cholesterol_mg} mg</li>
            <li>Total Saturated Fat: {nutritionalValues.fat_saturated_g} g</li>
            <li>Total Fat: {nutritionalValues.fat_total_g} g</li>
            <li>Total Fiber: {nutritionalValues.fiber_g} g</li>
            <li>Total Potassium: {nutritionalValues.potassium_mg} mg</li>
            <li>Total Protein: {} g</li>
            <li>Total Sodium: {nutritionalValues.sodium_mg} mg</li>
            <li>Total Sugar: {nutritionalValues.sugar_g} g</li>
          </ul>
        </div>

    
      </div>
    </div>
  );
};

export default CalorieFinder;
