function StepWalking(num){
  if(num === 1){
    return 1;
  }
  if(num === 2){
    return 2;
  }
  console.log("The current number is ${num}");
  return StepWalking(num - 1) + StepWalking(num - 2);
}
