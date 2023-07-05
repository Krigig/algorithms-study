// Note: Try to solve this task in O(n) time using O(1) additional space, where n is the number of elements in the list, since this is what you'll be asked to do during an interview.

// Given a singly linked list of integers l and an integer k, remove all elements from list l that have a value equal to k.

// Example

// For l = [3, 1, 2, 3, 4, 5] and k = 3, the output should be
// solution(l, k) = [1, 2, 4, 5];
// For l = [1, 2, 3, 4, 5, 6, 7] and k = 10, the output should be
// solution(l, k) = [1, 2, 3, 4, 5, 6, 7].

var solution = function(l, k) {
    if(!l) return l
    
   while(l) {
        if(l.value === k) {
            l = l.next;
        } else {
            break;
        }
    }
    
    let current = l

    while(current && current.next) {
        if(current.next.value === k) {
            current.next= current.next.next
        } else {
            current= current.next
        }
    }
    return l;
}

// best solution:

function solution(l, k) {
    if(l===null) return null;
    else {
        l.next = solution(l.next,k);
        return (l.value===k)?l.next:l
    }
}

function solution(l, k) {
    var curr;
    
    // remove leading k values with changing l
    while (l && l.value == k) {
        l = l.next;
    }

    // loop to the end.
    // skip nodes with k values.
    curr = l;
    while (curr && curr.next) {
        if (curr.next.value == k) {
            curr.next = curr.next.next;
        } else {
            curr = curr.next;
        }
    }
    return l;
}
