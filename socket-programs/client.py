import socket
FORMAT='utf-8'
HEADER=64
PORT = 5050
DISCONNECT_MESSAGE='!DISCONNECT'
SERVER ='192.168.29.226'

client = socket.socket(socket.AF_INET,socket.SOCK_STREAM)

ADDR = (SERVER,PORT)
client.connect(ADDR)