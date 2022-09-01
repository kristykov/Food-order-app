import React from "react";

export interface IDish {
  children?: React.ReactNode;
  id: string;
  key: string;
  name: string;
  image: string;
  price: string;
}

export type ChildrenType = { children?: React.ReactNode };
