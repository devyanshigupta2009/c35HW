class Form {
  constructor() {
    
  }

  display(){
    var title = createElement('h2')
    title.html("Welcome voters");
    title.position(130, 0);
    
    var input = createInput("Name");
    var input1 = createInput("Email ID");
    var button = createButton('OK');
    
    input.position(130, 160);
    input1.position(130, 130);
    button.position(250, 200);

    button.mousePressed(function(){
      input.hide();
      button.hide();
      input1.hide();

      var name = input.value();
      
      playerCount+=1;
      player.update(name)
      player.updateCount(playerCount);
      var greeting = createElement('h3');
      greeting.html("Hello " + name )
      greeting.position(130, 40);
      var greeting1 = createElement('h6');
      greeting1.position(20, 70);
      greeting1.html("Q1. Would you be willing to contribute a small amount every month for such a programme ?");
      var button1 = createButton('YES');
      var button2 = createButton('ON');
      button1.mousePressed(function(){
        button1.hide();
        button2.hide();
        greeting1.hide();
        greeting.hide();
      })
      button2.mousePressed(function(){
        button1.hide();
        button2.hide();
        greeting1.hide();
        greeting.hide();
      }) 
      button1.position(20,110);
      button2.position(60,110);
      var greeting2 = createElement('h3');
      greeting2.html("THANK YOU "+ name );
      greeting2.position(130, 40);
    });
  }
}
