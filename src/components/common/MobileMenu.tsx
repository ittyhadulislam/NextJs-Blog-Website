"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { AlignJustify, X } from "lucide-react";

const MobileMenu = () => {
  const [isToggle, setIsToggle] = useState(false);
  const toggleFunction = () => {
    setIsToggle(!isToggle);
  };
  return (
    <div className="lg:hidden">
      <Button onClick={toggleFunction} variant="outline" size="icon">
        {!isToggle ? (
          <AlignJustify className="h-5 w-5" />
        ) : (
          <X className="h-5 w-5" />
        )}
      </Button>
    </div>
  );
};

export default MobileMenu;
