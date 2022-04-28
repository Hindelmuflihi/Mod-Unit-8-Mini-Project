

//Write Code for Task One below this line!
//1. Create two arrays with two image links to TV show recommendations for each type: comedy, action, drama. Use doc in task one.
	let comedy = ["https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F140877461%2F893605758%2F1%2Foriginal.20210706-232911?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C800%2C400&s=b5489155fce5da1efd1d89191256f092", "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfAPGL9yWgd9sMPElauJyO7_ZouGd-w2wjdQgndYevKn0m5vQaG2wi553bX_OES6vVX29C9_CZI8swImCI5jf9RuQvk.jpg?r=e01","https://yodoozy.com/wp-content/uploads/2021/05/comedy-shows-on-netflix2-min.jpg"];
	 let action =["https://upload.wikimedia.org/wikipedia/en/6/61/Poster_for_Netflix_series_Into_the_Night.png", "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYomdgsDXyn8qkpJDMTVbX3cBXPRUl44nb_b6YCNCL4nRgs6-SRGnYe6twELtVZlnONbaN6dUKmFtAXWz2b0lGskVF4.jpg?r=b16","https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABX8IUAD4mN8vL3K5S6NgRFXnwkjQ1HLeWWWjKQwIUvYf0f43TIXlW9z4hOviUI0qrItcvFVOfPSeFY0OYPL2fmxdDhUELoL0ST0JoAFvBWt8HGWGUPqf6hs5lJmc.jpg?r=13b"];
	 let drama =["https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABS3om16T6zfR1N1qCSNpHAatBKJuiLulRr7IsbUAWS_IWxkVtdtOlI0QZLmluo1_UWh4P6i_iK4115PC38WCI2fTdwL4aO3D0fE49LMjoSHNPd8C11srecK0BrEp.jpg?r=f9b", "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdt2QiSP7i_31Gx9auxUvYYUr5CV7XgGhrmBJ6m_7ZjJWkIaRqwEMXVvzv8POHkTYqhcS9cEN0uPMB9NOBl700OnTyo.jpg?r=2b7","https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbrfHqw_7_oce6mTYUWyPqkRaexi139tqIm4tEEIO499aouE_hv4RHFQkroM7GepiSfReRAZWEe-yqH77RZmZAFLXLFdeTVGptsrezypEmAiUEpHNEFRluM40KlC.jpg?r=891"];

$(".submit-button").click(function(){
    let genreInput=$(".get-suggestions").val();
     $(".shows").empty();
//Write code for Task Two below this line!
//2. Write an if-else if statements so the computer will show certain images when the user types in certain genre.
    if(genreInput==="comedy"){
     for(let show of comedy){
    $(".shows").append("<img src="+show+">");
    }
}
    else if(genreInput==="action"){
    for (let show of action){
    $(".shows").append("<img src="+ show+">");
    }
    }
    else if(genreInput==="drama"){
    for (let show of drama){
    $(".shows").append("<img src="+ show+">");
    }
    }
});

$(".suggestion-button").click(function(){
    let suggestion=$(".give-suggestions").val();
    $(".shows").text("Thanks for your suggestion! Check the console to see that it was added!");
//Write code for Task Three below this line!
//3. Write a code using .push to allow the user to make TV show suggestions.
	comedy.push(suggestion);
     console.log(comedy);
    action.push(suggestion);
    console.log(action);
    drama.push(suggestion);
    console.log(drama);

    
});