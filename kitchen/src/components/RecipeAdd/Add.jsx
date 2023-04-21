import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import Layout from "../Layout/Layout";
import Method from "./Method";

function Add() {
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      ingredients: [{ name: "", quantity: 0 }],
    },
  });
  const { fields, append, prepend, remove } = useFieldArray({
    name: "ingredients",
    control,
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Layout>
      <div className='my-16'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Prep Time</label>
          <input
            type='number'
            id='phours'
            {...register("phours", { required: true, maxLength: 30 })}
          />
          <input
            type='number'
            id='pminutes'
            {...register("pminutes", { required: true, maxLength: 30 })}
          />
          <br /> <br />
          <label>Cook Time</label>
          <input
            id='chours'
            type='number'
            {...register("chours", { required: true, maxLength: 30 })}
          />
          <input
            id='cminutes'
            type='number'
            {...register("cminutes", { required: true, maxLength: 30 })}
          />
          <br /> <br />
          <label>Ingredients</label>
          {fields.map((field, index) => {
            return (
              <section className='mx-10' key={field.id}>
                <input {...register(`ingredients.${index}.name`)} />
                <br />
                <br />
                <input
                  type='number'
                  {...register(`ingredients.${index}.quantity`, {
                    valueAsNumber: true,
                  })}
                />
              </section>
            );
          })}
          <button
            onClick={() => {
              append({
                name: "",
                quantity: 0,
              });
            }}
          >
            Append
          </button>
          <br />
          <button type='submit'>Submit</button>
        </form>
      </div>
    </Layout>
  );
}

export default Add;
