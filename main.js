
//inits instance of one list and keeps a count
class linkedList {
    constructor(){
        this.head = null;
        this.tail = this.getTail();
        this.length = 0;
    }

// inserts a node at the front of the list
insertFrontList(data) {
    const newNode = new linkListNodes(data, this.head)
    this.head = newNode
    this.length++
    }

//inserts node at the end of my list
insertEndOfList(data) {
    //let newNode = new linkListNodes(data)
    
    if (!this.head){
        //will hit this logger if null
        this.head = new linkListNodes(data)
        console.log(this.head + " test at first if")
        return this.head
    }
    //shows the current list up to the last one
    let current = this.head
    console.log(JSON.stringify(current) + " current = head what is it?")
    //loops through and logs each value with the adds up to last
    while (current.next) {
        current = current.next
        console.log(JSON.stringify(current))
    }
    //shows what the last value is added
    current.next = new linkListNodes(data)
    console.log(JSON.stringify(current.next) + " test at create node what it is after while?")
    this.length ++
    return this.head
}

//get the length of list
getLength(){
    return this.length
}

//get the first one in list
getHead(){
    return this.head
}


//returns the last node in list
getTail() {
    // if head is equal null return 
    if (this.head === null) {
      return null;
    } else {
        //get the head
      let current = this.head;
      console.log(current)
      //loop thru until current.next is not there and return
      while (current.next) {
        current = current.next;
      }
      return current;
    }
  };

getIndex(index){
    if (index < 0 || index >= this.length) return null

    let current = this.head
    console.log(current)
    for (let i = 0; i < index; i++) {
    }
    return current
    }

//function grabs the head as parameter
removeLast(head){

    head = this.head
    // if is not null keep going
    if (head == null ){
    return null;
    }

    //if head is not head next keep going
    if (head.next == null) {
        return null;
    }

    console.log("test")

    // change variable to 2nd to last
    let second_last = head;
    console.log(second_last)

    // loop thru the objects to get 2nd last item
    while(second_last.next.next !== null){
        second_last = second_last.next.next.next
        console.log(second_last)

    //after my item is  found return null
    second_last.next = null;
    this.length --;
    console.log(second_last)
    return second_last
    }
}

// function to search for a item by the variable name
search(element){
    // get the head
    let current = this.head;
    console.log(current)
    let index = 0;

    // loop thru my list to find the element
    while (current.next !== null) {
        console.log(current.value)
        if (current.value === element){
            return true
        }
        current = current.next;
        //console.log(current)
        //index++;
    }
    return "element not found"
}

// function to the the idex of a item
find(index){
    // if too high break the loop
    if (index > this.length){
        console.log("index is to high for list")
        return
    }

    // use the head as the base where to start
    let current = this.head;
    let counter = 0

    // use this to loop thru my list
    while (counter < index) {
        current = current.next;
        counter++
    }

    console.log(current.value)
    
}

// function prints out all the items in a nice graphic
print() {
    let output = ''  // empty variable
    let current = this.head
    while (current) { //while loop to get each item
        output = output + " " + current.value + "  -->" // prints a element and space for each
        current = current.next
    }
    console.log(output + " null")
}


}

    
//creates each node with value reference 
class linkListNodes{
    constructor(value, next){
        this.value = value;
        this.next = next;
    }
}

let test1 = new linkedList()
test1.insertFrontList(10)
test1.insertFrontList(20)
test1.insertFrontList(30)

test1.insertEndOfList(5)
test1.insertEndOfList(15)


//console.log(test1)
//console.log(test1.getLength())
//console.log(test1.getHead())
//console.log(test1.getTail())

//test1.removeLast(test1)
//test1.search(20)
//console.log(test1.search(20))


test1.find(1)


test1.print()