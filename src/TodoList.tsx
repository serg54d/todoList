import { JSXElementConstructor } from "react";
import { JsxElement } from "typescript";

type TodoListPropsType = {
	title: string;
	tasks: Array<TaskType>
}

export type TaskType = {
	id: number
	title: string
	isDone: boolean
}

export const TodoList = ({
	title,
	tasks
}: TodoListPropsType) => {

	// 1.
	// const title = props.title
	// const tasks = props.tasks
	// 2.
	// const { title, tasks } = props

	// const tasksList: Array<JSX.Element> = []
	// for (let i = 0; i < tasks.length; i++) {
	// 	tasksList.push(
	// 		<li>
	// 			<input type="checkbox" checked={tasks[i].isDone} />
	// 			<span>{tasks[i].title}</span>
	// 		</li>
	// 	)
	// }

	const tasksList: Array<JSX.Element> = tasks.map(task => {
		return (
			<li>
				<input type="checkbox" checked={task.isDone} />
				<span>{task.title}</span>
			</li>
		)
	})


	return (
		<div className="todolist">
			<h3 className="todolist__title">{title}</h3>
			<div className='todolist__add'>
				<input className='todolist__field' />
				<button className='todolist__btn-add'>+</button>
			</div>
			<ul>
				{tasksList}
			</ul>
			<div className='todolist__control'>
				<button className='todolist__btn'>All</button>
				<button className='todolist__btn'>Active</button>
				<button className='todolist__btn'>Completed</button>
			</div>
		</div>
	)
}