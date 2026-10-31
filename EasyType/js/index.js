let words = ["nation", "consider"]
let current_word = null
let written_words = []
let current_written_word = []
let text_area = document.getElementById("text_area")
let word_counter = 1
let local_word_index = 0


text_area.addEventListener("input", (event) => {
    console.clear()
    current_word = words[word_counter - 1]
    if (event.data !== " ") current_written_word = [...current_written_word, event.data]
    

    if (event.data === " ")  {
        word_counter++
        if (words[word_counter - 1]) {
            current_word = words[word_counter - 1]
        }
        else {
            console.log("Congrats! You've completed all words!");
            
        }
        local_word_index = 0
        written_words = [...written_words, current_written_word.join("")]
        current_written_word = []

        console.log(`correct! \n need to write : ${current_word} \n written : ${current_written_word.join("") || ""}`);
    }
    else if (current_word[local_word_index] === current_written_word[local_word_index]) {
        console.log(`correct! \n need to write : ${current_word} \n written : ${current_written_word.join("")}`);
        local_word_index++
        
    }
    else {
        console.log(`INcorrect! \n need to write : ${current_word} \n written : ${current_written_word.join("")}`);
    }
    
    
})

// text_area.addEventListener("input", (e) => {
//     console.clear()
    
    
        
    
    
//     // let split_text = text.split("")

//     console.log(text[word_index_counter].split(""));
//     console.log(word_index_counter);
    
    
    
//     // console.log(written_text);

//     // console.log(written_text[written_text.length - 1]);
//     // console.log(text[0].split(""));
    
    

//     if (written_text[written_text.length - 1] === text[word_index_counter].split("")[written_text.length - 1]) {
//         written_text = [...written_text, e.data]
//         console.log(written_text.join(""));
        
//         if (e.data === " ") {
//             word_index_counter++
//         }
//         console.log("correct so far! written:", written_text.join(""), "\n should write:", text.join(""));
        
//     }
//     else {
//         console.log("wrong!");
        
//     }
// })