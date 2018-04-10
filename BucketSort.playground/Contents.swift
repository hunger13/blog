//: Playground - noun: a place where people can play

import Cocoa
import Foundation

func bucketSort(array: [Int]) -> [Int] {
    var max = 0
    var bucket = [Array<Int>]()
    for i in 0..<array.count {
        max = array[i] > max ? array[i] : max
    }
    for _ in 0...max {
        bucket.append([Int]())
    }
    array.forEach { (number) in
        bucket[number].append(number)
    }
    var arr = [Int]()
    bucket.forEach { (number) in
        arr += number
    }
    return arr
}

let numbers = [2,4,2,1,2,5,3,1]

print(bucketSort(array: numbers))
