import React from 'react'

const Stats = ({ toDoList }) => {
  let countList = toDoList.length;
    return (
      <div className='stats'>
        <p className='notify'>
            {countList === 0 ?
            'No tasks, add a task.'
            : `You have ${countList} items left to do.`}
        </p>
      </div>
    )
}

export default Stats
