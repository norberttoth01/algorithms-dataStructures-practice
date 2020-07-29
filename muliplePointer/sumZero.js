// [-4,-3,-2,1,3,4,5,6,7] ha a 7 -4 páros túl nagy, akkor a -4től nagyobb számokkal összeadva a 7-et még nagyobb számot kapunk
// így minden szám a -4től jobbra kiesik. Ha pl  -2 5 párosra azt kapjuk, hogy túl kicsi, nincs értelme arra gondolni, hogy akkor
// talán a -2 7 jó lehet, hiszen az előbb pont kizártuk, hogy  a 7-tel egy -4nél nagyobb szám jó lehet.

function sumZero(arr, num) {
  let poniterLeft = 0;
  let pointerRight = arr.length - 1;

  while (poniterLeft < pointerRight) {
    let sum = arr[poniterLeft] + arr[pointerRight];
    if (sum === num) {
      return [arr[poniterLeft], arr[pointerRight]];
    } else if (sum > num) {
      --pointerRight;
    } else {
      ++poniterLeft;
    }
  }
  return undefined;
}

function sumZeroAll(arr, num) {
  let poniterLeft = 0;
  let pointerRight = arr.length - 1;
  const result = [];

  while (poniterLeft < pointerRight) {
    let sum = arr[poniterLeft] + arr[pointerRight];
    if (sum === num) {
      result.push([arr[poniterLeft], arr[pointerRight]]);
      --pointerRight;
      ++poniterLeft;
    } else if (sum > num) {
      --pointerRight;
    } else {
      ++poniterLeft;
    }
  }
  return result;
}

console.log(sumZero([-4, -2, -1, 1, 2, 3, 5, 6], 3));
console.log(sumZeroAll([-6, -4, -2, -1, 1, 2, 3, 5, 6], 3));
