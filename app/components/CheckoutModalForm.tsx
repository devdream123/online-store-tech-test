import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import InputText from "./core/InputText";

type Inputs = {
  email: string;
  name: string;
};

const CheckoutModalForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  //TODO:  Move React Hook Form to a Provider
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3 className="mb-5">Shipping Information</h3>
        <InputText id="email" label="Email" isRequired className="mb-5" />
        <InputText id="name" label="Name" isRequired className="mb-5" />
        <InputText id="address" label="Address" isRequired className="mb-5" />

        <h3 className="mb-5">Payment</h3>
        <InputText
          id="cardNumber"
          label="Card Number"
          isRequired
          className="mb-5"
        />
        <InputText id="cardNumber" label="Name" isRequired className="mb-5" />
        <div className="flex justify-between">
          <InputText
            id="expiry"
            label="Expiry(MM/YY)"
            isRequired
            className="mb-5 w-56"
          />
          <InputText id="cvc" label="CVC" isRequired className="mb-5 w-16" />
        </div>
      </form>
    </div>
  );
};

export default CheckoutModalForm;
