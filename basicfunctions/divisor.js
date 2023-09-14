// Simple app that finds which numbers divide the number you entered

function divisors(num){
          let numbers = [];

          for(let i=2;i<num;i++){
                    if(num%i==0){
                              numbers.push(i);
                    }
          }

          for(let index in numbers){
                    console.log(numbers[index]);
          }
}

divisors(35);
