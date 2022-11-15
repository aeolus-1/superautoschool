var browserId = self.crypto.randomUUID(),
    redonePlayers = []

var socket = io("https://sahserver.xl83.dev/", {
    reconnection: true,
  });

  socket.on("connect", () => {
    console.log("connected")
  });
  
  socket.on("returningList", function (data) {
    console.log(data);
    
  });

  
  socket.on("returningList", function (data) {
    console.log(data);
    data = data.a
    var lists = data[gameState.turn] || []
    if (lists.length<=0) {
        versusArmy = getRandomArmy()
    } else {
        var names = Object.keys(lists),
            safeNames = []

        for (let i = 0; i < names.length; i++) {
            const name = names[i];
            if (name!=browserId) safeNames.push(name)
        }

        

        var random = safeNames[randInt(0, safeNames.length-1)]
        
        army2Name = lists[random].name
        versusArmy = lists[random]
    }
    
    
  });
  socket.on("returningArmyRequest", function (data) {
    
  });

  function g() {
    socket.emit("getList")
  }