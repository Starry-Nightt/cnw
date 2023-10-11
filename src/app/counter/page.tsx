"use client";

import { increment, decrement } from "@/redux/counter-slice";
import { RootState } from "@/redux/store";
import { Button, List, Space, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const INITIAL_VALUE = 100;

function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  return (
    <div className="flex justify-center items-center h-full">
      <Space direction="vertical" size="middle">
        <Button
          type="primary"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </Button>
        <h1 className="text-center">{count}</h1>
        <Button
          type="primary"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </Button>
      </Space>
      <List
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={users}
        renderItem={(item) => <List.Item>{item?.name}</List.Item>}
      />
    </div>
  );
}

export default Counter;
