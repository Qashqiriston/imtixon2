import { render, fireEvent } from '@testing-library/vue'
import TaskItem from '@/components/TaskItem.vue'
import { describe, it, expect } from 'vitest'

describe('TaskItem.vue', () => {
  it('marks a task as completed', async () => {
    const task = { id: 1, text: 'Incomplete Task', completed: false }
    const { getByText } = render(TaskItem, {
      props: { task }
    })

    const button = getByText('Complete')
    await fireEvent.click(button)

    expect(button).toHaveClass('line-through')
  })

  it('removes a task', async () => {
    const task = { id: 1, text: 'Task to be removed', completed: false }
    const { getByText, emitted } = render(TaskItem, {
      props: { task }
    })

    const button = getByText('Remove')
    await fireEvent.click(button)

    expect(emitted()).toHaveProperty('remove-task')
    expect(emitted()['remove-task'][0]).toEqual([task.id])
  })
})
