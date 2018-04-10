//: Playground - noun: a place where people can play

import Cocoa

let numbers = [2,3,1,4,5,7,1,4,2,21]

func selectSort<T: Comparable>(array :[T]) -> [T]{
    var a = array
    var min = 0
    for i in 0..<a.count {
        min = i
        for j in (i+1)..<a.count {
            if a[j] < a[min] {
                min = j
            }
        }
        if i != min {
            a.swapAt(i, min)
        }
    }
    return a
}
print(selectSort(array:numbers))
