"use client";
import Image from "next/image";
import React, { useState } from "react";

const Main = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [amount, setAmount] = useState(0);

  const [value, setValue] = useState(null);

  const handleSubmit = async () => {
    //API Request
    const request = await fetch(
      `https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_glfPLZskmJkYnbwKxv2S40dbViPtKYuilK6JxPcf&base_currency=${from}&currencies=${to}`
    );

    const response = await request.json();
    const totalAmount = response.data[to] * amount;
    setValue({ currentRate: response.data[to], totalAmount });
  };

  return (
    <div className="w-[80%] flex flex-col p-5 rounded-2xl bg-zinc-800">
      <h1 className="text-4xl font-bold text-center w-full mb-4">
        Pen Programmer Currency Converter
      </h1>
      <div className="box flex justify-center">
        <Image
          src={"https://cdn-icons-png.flaticon.com/256/448/448504.png"}
          width={300}
          height={300}
          alt="Currency"
          className="w-[100px]"
        />
      </div>
      <div className="items items-center grid grid-cols-3 gap-6">
        <div className="box">
          <label htmlFor="">Select From</label>
          <select
            onChange={(e) => setFrom(e.target.value)}
            className="w-full text-black px-3 py-4 rounded-xl mt-1"
          >
            <option value="EUR">Euro</option>
            <option value="USD">US Dollar</option>
            <option value="JPY">Japanese Yen</option>
            <option value="BGN">Bulgarian Lev</option>
            <option value="CZK">Czech Republic Koruna</option>
            <option value="DKK">Danish Krone</option>
            <option value="GBP">British Pound Sterling</option>
            <option value="HUF">Hungarian Forint</option>
            <option value="PLN">Polish Zloty</option>
            <option value="RON">Romanian Leu</option>
            <option value="SEK">Swedish Krona</option>
            <option value="CHF">Swiss Franc</option>
            <option value="ISK">Icelandic Króna</option>
            <option value="NOK">Norwegian Krone</option>
            <option value="HRK">Croatian Kuna</option>
            <option value="RUB">Russian Ruble</option>
            <option value="TRY">Turkish Lira</option>
            <option value="AUD">Australian Dollar</option>
            <option value="BRL">Brazilian Real</option>
            <option value="CAD">Canadian Dollar</option>
            <option value="CNY">Chinese Yuan</option>
            <option value="HKD">Hong Kong Dollar</option>
            <option value="IDR">Indonesian Rupiah</option>
            <option value="ILS">Israeli New Sheqel</option>
            <option value="INR">Indian Rupee</option>
            <option value="KRW">South Korean Won</option>
            <option value="MXN">Mexican Peso</option>
            <option value="MYR">Malaysian Ringgit</option>
            <option value="NZD">New Zealand Dollar</option>
            <option value="PHP">Philippine Peso</option>
            <option value="SGD">Singapore Dollar</option>
            <option value="THB">Thai Baht</option>
            <option value="ZAR">South African Rand</option>
          </select>
        </div>

        <div className="box">
          <label htmlFor="">Select To</label>
          <select
            onChange={(e) => setTo(e.target.value)}
            className="w-full text-black px-3 py-4 rounded-xl mt-1"
          >
            <option value="EUR">Euro</option>
            <option value="USD">US Dollar</option>
            <option value="JPY">Japanese Yen</option>
            <option value="BGN">Bulgarian Lev</option>
            <option value="CZK">Czech Republic Koruna</option>
            <option value="DKK">Danish Krone</option>
            <option value="GBP">British Pound Sterling</option>
            <option value="HUF">Hungarian Forint</option>
            <option value="PLN">Polish Zloty</option>
            <option value="RON">Romanian Leu</option>
            <option value="SEK">Swedish Krona</option>
            <option value="CHF">Swiss Franc</option>
            <option value="ISK">Icelandic Króna</option>
            <option value="NOK">Norwegian Krone</option>
            <option value="HRK">Croatian Kuna</option>
            <option value="RUB">Russian Ruble</option>
            <option value="TRY">Turkish Lira</option>
            <option value="AUD">Australian Dollar</option>
            <option value="BRL">Brazilian Real</option>
            <option value="CAD">Canadian Dollar</option>
            <option value="CNY">Chinese Yuan</option>
            <option value="HKD">Hong Kong Dollar</option>
            <option value="IDR">Indonesian Rupiah</option>
            <option value="ILS">Israeli New Sheqel</option>
            <option value="INR">Indian Rupee</option>
            <option value="KRW">South Korean Won</option>
            <option value="MXN">Mexican Peso</option>
            <option value="MYR">Malaysian Ringgit</option>
            <option value="NZD">New Zealand Dollar</option>
            <option value="PHP">Philippine Peso</option>
            <option value="SGD">Singapore Dollar</option>
            <option value="THB">Thai Baht</option>
            <option value="ZAR">South African Rand</option>
          </select>
        </div>

        <div className="box">
          <label htmlFor="">Type Amount</label>
          <input
            type="text"
            onChange={(e) => setAmount(e.target.value)}
            className="w-full text-black px-3 py-4 rounded-xl mt-1"
            placeholder="Type Amount"
          />
        </div>
      </div>
      {value && (
        <div className="w-full my-2 p-4 text-center">
          <h1 className="text-2xl">
            Current Rate is: {value.currentRate} and your converted amount is:{" "}
            {value.totalAmount}
          </h1>
        </div>
      )}
      <button
        onClick={handleSubmit}
        className="w-[250px] ml-auto bg-sky-600 px-3 py-4 rounded-xl mt-4"
      >
        Convert
      </button>
    </div>
  );
};

export default Main;
