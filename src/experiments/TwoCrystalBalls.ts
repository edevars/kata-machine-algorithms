const generateBuilding = (index: number) : boolean[] => {
  const totalFloors = 10000
  let falseFloors = new Array(totalFloors).fill(true)
  for(let i = 0;i<index; i++){
    falseFloors[i] = false
  }

  return falseFloors
}

const binarySearchBalls = (building: boolean[]) : number => {
  let lo = 0
  let hi = building.length
  let counter = 0

  // first ball until breaks
  do {
    const midPoint = Math.floor(lo + (hi - lo)/2)
    const value = building[midPoint]
    counter = counter+1
    if(value === true){
        hi = midPoint
      break
    }else {
      lo = midPoint + 1
    }
  }while(lo < hi)

  // When breaks only you can lookup from 0 to k
  for(let j=lo; j<hi; j++){
    counter = counter+1
    if(building[j]){
      break
    }
  }

  return counter
}

const stepsBySqrtOFN = (building: boolean[]) => {
 const jmpAmount = Math.floor(Math.sqrt(building.length))
 let i = jmpAmount
 let opsCounter = 0

 for(;i < building.length; i += jmpAmount){
  opsCounter=opsCounter+1
  if(building[i]){
    break
  }
 }

 i -= jmpAmount
 for(let j=0; j<jmpAmount && i < building.length; ++j, ++i){
  opsCounter=opsCounter+1
  if(building[i]){
    break
  }
 }

 return opsCounter
}

const cubeRootOFN = (building: boolean[]) => {
  const jmpAmount = Math.floor(Math.cbrt(building.length))
  let i = jmpAmount
  let opsCounter = 0
 
  for(;i < building.length; i += jmpAmount){
   opsCounter=opsCounter+1
   if(building[i]){
     break
   }
  }
 
  i -= jmpAmount
  for(let j=0; j<jmpAmount && i < building.length; ++j, ++i){
   opsCounter=opsCounter+1
   if(building[i]){
     break
   }
  }
 
  return opsCounter
 }



const testFloors = [2, 2500, 3000, 4232, 5000, 5432,6233,8931, 9999]

//Binary Search
console.log(`\n\n\n***************OPS DONE***************\n`)
testFloors.forEach((startFloorForBreak => {
  console.log(`\n\n________FLOOR IN BREAK ${startFloorForBreak}________\n`)
  const building = generateBuilding(startFloorForBreak)
  const numOfOpsBinary = binarySearchBalls(building)
  const numOfOpsSqrt = stepsBySqrtOFN(building)
  const numOfOpsCube = cubeRootOFN(building)
  console.log(`Binary | Sqrt | CubeRoot`)
  console.log(`${numOfOpsBinary} | ${numOfOpsSqrt} | ${numOfOpsCube}`)
}))
