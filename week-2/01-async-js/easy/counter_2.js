let cnt=0;
function updateCnt(){
    cnt++;
    console.log(cnt);
    setTimeout(updateCnt,1000);
}
updateCnt();