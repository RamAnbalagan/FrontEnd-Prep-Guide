var questions = ['what is your name' , 'what is ur name fav hobby' , 'what is ur preferred languge'];

var answers = [ ];

function ask(i) {
  process.stdout.write(`\n\n\n\n ${questions[i]}`);
  process.stdout.write("  > ");
}

process.stdin.on('data' , data => {
  answers.push(data.toString().trim());
  if(answers.length < questions.length){
    ask(answers.length);
  }
  else{
    console.log(answers);
    process.exit();
  }
});

ask(0);