import React, { memo } from 'react'

interface ChildProps {
  name: string;
  onClick: Function;
}

const Child = ({ name, onClick}: ChildProps): JSX.Element => {
  console.log('子组件?')
  return(
      <>
          <div>我是一个子组件，父级传过来的数据：{name}</div>
          <button onClick={onClick.bind(null, '新的子组件name')}>改变name</button>
      </>
  );
}

export const ChildMemo = memo(Child);
// export const ChildMemo = Child;
