import { render, fireEvent } from '@testing-library/vue'
import AddTask from '@/components/AddTask.vue'
import { describe, it, expect } from 'vitest'

describe('AddTask.vue', () => {
  it('emits add-task event with new task text', async () => {
    const { getByPlaceholderText, getByText, emitted } = render(AddTask)

    const input = getByPlaceholderText('Add a new task')
    await fireEvent.update(input, 'New Task')
    await fireEvent.click(getByText('Add'))

    expect(emitted()).toHaveProperty('add-task')
    expect(emitted()['add-task'][0]).toEqual(['New Task'])
  })
})
