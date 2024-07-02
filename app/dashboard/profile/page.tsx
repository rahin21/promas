import React from 'react'
import { BreadcrumbSection } from "@/app/dashboard/breadcrumb";

export default function page() {
  return (
    <section className="">
        <div className="container w-full">
            <BreadcrumbSection item={"Profile"} />
            <h1 className="text-3xl my-3">Hello World, This is Profile!</h1>
            <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, esse. Veniam eum laborum recusandae! Sed, mollitia assumenda autem architecto officia minima cumque a ex dicta voluptas dolorum quam obcaecati ea..</div>
        </div>
    </section>
  )
}
