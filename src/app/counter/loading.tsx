import { Skeleton } from 'antd'
import React from 'react'

function CounterLoading() {
  return (
    <Skeleton avatar paragraph={{ rows: 3 }} />
  )
}

export default CounterLoading