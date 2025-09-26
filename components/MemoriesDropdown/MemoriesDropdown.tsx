"use client"

import { Button } from "@heroui/button";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

interface Memory {
  id: string;
  title: string;
}

interface MemoriesDropdownProps {
  memories: Memory[];
  selected?: Memory;
  className?: string;
}

export const MemoriesDropdown: React.FC<MemoriesDropdownProps> = ({
  memories,
  selected,
  className = ""
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (memory: Memory) => {
    const params = new URLSearchParams(searchParams);
    params.set('year', memory.id.toString());
    // Stay on current page, just update searchParams
    const currentPath = window.location.pathname;
    router.push(`${currentPath}?${params.toString()}`);
    setIsOpen(false);
  };

  return (
    <div className={`w-full max-w-2xl px-2 2xl:px-0 mx-auto rounded-3xl select-none flex flex-col bg-white ${className}`}>
      {/* Header */}
      <div 
        className="h-14 flex flex-row justify-center items-center overflow-hidden bg-white border border-primary-100 rounded-3xl cursor-pointer"
        onClick={handleToggle}
      >
        <div className="flex-1 text-foreground flex items-center gap-2 px-4">
          <h5 className="text-sm">
            {selected?.title || "انتخاب خاطرات"}
          </h5>
          <Icon 
            icon="solar:alt-arrow-down-outline" 
            className={`text-lg text-foreground/60 transition-transform duration-300 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </div>
        <Button
          variant="solid"
          color="secondary"
          size="lg"
          className="!h-full !max-h-none rounded-3xl"
          onClick={(e) => {
            e.stopPropagation();
            if (selected) {
              // Navigate to view memories for selected year
              router.push(`/memories/${selected.id}`);
            }
          }}
          isDisabled={!selected}
        >
          مشاهده خاطرات
        </Button>
      </div>

      {/* Dropdown List */}
      <div className={`overflow-hidden transition-all duration-300 ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4">
          {memories.map(memory => (
            <div
              key={memory.id} 
              className={`py-4 px-2 text-sm rounded-2xl flex justify-center items-center cursor-pointer transition duration-300 ${
                selected?.id === memory.id 
                  ? 'bg-foreground text-white' 
                  : 'bg-foreground/10 text-foreground hover:bg-foreground hover:text-white'
              }`}
              onClick={() => handleSelect(memory)}
            >
              {memory.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};