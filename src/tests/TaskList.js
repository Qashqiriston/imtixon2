import { render, fireEvent } from '@testing-library/vue'
import TaskList from '@/components/TaskList.vue'
import { describe, it, expect } from 'vitest'

describe('TaskList.vue', () => {
  it('adds a new task', async () => {
    const { getByPlaceholderText, getByText } = render(TaskList)

    const input = getByPlaceholderText('Add a new task')
    await fireEvent.update(input, 'New Task')
    await fireEvent.click(getByText('Add'))

    expect(getByText('New Task')).toBeTruthy()
  })

  it('marks a task as completed', async () => {
    const { getByText } = render(TaskList, {
      data() {
        return {
          tasks: [{ id: 1, text: 'Existing Task', completed: false }]
        }
      }
    })

    const button = getByText('Complete')
    await fireEvent.click(button)

    expect(button).toHaveClass('line-through')
  })

  it('removes a task', async () => {
    const { getByText, queryByText } = render(TaskList, {
      data() {
        return {
          tasks: [{ id: 1, text: 'Task to be removed', completed: false }]
        }
      }
    })

    const button = getByText('Remove')
    await fireEvent.click(button)

    expect(queryByText('Task to be removed')).toBeNull()
  })
})



/* 
5-Task savol-javoblar

1 grid va flex 
gridda asosan to'rlik x va y uzunlikdagi qiymatlarni chiqarsa bo'ladi 
flex esa asosan bir tamonlama ustun yoki qatorga javob beradi.

Flex bilan ishlash va grid bilan ishlashning o'z o'rni bor har birida maxsus qiymatlarni loyihadgi vazifaga mos bajarish kerak

2.
bu lifesikl hooklari bo'lib biror bir component ishga tushgandan so'ng ishlaydigan avtomatskiy chiqadigan hayot bosqichlari hisobladi yani yaratilinishi qo'shilishi va o'chirilishi bosqichlarini ko'rsatadi
*/