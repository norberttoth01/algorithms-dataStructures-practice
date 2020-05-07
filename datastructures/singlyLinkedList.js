class Node{
    constructor(val){
        this.val = val;
        this.next =null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.tail = null;
        this.head = null;
        this.length =0;
    }
    push(val){
        const newItem = new Node(val);
        if(this.tail){
            this.tail.next = newItem;
            this.tail = newItem;
        } else {
            this.tail = newItem;
            this.head = newItem;
        }
        this.length++ 
        return this;
	}
	
	pop(){
		if(!this.head) return undefined;

		let current = this.head;
		let newTail = current;

		while(current.next){
			newTail = current;
			current = current.next;
		}

		if(--this.length){
			this.tail = newTail;
			this.tail.next = null;
		} else {
			this.tail = null;
			this.head = this.tail;
		}

		return current;
	}
}
 
const testList = new SinglyLinkedList();
testList.push('hello');
console.log(testList);
testList.push('there');
console.log(testList);
testList.push('again');
console.log(testList);
console.log(testList.pop());
console.log(testList);
console.log(testList.pop());
console.log(testList);
console.log(testList.pop());
console.log(testList);
console.log(testList.pop());
console.log(testList);
