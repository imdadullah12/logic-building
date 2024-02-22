import { Input } from "@/components/ui/input";
import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

const Sidebar = ({ sidebarItems }) => {
  return (
    <div className="w-full md:w-[20%] md:pr-8">
      <Input type="search" style={{ padding: 22 }} placeholder="Search" />
      <Select>
        <SelectTrigger className="w-full mt-4 md:hidden">
          <SelectValue placeholder="Select a category" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {sidebarItems.map((item, index) => (
              <SelectItem value={index} key={index}>
                {item.title}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <ul className="space-y-4 my-6">
        {sidebarItems.map((item, index) => (
          <li key={index} className="text-zinc-500 text-md hover:text-white">
            <Link href={item.link}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
