from socket import socket, AF_INET, gethostbyname, SOCK_STREAM

ip_serveur = gethostbyname("www.nsi-premiere.fr")
s = socket(AF_INET, SOCK_STREAM)
s.connect((ip_serveur, 80))

requete = """GET /test.html HTTP/1.1\r
Host: www.nsi-premiere.fr\r\n\r\n
"""

print("ADRESSE IP DU SERVEUR :", ip_serveur,"\n")
print("REQUETE ENVOYEE :\n")
print(requete)

s.send(requete.encode("utf8"))

data = s.recv(1024)

print("REPONSE OBTENUE :\n")
print(data.decode("utf8"))
    
s.close()