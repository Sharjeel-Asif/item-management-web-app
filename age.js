let addBtn=document.querySelector("#add-btn")
let itemData=document.querySelector("#item-data")
let Sr_no=0

// addBtn.addEventListener("click",()=>{
//     console.log("ff")
// })
 addBtn.addEventListener("click",()=>{
    let item_name=document.querySelector("#item-name")
    let total_quantity=document.querySelector("#total-quantity")
    let item_price=document.querySelector("#item-price")
    let item_category=document.querySelector("#item-category")
    
    let value1=item_name.value
    let value2=total_quantity.value
    let value3=item_price.value
    let value4=item_category.value

    console.log(value1,value2,value3,value4)
if(item_name.value==="" || total_quantity.value==="" || item_price.value==="" || item_category.value===""){
    alert("please fill all yhe inputs")
    
} else{
    Sr_no++
    let row=itemData.insertRow()
    let rowElem1=row.insertCell(0)
    let rowElem2=row.insertCell(1)
    let rowElem3=row.insertCell(2)
    let rowElem4=row.insertCell(3)
    let rowElem5=row.insertCell(4)
    let rowElem6=row.insertCell(5)
    let deleteBtn=`<button class="btn btn-danger" id="delBtn_${Sr_no}" onclick="delItem(this)">Delete</button>`
    rowElem1.innerHTML=Sr_no
    rowElem2.innerHTML=value1
    rowElem3.innerHTML=value2
    rowElem4.innerHTML=value3
    rowElem5.innerHTML=value4
    rowElem6.innerHTML=deleteBtn

    item_name.value=""
    total_quantity.value=""
    item_price.value=""
    item_category.value=""
 }
})


    function delItem(e){
        let eParent=(e.parentElement).parentElement
        eParent.style.display="none"
    }
