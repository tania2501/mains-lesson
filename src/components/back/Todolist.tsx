import axios from "axios";
import React, { useEffect, useState } from "react";

export interface FotoSizeViewModel {
  url: string;
  width: number;
  height: number;
  fileSize: number;
}

export interface TodolistImagesIewModel {
  main: FotoSizeViewModel[];
}

export interface TodolistViewModel {
  isImportant: boolean;
  id: string;
  title: string;
  description: string;
  addedDate: Date;
  order: number;
  images: TodolistImagesIewModel;
}

export interface GetTodolistResponseType {
  pagesCount: number;
  page: number;
  pageSize: number;
  totalCount: number;
  items: TodolistViewModel[];
}

export const Todolist = () => {
  const [todoLists, setTodolists] = useState<GetTodolistResponseType | null>(
    null
  );

  useEffect(() => {
    axios
      .get<GetTodolistResponseType>(
        "https://todolists.samuraijs.com/api/1.0/todolists?pageNumber=1&pageSize=10"
      )
      .then((response) => {
        setTodolists(response.data);
      });
  }, []);

  
  return (
    <div className="todoList">
      {todoLists === null
        ? "loading"
        : todoLists.items.map((todolist) => {
            return <div key={todolist.id}>
              <img src={todolist.images.main[0]?.url} alt="" />
            {todolist.title} 
          </div>;
        })
      }
    </div>
  );
};
