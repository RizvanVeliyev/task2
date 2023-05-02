//task1
function returnDuplicate(A){
    for(let i=0;i<A.length-1;i++){
        if (A[i]==A[i+1]){
            return A[i];
        }
    }
}

A=[1,2,3,4,4];
console.log("Array="+ A);
console.log("duplicate element="+returnDuplicate(A));
//task2
function returnMax(A){
    maxx=A[0];
    for(let i=0;i<A.length;i++){
        if (A[i]>maxx){
            maxx=A[i];
        }
    }
    return maxx;
}
B=[23,45,1,78,34,21,5,6];
console.log("Array="+ B);
console.log("max="+returnMax(B));
//task3
function returndoubled(A){
    B=[];
    for(let i=0;i<A.length;i++){
        B+=[A[i]*2]+ " ";

    }
    return B;

}
C=[2,4,5,8,9];
console.log("normal version of array="+  C);
console.log("doubled version of array="+ returndoubled(C));


