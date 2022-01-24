export default function Sample1({a,b,c}){//props destructuring(instead of (props))
    var val=parseInt(a)+parseInt(b)+parseInt(c);//instead of (props.a)

    return(
        <h2>Sum of a+b+c is {val}</h2>
    )
}