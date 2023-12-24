import socket
import threading

PORT = 5050
#Select port for running the server
SERVER = "192.168.126.128"
#choosing the ipv4 because i want to run my server locally.This will be the ip of server
#socket.gethostbyname(socket.gethostname()) this peice of code also returns the local ip

#A socket kind off open up the device to other machines
#we need to have the server and port then bind them together with the socket
ADDR = (SERVER,PORT)
server = socket.socket(socket.AF_INET,socket.SOCK_STREAM)
server.bind(ADDR)

def handle_client(conn,addr):
    pass

#Inside the  start function we define how our server will listen and respond by printing messages.
def start():
    server.listen()
    while True:
        conn, addr = server.accept()#the accept methods returns when a new connection is established until then it waits.
        #when a new connection established then a new thread is created.The handle client function deals connect between single
        #client and server
        thread = threading.Thread(target=handle_client,args=(con,addr))
        thread.start()
        print(f'[ACTIVE THREADS]:{threading.activeCount()-1}')
        #Active no of threads for this process will be printed...

print("Starting Server.......")
start()