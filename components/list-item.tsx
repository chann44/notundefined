"use client";

import { type ReactNode, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./avtar";
import { LuChevronDown, LuExternalLink } from "react-icons/lu";

export type ListItem = {
  logo?: string;
  title?: string;
  description?: string;
  right?: ReactNode;
  detailedDescription?: string;
  link?: string;
};

export function ListItem(props: ListItem) {
  const { description, title, logo, right, detailedDescription, link } = props;
  const [isExpanded, setIsExpanded] = useState(false);

  const hasExpandableContent = detailedDescription;

  function handleToggle() {
    if (hasExpandableContent) setIsExpanded(!isExpanded);
  }

  return (
    <div className="rounded-md border border-transparent hover:border-primary/30 transition-all duration-200">
      <div
        className={`flex justify-between items-center hover:bg-white hover:bg-opacity-10 p-3 rounded-md ${
          hasExpandableContent ? "cursor-pointer" : ""
        }`}
        onClick={handleToggle}
      >
        {/* left */}
        <div className="flex items-center gap-x-3 flex-1">
          <Avatar>
            <AvatarImage src={logo} />
            <AvatarFallback>{title?.slice(0, 2)}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center gap-x-2">
              <p className="text-lg">{title}</p>
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-primary/60 hover:text-primary transition-colors"
                >
                  <LuExternalLink className="h-4 w-4" />
                </a>
              )}
            </div>
            <p className="text-sm dark:text-primary/60 max-w-md">
              {description}
            </p>
          </div>
        </div>
        {/* right */}
        <div className="flex items-center gap-x-3">
          <div className="dark:text-primary/60">{right}</div>
          {hasExpandableContent && (
            <LuChevronDown
              className={`h-5 w-5 transition-transform duration-200 ${
                isExpanded ? "rotate-180" : ""
              }`}
            />
          )}
        </div>
      </div>

      {/* Expandable content */}
      {hasExpandableContent && (
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-3 pb-3 pt-1">
            <div className="pl-14 pr-4">
              <p className="text-sm dark:text-primary/80 leading-relaxed">
                {detailedDescription}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
