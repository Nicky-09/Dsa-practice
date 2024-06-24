import { bubbleSort } from "../handlers/bubbleSort"

it("should sort an array ", () => {
  const arr = [1, 4, 3, 7, 5, 2]
  bubbleSort(arr)
  expect(arr).toEqual([1, 2, 3, 4, 5, 7])
})

it("should handle an empty array", () => {
  const arr: number[] = []
  bubbleSort(arr)
  expect(arr).toEqual([])
})
