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

	shift(){
		if(!this.head) return undefined;

		let removedItem = this.head;
		if(--this.length){
			this.head = removedItem.next;
		} else {
			this.head = null;
			this.tail = this.head;
		}
		return removedItem;
	}

	unshift(val){
		const newHead = new Node(val);

		if(!this.head){
			this.tail = newHead;
		} 

		newHead.next = this.head;
		this.head = newHead;
		this.length++;
		return this;
	}

	get(index){
		if(index < 0 || index >= this.length) return null;

		let counter = 0;
		let current = this.head;

		while(counter < index){
			current = current.next;
			counter++;
		}

		return current;
	}

	set(index, value){
	 const node = this.get(index);
		let isSet = false;
	 if (node){
		 node.val = value;
		 isSet = true;
	 }
	 return isSet;

	}

	insert(index, value){
		if(index < 0 || index > this.length) return false;
		if(index === 0 ) return !!this.unshift(value);
		if(index === this.length) return !!this.push(value);

		const newNode = new Node(value);
		const prevNode = this.get(index-1);

		newNode.next = prevNode.next;
		prevNode.next = newNode;
		this.length++;
		
		return true;
	}

	remove(index){
		if(index < 0 || index >= this.length) return false;
		if(index === 0 ) return this.shift();
		if(index === this.length-1) return this.pop();

		const prevNode = this.get(index-1);
		const removedNode = prevNode.next;

		prevNode.next = removedNode.next;
		this.length--;

		return removedNode;
	}
}
 
const testList = new SinglyLinkedList();
testList.push('hello');
console.log(testList);
testList.push('there');
console.log(testList);
testList.push('again');
console.log(testList);

testList.insert(3, 'last');
console.log(testList);

console.log(testList.get(2));
console.log(testList.remove(2)); 
console.log(testList.get(2));
console.log(testList);



