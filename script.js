let role = prompt("What do you do?", '')


if (role === "Developer") {
     alert ("Prove it, Go to next prompt and answer correctly.")

    let query = prompt(`"If (A < B)", In this expression, is it a "Truthy" or a "Falsey"?`, '')

    if (query === "Truthy") {
        alert ("You are indeed a Developer. Respect to you sir.")
    } else if (query === '' || query === null) {
        alert ("Liar! Get out.")
        } else {
            alert ("You just cant even use your brain correctly, can you?")
        }
}
if (role === "Game Designer") {

    let engine = prompt(" Okay. What game engine do you use then?")

    if (engine === "GameMaker") {
        alert("A wise choice indeed, may you continue building beautiful games.")
    } else if (engine === "" || engine === null) {
        alert ("lame.")
    } else {
        alert ("loser.")
    }
}