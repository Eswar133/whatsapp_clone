import { Server } from 'socket.io';

const io = new Server(9000, {
    cors: {
        origin: 'http://localhost:3000',
    }, 
})


let users = [];

const addUser = (userData, socketId) => {
  const index = users.findIndex(user => user.sub === userData.sub);
  
  if (index === -1) {
    users.push({ ...userData, socketId });
  } else {
    users[index].socketId = socketId;
  }
};

const removeUser = (socketId) => {
    users = users.filter(user => user.socketId !== socketId);
}

const getUser = (userId) => {
    return users.find(user => user.sub === userId);
}

io.on('connection',  (socket) => {
    console.log('user connected')

    //connect
    socket.on("addUser", userData => {
        addUser(userData, socket.id);
        io.emit("getUsers", users);
    });

    //send message
    socket.on('sendMessage', (data) => {
        const user = getUser(data.receiverId);
  
  // Add validation to prevent crash
        if (!user) {
            console.error(`Receiver ${data.receiverId} not found`);
            return;
        }

        io.to(user.socketId).emit('getMessage', data);
    });

    //disconnect
    socket.on('disconnect', () => {
        console.log('user disconnected');
        removeUser(socket.id);
        io.emit('getUsers', users);
    })
})