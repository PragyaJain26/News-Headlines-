console.log("Working!!")
// e0a93e6187a74b78aadf8ec733f2f2a9

let newsAccordion = document.getElementById("newsAccordion");
let country = "in";
const xhr = new XMLHttpRequest();
//open xhr object
xhr.open("Get",`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=e0a93e6187a74b78aadf8ec733f2f2a9`,true); 
    
xhr.onload = function(){   //what if file is not present we create a new file 
    if(this.status===200){   // it gives an error to overcome that we can give ifelse condition
        let obj = JSON.parse(this.responseText);
        let articles = obj.articles;
        let news = " ";

        articles.forEach(function(element,index) {
            news += `<div class="accordion-item">
                            <h2 class="accordion-header" id="heading${index}">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                                    <strong style = "text-decoration: underline red">Breaking News ${index+1}</strong> : ${element.title}
                                </button>
                            </h2>
                            <div id="collapse${index}" class="accordion-collapse collapse " aria-labelledby="heading${index}"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                <strong>${element.description}</strong> <br>${element.content}
                                <a href="${element.url}" target="_blank">Read more</a>
                                </div>
                            </div>
                        </div>` 
            
            // console.log(element); 
        });
        newsAccordion.innerHTML = news
    }    
    else{
        console.log("Some Error Occured")   
    } 
}
xhr.send()
console.log("We are done")                 