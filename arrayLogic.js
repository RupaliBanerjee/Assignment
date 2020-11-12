/**
 * Q1 on button click change color and show count
 */
var count=0;
function changeColor(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
  count++;
  document.getElementById('clickCount').setAttribute('style','display:block');
  document.getElementById('clickCount').innerHTML = count;
}



/**
 * Q2 Calculate the maximum sum of n consecutive elements of array
 */
var elemArray=[1,2,5,2,8,1,5];
var num =3;


function maxSum(elemArray,num){
    if(elemArray==undefined|| elemArray==null||elemArray.length==0||num>elemArray.length){
        console.log(null);
    }else{
        let maxsum=0;
        for(i=0;i<=elemArray.length-num;i++){
            let sum=0;
            for(j=i;j<num+i;j++){
              sum+=elemArray[j]
            }
            maxsum = maxsum<sum ? sum : maxsum;
        }
        console.log(maxsum);

    }
}

/**
 * Q3 Split array into multiple small arrays as per the size entered by user
 */
var normalArray=[1,2,3,4,5,6,7,8,9,10];
var splitnum=3;
function createCombo(normalArray,splitnum){
    if(normalArray==undefined|| normalArray==null||normalArray.length==0||splitnum>normalArray.length){
        console.log(error);
    }else{
        let splitArray = [];
        for(i=0;i<normalArray.length;i=i+splitnum){
            let newArray=[];
            for(j=i;j<splitnum+i && j<normalArray.length;j++){
                newArray.push(normalArray[j]);
            }
            splitArray.push(newArray);
        }
        console.log(splitArray);
    }
}






