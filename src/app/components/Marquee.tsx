import React from "react";
import Marquee from "react-fast-marquee";
import { toBanglaNumber } from "../utils/number";
interface MarqueeItems {
    "id": number,
    "nameBn": string,
    "unit": string,
    "image": string,
    "today": number;
    "change": {
      "dir": "up"| "down",
      "pct": number;
    };
}
const MarqueeLink = async() => {
    const res = await fetch("https://api.abcz.workers.dev/api/bazardor/products",
        {
            cache:"force-cache",
        },
    );
    const data:MarqueeItems[]=await res.json();
    console.log(data)
  return (
    <Marquee>
      <div className="flex gap-10 p-5 text-[15px]">
        {data.map((l) => (
          <span
            key={l.id}
            className="flex items-center gap-2 border-y border-gray-200 px-4 py-2"
          >
            <span>{l.image}</span>
            <span className="">{l.nameBn}</span>
            <span>
              {toBanglaNumber(l.today)}/{l.unit}
            </span>
            <span
              className={
                l.change.dir === "up" ? "text-red-500" : "text-green-400"
              }
            >
              {l.change.dir === "up" ? "▲" : "▼"} { toBanglaNumber(Math.abs(l.change.pct))}%
            </span>
          </span>
        ))}
      </div>
    </Marquee>
  );
};

export default MarqueeLink;
