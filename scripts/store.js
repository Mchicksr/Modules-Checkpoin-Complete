//const foo = 'bar';
import item from './item.js';




let items = [];
let hideCheckedItems = false;

function findById(id){
  let item = this.items.find(id);
 
  return item;
 
}


function addItem(name){
  try {
    item.validateName(name);
    let newItem=item.create(name); //restructured -8/14
    items.push(newItem);
   
  } catch(error){
    console.log(`Cannot add item:${error.message}`); //add tic marks 8/14
  }
}

function findAndToggleChecked(){
  this.findById(checked);
    
}

function findAndUpdateName(id){
  try{
    item.validateNAme.findById();
    
  }
  catch(error){
    console.log(`Cannot update name: ${error.message}`);
    
  }
}
/*function findAndDelete(){
  const index = store.items.findIndex(item => item.id === id);
  store.items.splice(index, 1);
    
}*/

function findAndDelete(id){
  //let deleteItem = this.findById(id);
  let deleteIndex = this.items.findIndex(item => item.id === id);
  // let deleteIndex = items.map(item => item.id).indexOf(id);
  this.items.splice(deleteIndex, 1);
}

function toggleCheckedFilter(){
  this.hideCheckedItems= !this.hideCheckedItems
}


export default { items, hideCheckedItems,

  findById,
  addItem,
  findAndToggleChecked,
  findAndUpdateName,
  findAndDelete,
  toggleCheckedFilter
};
/*console.log(item); 
console.log(foo);*/

