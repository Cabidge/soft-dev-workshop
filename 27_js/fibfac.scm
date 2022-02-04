;; The first three lines of this file were inserted by DrRacket. They record metadata
;; about the language level of this file in a form that our tools can easily process.
#reader(lib "htdp-advanced-reader.ss" "lang")((modname rkt) (read-case-sensitive #t) (teachpacks ()) (htdp-settings #(#t constructor repeating-decimal #t #t none #f () #f)))
; Wen Hao Dong, Haotian Gan
; SoftDev
; K27 -- Where Does JS Live?
; 2022-02-07
; Define a function of n, fact, such that if n is equal to 0, it returns 1, otherwise, it returns the product of fact of n - 1 and n
(define fact
  (lambda (n)
    (if (= n 0) 1 (* (fact (- n 1)) n))))

"Fact"
(fact 1)
(fact 2)
(fact 3)
(fact 4)
(fact 5)
(fact 6)

(define fib
  (lambda (n)
    (if (< n 2)
        n
        (+ (fib (- n 1)) (fib (- n 2))))))
"Fib"
(fib 0)
(fib 1)
(fib 2)
(fib 3)
(fib 4)
(fib 5)
(fib 6)