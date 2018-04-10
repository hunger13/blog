//: Playground - noun: a place where people can play

import Cocoa

func bubbleSort<T: Comparable>(array: [T]) -> [T] {
    var a = array
    for i in 0..<a.count {
        for j in 1..<a.count - i {
            if a[j] < a[j-1] {
                a.swapAt(j, j-1)
            }
        }
    }
    return a
}

let numbers = [2,3,1,4,5,1,4,2,21]

print(bubbleSort(array: numbers))

