//Let and const both can be used
//Main difference is that const cannot be re-assigned
let myLeads =[]
const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

// const tabs = [
//     {url: "https://www.linkedin.com/in/shreya1509/"}
// ]

tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads",JSON.stringify(myLeads))
        render(myLeads)

    })
})

function render(leads) {

    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        // ulEl.innerHTML += "<li>" + leads[i] + "</li>"

        // const li = document.createElement("li")  //Craete element
        // li.textContent = leads[i]   //set text content 
        // ulEl.append(li)    //append to ul

        // listItems += "<li><a href = '" + leads[i] + "'  target='_blank'>" +  myLeads[i] + "</a></li>"
        listItems += `
        <li>
        <a target='_blank' href = '${leads[i]}'>
         ${leads[i]}
        </a>
        </li>
        `
    }
    ulEl.innerHTML = listItems

}


inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    render(myLeads)
})

deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads=[]
    render(myLeads)
})