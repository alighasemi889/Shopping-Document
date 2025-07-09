import React, { useState, useEffect, useRef } from "react";
import "./document.css";

const lightTheme = {
  "--bg-color": "#f5f7fa",
  "--text-color": "#2c3e50",
  "--heading-color": "#34495e",
  "--border-color": "#2980b9",
  "--code-bg": "#272822",
  "--code-color": "#f8f8f2",
  "--card-bg": "#ffffff",
  "--shadow": "0 4px 15px rgba(0,0,0,0.1)",
  "--btn-bg": "#2980b9",
  "--btn-color": "#fff",
};

const darkTheme = {
  "--bg-color": "#1e1e2f",
  "--text-color": "#d1d1e9",
  "--heading-color": "#aec6cf",
  "--border-color": "#4da6ff",
  "--code-bg": "#2d2d3f",
  "--code-color": "#f8f8f2",
  "--card-bg": "#2a2a40",
  "--shadow": "0 4px 15px rgba(0,0,0,0.6)",
  "--btn-bg": "#4da6ff",
  "--btn-color": "#1e1e2f",
};

const applyTheme = (theme) => {
  for (const key in theme) {
    document.documentElement.style.setProperty(key, theme[key]);
  }
};

const Documentation = () => {
  const [theme, setTheme] = useState("light");
  const docRef = useRef(null);

  useEffect(() => {
    if (theme === "light") applyTheme(lightTheme);
    else applyTheme(darkTheme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className="container" ref={docRef}>
      <button className="toggleBtn" onClick={toggleTheme}>
        {theme === "light" ? "دارک مود" : "لایت مود"}
      </button>

      <h1 className="title">مستندات پروژه</h1>

      <div className="sectionsWrapper">
        <section className="section">
          <h2 className="heading">۱. معرفی پروژه</h2>
          <p className="text">
            این پروژه یک فروشگاه آنلاین لوازم آرایشی است که با هدف ارائه محصولات
            متنوع و باکیفیت در حوزه زیبایی طراحی شده است. کاربران می‌توانند به
            راحتی محصولات مورد نیاز خود را مشاهده، انتخاب و خریداری کنند. رابط
            کاربری ساده و تجربه خرید روان از ویژگی‌های اصلی این پروژه است.
          </p>
        </section>

        <section className="section">
          <h2 className="heading">۲. زمان شروع پروژه</h2>
          <p className="text">
            این پروژه فروشگاهی از 28 فروردین 1404 شروع شده و تاکنون مراحل طراحی و
            توسعه آن به‌صورت مستمر ادامه دارد. هدف ما ارائه یک تجربه خرید آنلاین
            حرفه‌ای و کاربرپسند در حوزه لوازم آرایشی است.
          </p>
        </section>

        <section className="section">
          <h2 className="heading">۳. نصب و راه‌اندازی</h2>
          <pre className="codeBlock">
            <code>
              git clone [آدرس مخزن گیت]
              <br />
              cd [نام پوشه پروژه]
              <br />
              npm install
              <br />
              npm start
            </code>
          </pre>
        </section>

        <section className="section">
          <h2 className="heading">۴. تکنولوژی‌های استفاده شده</h2>
          <ul className="list">
            <li>Html</li>
            <li>Sass</li>
            <li>Javascript</li>
            <li>Swiper.js</li>
            <li>Aos.js</li>
            <li>Supabase</li>
          </ul>
        </section>

        <section className="section">
          <h2 className="heading">۵. ساختار پروژه</h2>
          <ul className="list">
            <li>
              <code>src/</code>: کد اصلی پروژه
            </li>
            <li>
              <code>images/</code>: عکس های پروژه
            </li>
            <li>
              <code>public/</code>: فونت پروژه
            </li>
            <li>
              <code>node_module/</code>: وابستگی های پروژه
            </li>
            <li>
              <code>dist/</code>: نسخه نهایی پروژه
            </li>
            <li>
              <code>Parcel/</code>: باندلر پروژه
            </li>
          </ul>
        </section>

        <section className="section">
          <h2 className="heading">۶. نحوه استفاده</h2>
          <p className="text">
            برای استفاده از این پروژه، کافی است پس از نصب و راه‌اندازی،
            کامپوننت‌ها را وارد برنامه خود کرده و از آن‌ها استفاده کنید. همچنین
            می‌توانید با افزودن کامپوننت جدید در مسیر مناسب، پروژه را توسعه دهید.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Documentation;
