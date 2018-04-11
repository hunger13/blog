//: Playground - noun: a place where people can play

import Cocoa
import Foundation

func countSort(array: [Int]) -> [Int] {
    var max = 0
    var min = 0
    
    var hash = [Array<Int>]()
    for i in 0..<array.count {
        max = array[i] > max ? array[i] : max
        min = array[i] < min ? array[i] : min
    }
    for _ in min...max {
        hash.append([Int]())
    }
    array.forEach { (number) in
        hash[number].append(number)
    }
    var arr = [Int]()
    hash.forEach { (number) in
        arr += number
    }
    return arr
}

let numbers = [2,4,2,1,2,5,3,1]

print(countSort(array: numbers))
