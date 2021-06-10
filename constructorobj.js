function customer(custId,custName){
    this.custId=custId
    this.custName=custName
}
var customer1 = new customer(101, 'chiru'); //1st line of object
  var customer2 = new customer(102, 'suresh');

  console.log(customer1.custId, customer1.custName)//101 chiru
  console.log(customer2.custId, customer2.custName)