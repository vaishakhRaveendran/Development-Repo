import socket
FORMAT='utf-8'
HEADER=64
PORT = 5050
DISCONNECT_MESSAGE='!DISCONNECT'
SERVER ='192.168.29.226'

client = socket.socket(socket.AF_INET,socket.SOCK_STREAM)

ADDR = (SERVER,PORT)
client.connect(ADDR)

def send(msg):
    message=msg.encode(FORMAT)
    msg_length=len(message)
    send_length = str(msg_length).encode(FORMAT)
    send_length += b' '*(HEADER-len(send_length))
    client.send(send_length)
    client.send(message)

send("How are you")
send(DISCONNECT_MESSAGE)