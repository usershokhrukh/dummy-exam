"use client";
import React, {useEffect, useState} from "react";
import "../../style/login.scss";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { usePostLogin } from "@/hooks/login/usePostLogin";

const Login = () => {
  const [form, setForm] = useState<{username: string; password: string}>({
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  };
  const route = useRouter();
  const [show, setShow] = useState<boolean>(false)
  const {data, mutate, isPending} = usePostLogin();
  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault()
    if(!form?.username || !form?.password) return toast.error("Please fill all inputs!")
    try {
      mutate(form)
    }catch(error: unknown) {
      if(error instanceof Error) {
        toast.error(error?.message)
        throw new Error(error?.message)
      }
    }
  }

  useEffect(() => {
    if(data) {
      route.push("/")
      localStorage.setItem("token", data?.token)
      toast.success("Successfully entered!")
    }
  }, [data])
  return (
    <div className="login__container">
      <form onSubmit={handleSubmit} className="login__form">
        <h2 className="login__title">Welcome</h2>
        <input name="username"  placeholder="Username" className="login__inputs" onChange={handleChange} value={form.username} type="text" />
        <div className="login__box">
          <input name="password" placeholder="Password" className="login__inputs"
          id="password"
            onChange={handleChange}
            value={form.password}
            type={`${show ? "text": "password"}`}
          />
          <label onClick={() => setShow(!show)} className="login__label" htmlFor="password">{show ? "hide" : "show"}</label>
        </div>
        <button className="login__submit">Enter system</button>
      </form>
    </div>
  );
};

export default Login;
