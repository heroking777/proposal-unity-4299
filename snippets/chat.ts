import { Server, Socket } from 'socket.io';

const io = new Server(3000);

io.on('connection', (socket: Socket) => {
    console.log(`User connected: ${socket.id}`);

    socket.on('chat message', (msg: string) => {
        // Implement cheat detection logic here
        if (isCheatMessage(msg)) {
            handleCheat(socket, msg);
        } else {
            io.emit('chat message', msg);
        }
    });

    socket.on('disconnect', () => {
        console.log(`User disconnected: ${socket.id}`);
    });
});

function isCheatMessage(message: string): boolean {
    // Implement your cheat detection logic here
    // For example, check for specific keywords or patterns
    return message.includes('cheat') || message.includes('hack');
}

function handleCheat(socket: Socket, message: string) {
    console.log(`Cheating detected from user ${socket.id}: ${message}`);
    // Implement your cheat handling logic here
    // For example, disconnect the user, log the incident, etc.
    socket.disconnect(true);
}