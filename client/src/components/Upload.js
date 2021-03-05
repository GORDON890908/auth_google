import React from "react";
import {useHistory} from "react-router-dom";

const Upload = () => {
    const history = useHistory();

    let recipe = {
        recipeName:"Japanese Meat and Potato Stew",
        description:"Japanese Meat and Potato Stew!!",
        ingredients:["potatoes","onions","carrots","chuck steak"],
        procedures:["chop everything", "blanch meat", "add everything and boil"],
        notes:"remember to blanch",
        reviews:["00123", "32131"],
        userName:"Oscar Cheng",
        tags:["Japanese", "Stew"],
        createdAt: Date.now,
    }

    const createRecipe = async (info) => {
        await fetch("/dashboard", {
            method: "POST",
            body: JSON.stringify(info),
            headers: {
              "Content-Type": "application/json",
            }
            }).then(res => {
            if (res.ok) {
              history.push("/dashboard");
            } else {
              console.log("Post Recipe fail");
            }
            })
    };
    
    return(
        <div>
            <button onClick = {e => createRecipe(recipe)}>Recipe</button>
        </div>
    )
}

export default Upload;