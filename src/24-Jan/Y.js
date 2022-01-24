export default function Y({a,b,c}){//props destructuring concept
    var val1=parseInt(a)+parseInt(b)+parseInt(c);

    return(
        <h2>sum of all props = {val1}</h2>
    )
}