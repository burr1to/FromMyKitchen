import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import Image from "../../components/Global/Image";
import ingredient from "../../assets/ingredient.png";
import plus from "../../assets/plus.png";
import axios from "axios";
function Ingredients() {
  const [val, setVal] = useState([""]);

  const handleAdd = () => {
    if (val.length < 7) {
      const add = [...val, []];
      setVal(add);
    }
  };
  const handleChange = (e, index) => {
    const inputData = [...val];
    inputData[index] = e.target.value;
    setVal(inputData);
  };
  const handleDelete = (e, index) => {
    e.preventDefault();
    const deleteVal = [...val];
    deleteVal.splice(index, 1);
    setVal(deleteVal);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8800/ingredients", {
        ingredients: val,
      });
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(val);
  return (
    <Layout>
      <div className="grid grid-cols-2">
        <div>
          <div className="w-full my-16 px-10 mx-auto">
            <form className="max-w-xl mx-auto bg-white p-8 mt-6 rounded-lg shadow-md">
              <h1 className="mb-3 mr-5 text-4xl text-[color:var(--primary)]">
                Explore by ingredients
              </h1>
              <p className="mb-5">
                Tell us what ingredients you have or need to use up
              </p>
              <div className="mb-6">
                <label
                  htmlFor="ingredient1"
                  className="block text-gray-700 font-bold mb-2 text-2xl"
                >
                  Ingredient 1
                </label>
                <div className="flex gap-4">
                  <input
                    type="text"
                    id="ingredient1"
                    value={val[0]}
                    placeholder="Enter ingredient 1"
                    onChange={(e) => handleChange(e, 0)}
                    className="border-0 border-b-2 w-full focus:outline-none border-gray-400"
                  />
                </div>
              </div>
              <div>
                {val.slice(1).map((data, index) => {
                  return (
                    <div className="mb-5" key={index}>
                      <label className="block text-gray-700 font-bold mb-2 text-2xl">
                        Ingredient {index + 2}
                      </label>
                      <div className="flex gap-4">
                        <input
                          type="text"
                          value={data}
                          placeholder={`Enter ingredient ${index + 2}`}
                          className="border-0 border-b-2 w-full focus:outline-none border-gray-400"
                          onChange={(e) => handleChange(e, index + 1)}
                        ></input>
                        <button
                          onClick={(e) => handleDelete(e, index + 1)}
                          className=" text-white bg-[color:var(--primary)] py-1 px-3 rounded-lg"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="mb-6 flex gap-4">
                <img
                  src={plus}
                  className="w-10 h-10 hover:cursor-pointer"
                  onClick={() => handleAdd()}
                />
                <div className="flex items-center">
                  <h3
                    className="text-[color:var(--primary)] text-2xl hover:underline hover:cursor-pointer"
                    onClick={() => handleAdd()}
                  >
                    Add more ingredients
                  </h3>
                </div>
              </div>
            </form>
            <div className="text-center mt-6">
              <button
                type="submit"
                className=" text-white text-xl bg-[color:var(--primary)] py-2 px-4 rounded-lg"
                onClick={(e) => handleSubmit(e)}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className="relative inset-y-0 right-0 -mr-32">
          <Image src={ingredient} className="transform rotate-45" />
        </div>
      </div>
    </Layout>
  );
}

export default Ingredients;
