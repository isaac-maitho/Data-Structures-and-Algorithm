//Recursion is a function that calls itself
function takeShower(){
    return 'showering'
}
function eatBreakfast(){
    let meal = cookFood()
    return `Eating ${meal}`
}
function cookFood(){
    let items = ['cereals', 'bread', 'eggs']
    return items [Math.floor(Math.random()*items.length)];
}

function wakeUp(){
    takeShower()
    eatBreakfast()
    console.log('Ready for work')

}
wakeUp()