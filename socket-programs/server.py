import socket
import threading

FORMAT='utf-8'
HEADER=64
PORT = 5050
DISCONNECT_MESSAGE='!DISCONNECT'
#Select port for running the server
# SERVER = "192.168.126.128"
SERVER =socket.gethostbyname(socket.gethostname())
#choosing the ipv4 because i want to run my server locally.This will be the ip of server
#socket.gethostbyname(socket.gethostname()) this peice of code also returns the local ip

#A socket kind off open up the device to other machines
#we need to have the server and port then bind them together with the socket
server = socket.socket(socket.AF_INET,socket.SOCK_STREAM)

ADDR = (SERVER,PORT)
server.bind(ADDR)

def handle_client(conn,addr):
    #This function runs for each client.
    print(f'[NEW CONNECTION] {addr} connected')
    connected=True
    while connected:
        msg_length = conn.recv(HEADER).decode(FORMAT)
        #this is a blocking line of code and wont pass until we receive a message from the client. This is why create thread for
        #each user since we dont want other users to get blocked..
        # the argument for recv is size of message. We will fix the size of first message or header to be 64 byte and header will contain
        #the size of next message..
        if msg_length:
            msg_length = int(msg_length)
            msg = conn.recv(msg_length).decode(FORMAT)
            if msg == DISCONNECT_MESSAGE:
                connected = False
            print(f'[{addr}]:{msg}')
    conn.close()

#Inside the  start function we define how our server will listen and respond by printing messages.
def start():
    server.listen()
    print(f'listening on {SERVER}')
    while True:
        conn, addr = server.accept()#the accept methods returns when a new connection is established until then it waits.
        #when a new connection established then a new thread is created.The handle client function deals connect between single
        #client and server
        thread = threading.Thread(target=handle_client,args=(conn,addr))
        thread.start()
        print(f'[ACTIVE THREADS]:{threading.activeCount()-1}')
        #Active no of threads for this process will be printed...

print("Starting Server.......")
start()