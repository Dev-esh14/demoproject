export default function Z({a1,b1,c1,d1}){//props destructuring concept
    var val2=parseInt(a1)+parseInt(b1)+parseInt(c1)+parseInt(d1);

    return(
        <h2>sum of all props = {val2}</h2>
    )
}