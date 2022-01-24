export default function Sample(props){
    //declaring variables
     var a=5;
     let b=3;
     const c=3;
     //a function to add three props with any no.of inputs
     function add(){
         var val1=parseInt(props.x)+a;
         var val2=parseInt(props.y)+b;
         var val3=parseInt(props.z)+c;
         return {val1,val2,val3};
     }
     var sum=add();//function need to be called

    return(
        <h2>X+A is {sum.val1}  Y+B is {sum.val2}  Z+C is {sum.val3}</h2>//printing the values from function
    );
}