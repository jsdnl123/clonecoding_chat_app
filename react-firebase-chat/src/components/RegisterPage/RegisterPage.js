import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = useRef();
  password.current = watch("password");
  const onSubmit = (data) => {
    console.log(data);
  }; // your form submit function which will invoke after successful validation

  console.log(watch("email")); // you can watch individual input by pass the name of the input
  return (
    <div className="auth-wrapper">
      <div style={{ textAlign: "center" }}>
        <h3>Register</h3>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Email</label>
        <input
          name="email"
          type="email"
          {...register("email", { required: true, pattern: /^S+@\S+$/i })}
        />
        {errors.email && <p>This field is required</p>}

        <label>Name</label>
        <input
          name="name"
          {...register("name", { required: true, maxLength: 10 })}
        />
        {errors.name && errors.name.type === "required" && (
          <p>This field is required</p>
        )}
        {errors.name && errors.name.type === "maxLength" && (
          <p>Your input exceed maximum length</p>
        )}

        <label>Password</label>
        <input
          name="password"
          type="password"
          {...register("password", { required: true, minLength: 6 })}
        />
        {errors.password && errors.password.type === "required" && (
          <p>This field is required</p>
        )}

        <label>Password Confirm</label>
        <input
          name="passwordconfirm"
          type="password"
          {...register("passwordconfirm", {
            required: true,
            validate: (value) => value === password.current,
          })}
        />
        {errors.passwordconfirm &&
          errors.passwordconfirm.type === "required" && (
            <p>This field is required</p>
          )}
        {errors.passwordconfirm &&
          errors.passwordconfirm.type === "validate" && (
            <p>Your input is not same password</p>
          )}

        <input type="submit" />
        <Link style={{ color: "gray", textDecoration: "none" }} to="/login">
          이미 아이디가 있다면..
        </Link>
      </form>
    </div>
  );
}

export default RegisterPage;
