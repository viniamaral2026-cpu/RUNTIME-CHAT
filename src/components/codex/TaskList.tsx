import React from 'react'
import { Check, Clock, Trash, Edit, Flag } from 'lucide-react'

interface Task {
  id: string
  title: string
  description: string | null
  status: 'TODO' | 'IN_PROGRESS' | 'REVIEW' | 'COMPLETED' | 'FAILED'
  priority: 'LOW' | 'MEDIUM' | 'HIGH' | 'URGENT'
  createdAt: Date
  completedAt: Date | null
}

interface TaskListProps {
  tasks: Task[]
  onStatusChange: (taskId: string, newStatus: Task['status']) => void
  onDelete: (taskId: string) => void
}

export const TaskList: React.FC<TaskListProps> = ({ tasks, onStatusChange, onDelete }) => {
  return (
    <div className="space-y-2">
      {tasks.map(task => (
        <div
          key={task.id}
          className="group border rounded-lg p-4 hover:shadow-md transition-shadow"
        >
          <div className="flex items-start justify-between">
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-medium text-primary-900 group-hover:text-primary-700 transition-colors">
                {task.title}
              </h3>
              {task.description && (
                <p className="text-xs text-text-muted line-clamp-1 mt-1">
                  {task.description}
                </p>
              )}
            </div>
            <div className="flex items-center gap-2">
              <span
                className={`px-2 py-0.5 text-xs rounded ${task.status === 'COMPLETED' ? 'bg-success-100 text-success-800' : task.status === 'FAILED' ? 'bg-error-100 text-error-800' : task.status === 'IN_PROGRESS' ? 'bg-warning-100 text-warning-800' : 'bg-primary-100 text-primary-800'}`}
              >
                {task.status}
              </span>
            </div>
          </div>
          <div className="mt-2 flex items-center gap-2">
            <span className="text-xs text-text-muted">
              Criado: {task.createdAt.toLocaleDateString()}
            </span>
            {task.completedAt && (
              <span className="text-xs text-text-muted">
                Concluído: {task.completedAt.toLocaleDateString()}
              </span>
            )}
          </div>
          <div className="mt-2 flex gap-1">
            <button
              onClick={() => onStatusChange(task.id, 'TODO')}
              className="px-1 py-0.5 text-xs rounded bg-primary-100 text-primary-800 hover:bg-primary-200"
              title="Voltar para TODO"
            >
              TODO
            </button>
            <button
              onClick={() => onStatusChange(task.id, 'IN_PROGRESS')}
              className="px-1 py-0.5 text-xs rounded bg-warning-100 text-warning-800 hover:bg-warning-200"
              title="Em andamento"
            >
              IN_PROGRESS
            </button>
            <button
              onClick={() => onStatusChange(task.id, 'REVIEW')}
              className="px-1 py-0.5 text-xs rounded bg-primary-100 text-primary-800 hover:bg-primary-200"
              title="Em revisão"
            >
              REVIEW
            </button>
            <button
              onClick={() => onStatusChange(task.id, 'COMPLETED')}
              className="px-1 py-0.5 text-xs rounded bg-success-100 text-success-800 hover:bg-success-200"
              title="Concluído"
            >
              COMPLETED
            </button>
            <button
              onClick={() => onDelete(task.id)}
              className="px-1 py-0.5 text-xs rounded bg-error-100 text-error-800 hover:bg-error-200"
              title="Excluir"
            >
              <Trash className="w-3 h-3" />
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}