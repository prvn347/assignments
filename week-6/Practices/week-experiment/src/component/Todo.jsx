


export function Todo({todos}) {
    return <div>
        {todos.map(function (todo)  {
            
            return <div>
                <h2 key={todos.id}>{todo.title}</h2>
                <h4 key={todos.id}>{todo.description}</h4>
              
            </div>
        })}


    </div>

}