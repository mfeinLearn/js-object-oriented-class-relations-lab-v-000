###############################################
: belongs to:
- setUser only allows an item to have one user
###############################################
class Item {
  constructor(price, name, user){
    this.id = ++itemId
    this.name = name
    this.price = price
    if(user){
      this.setUser(user)
    }

    // insert in the item to the store
    store.items.push(this)
  }
  setUser(user){
    this.userId = user.id
  }
}

###############################################
- we have a setUser there
- and then for a new item we're only taking in one user argument
- so I would say an item belongs to a user
class Item {
  constructor(price, name, user){
    this.id = ++itemId
    this.name = name
    this.price = price
    if(user){
      this.setUser(user)
    }

    // insert in the item to the store
    store.items.push(this)
  }
  setUser(user){
    this.userId = user.id
  }
}

let bobby = new User("bobby")
let trousers = new Item(24, 'trousers', bobby)
##########################
I think a user can have multiple items
user -< items
since multiple items could have the same user id
