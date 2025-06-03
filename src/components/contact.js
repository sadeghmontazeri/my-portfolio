import React from "react";

export default function Contact() {
  return (
    <div>
      <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 text-white">
            <h1 className="text-3xl font-bold uppercase">فرم اطلاعات تماس</h1>
            <div className="mt-2">
              <h3 className="text-xl font-semibold">محمدصادق منتظریها</h3>
              <p className="mt-2">
                با اشتیاق فراوان، آماده‌ام تا مهارت‌ها، دانش فنی و تعهد خود به
                یادگیری را در جهت دستیابی به اهداف تیم و سازمان شما به کار گیرم.
                برای گفتگو و بررسی فرصت‌های همکاری، در دسترس هستم.
              </p>
            </div>
          </div>

          {/* بخش اطلاعات تماس */}
          <div className="p-6  grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div>
                <h2 className="text-lg font-semibold text-gray-800">
                  شماره تلفن:
                </h2>
                <p className="text-gray-600">09384320905 / 09922203397</p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-800">ایمیل:</h2>
                <p className="text-gray-600">S.montazeriha@yahoo.com</p>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-800">آدرس:</h2>
                <p className="text-gray-600">
                  تهران نارمک دردشت کوی عابدی میدان 3 کوی عزیزی هراتی پ35 واحد 2
                </p>
              </div>
            </div>
            <div className="space-y-4 space-x-2">
              <div>
                <h2 className="text-lg font-semibold text-gray-800">
                  آدرس گیت هاب:
                </h2>
                <p className="text-gray-600">
                  {" "}
                  https://github.com/sadeghmontazeri
                </p>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-800">
                  آدرس لینک دین
                </h2>
                <p className="text-gray-600">
                  www.linkedin.com/in/sadegh-montzeriha
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
