var titleContent = document.getElementById('postTitleNew');
var updatedtitleContent= 'UPDATED: ' + titleContent.innerHTML;
var contentText = document.getElementById('postBody');
var editButton = document.getElementById('editButton');
var saveButton = document.getElementById('saveButton');
var numberOfClicks=0;

function editContent(){
    contentText.contentEditable="true";
    titleContent.contentEditable="true";
    contentText.style.border="1px solid red";
    titleContent.style.border="1px solid red";
    editButton.style.display="none";
    saveButton.style.display="block";
}

function addComment(id){
   if (id.value.length>0){
    var addEventName = id.value ;
    document.getElementById('listComments').innerHTML += '<p id="comment">' + addEventName + '</p>' ; 
    var a = document.getElementById('userComments');         
    a.value=a.defaultValue;
   }
}

function saveContent(){
    contentText.contentEditable="false";
    titleContent.contentEditable="false";
    contentText.style.border="none";
    titleContent.style.border="none";
    editButton.style.display="block";
    saveButton.style.display="none"; 
}

function AddLikes(){
   var button = document.getElementById("addLikes")
   button.innerHTML = '<i class="fa fa-thumbs-up ">'+'</i>'+'&nbsp;'+"Liked!";
   button.style.border="none";
    numberOfClicks += 1;
    if(numberOfClicks!=0){
        if (numberOfClicks==1){
            document.getElementById('likeCount').innerHTML = numberOfClicks + " person likes this!";
        }
        else {
            document.getElementById('likeCount').innerHTML = numberOfClicks + " people liked this!";
        }
        }
    }