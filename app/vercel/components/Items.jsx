import React from "react";
import { Badge } from "@/components/ui/badge";

const Items = ({ sidebarItems }) => {
  return (
    <div className="px-5 flex-1">
      {sidebarItems.map((item, index) => (
        <div className="mb-12" key={index}>
          <h1 className="text-2xl font-bold mb-4">{item.title}</h1>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {item?.items?.map((child, childIndex) => (
              <div
                key={childIndex}
                className="box p-4 w-full bg-black rounded-md border border-zinc-600 hover:border-white transition-all duration-150"
              >
                <div className="w-full flex gap-3 items-center">
                  <div className="icons h-12 w-12 bg-white rounded-full"></div>
                  <div className="items">
                    <h1>{child.title}</h1>
                    <Badge className="bg-blue-600 text-white px-2">New</Badge>
                  </div>
                </div>
                <p className="text-zinc-500 text-sm mt-2 mb-3">
                  {child.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Items;
