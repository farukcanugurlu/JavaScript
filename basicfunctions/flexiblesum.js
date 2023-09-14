// You can sum numbers as many as you want with simple flexible sum app.

function sum(){
          let sum=0;
          for(let i=0;i<arguments.length;i++){
                    sum+=arguments[i];
          }
          console.log(sum);
}

sum(3,5,7);
sum(3,5);
sum(5,6,8,5,3,9);
