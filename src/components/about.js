import React from "react";
import sadeghImg from "../assets/sadegh.jpg";

import "bootstrap/dist/css/bootstrap.min.css";
export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 grid grid-cols-1 md:grid-cols-2  w-full gap-2 p-4">
      <div className="col-span-1  row-span-1">
        <h1 className="font-extralight">اطلاعات</h1>
        <img className="rounded-3xl shadow-2xs " src={sadeghImg} alt="myImg" />
      </div>
      <section>
        <div className="header">
          <h3>درباره من</h3>
          <h1 className="fs-4 fw-bolder">محمد صادق منتظریها</h1>
          <div className="desc ">
            <p className="font-light fs-4">
              توسعه‌دهنده فرانت‌اند، با تسلط بر React.js، JavaScript خالص
              (Vanilla JS)، Bootstrap و Tailwind CSS، متمرکز بر ایجاد رابط‌های
              کاربری مدرن، واکنش‌گرا و بهینه. توانایی من در کار با APIها و تجربه
              موفق در پیاده‌سازی پروژه real-time با Supabase، امکان ساخت
              اپلیکیشن‌های وب پویا و داده‌محور را فراهم می‌کند. با اشتیاق به رشد
              و همگام‌سازی با تکنولوژی‌های روز، در حال حاضر در حال یادگیری
              Node.js برای توسعه سمت سرور و همچنین Next.js، TypeScript و Redux
              برای ارتقای معماری و کارایی پروژه‌های فرانت‌اند هستم. تسلط عالی بر
              زبان انگلیسی (به ویژه درک مستندات فنی و منابع آموزشی بین‌المللی)،
              دارا بودن مدرک ICDL و روحیه تیمی قوی، تکمیل‌کننده مجموعه مهارت‌های
              من برای مشارکت مؤثر و ارزش‌آفرینی در تیم شماست.
            </p>
          </div>
        </div>
      </section>
      <section className="md:grid-cols-2 md:col-span-2 grid grid-cols-1    w-full">
        <div className="col1  flex flex-col justify-content-around">
          <h6 className="align-self-center fs-3">
            سال تولد:<span className="font-extralight">1378/04/09</span>
          </h6>
          <h6 className="align-self-center fs-3">
            ایمیل :
            <span className="font-extralight  align-self-center">
              S.montazeriha@yahoo.com
            </span>
          </h6>
          <h4 className="align-self-center fs-3">
            تماس:
            <span className="font-extralight">09384320905</span>
          </h4>
        </div>
        <div className="col2 flex flex-col  justify-content-around ">
          <div className="btns max-h-fit align-self-center fs-3  ">
            <button
              onClick={() => {
                alert("https://github.com/sadeghmontazeri");
              }}
              className="btn btn-danger  w-fit mx-3 fs-3   text-center p-1 border-1"
            >
              لینک گیت هاب
            </button>
            <button
              onClick={() => {
                alert("www.linkedin.com/in/sadegh-montzeriha");
              }}
              className="btn fs-3  btn-success w-fit p-1 text-nowrap border-1"
            >
              لینک لینکدین
            </button>
          </div>

          <h6 className="fs-3 font-extraligh align-self-center">
            مدرک:<span className="font-extralight">لیسانس برق گرایش قدرت</span>
          </h6>
          <h6 className=" fs-3 font-extraligh align-self-center">
            وضعیت نظام وظیفه:
            <span className="font-extralight ">پایان خدمت مقدس سربازی</span>
          </h6>
        </div>
      </section>
    </div>
  );
}
