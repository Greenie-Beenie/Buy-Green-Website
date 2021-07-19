var database = firebase.database();

var db = firebase.firestore();

function test(){
  console.log("hello")
  var name = document.getElementById('namebox').value;
  console.log(name);

  firebase.database().ref('names/'+name).set({
    person_name: name,
    email: name+'@gmail.com'
  })
}

function getstuff(){
  var name2 = 'Randy Marsh';
  firebase.database().ref().child("names").child(name2).get().then((snapshot) => {
    console.log(snapshot.val());
  })
}

function listAllRecipes() {
  const recipeList = [];
  recipeList.push("test");
  db.collection("recipes").get().then((querySnapshot) => {
    querySnapshot.forEach((rec) => {
      recipeList.push(rec.data());
      console.log(`${rec.id} => ${rec.data()}`);
      console.log(recipeList);
    });
  });
  recipeList.push("test2");
  console.log(recipeList);
}