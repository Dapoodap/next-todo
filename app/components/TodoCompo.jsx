import TodoList from './todoList'

function TodoCompo() {
  return (
    <div>
        <div className='flex justify-between w-full px-5 m-auto md:w-3/5 md:px-0'>
            <div className='flex gap-1'>
            <p style={{ fontSize:'18px', fontWeight:'600', color:'#4EA8DE' }}>List Todo</p>
            <span class="inline-flex items-center rounded-md bg-gray-600 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-gray-500/10">5</span>
            </div>
            <div className='flex gap-1'>
            <p style={{ fontSize:'18px', fontWeight:'600', color:'#4EA8DE' }}>Selesai</p>
            <span class="inline-flex items-center rounded-md bg-gray-600 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-gray-500/10">5 dari 5</span>
            </div>
        </div>
      <TodoList/>
    </div>
  )
}

export default TodoCompo