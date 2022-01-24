export default function X({a,b}){//props destructuring concept
    var val=parseInt(a)+parseInt(b);

    return(
        <h2>sum of all props = {val}</h2>
    )
}