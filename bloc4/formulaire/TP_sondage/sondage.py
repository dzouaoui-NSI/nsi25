from flask import Flask, render_template, request
import csv
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

# DECLARATION DE 4 VARIABLES GLOBALES
# votes est une liste destinée à reccueillir les notes attribuées par les participants au sondage
votes = []

# 3 variables entières destinées à compter le nombre de participants de seconde, de première et de terminale
nb_seconde, nb_premiere, nb_terminale = 0,0,0

@app.route('/resultat', ....à compléter)
def resultat():
    # Le mot-clé "global" permet de déclarer ques les varaibles concernées ne sont pas des variables locales (voir cours fonction)
    global nb_seconde
    global nb_premiere
    global nb_terminale
    
    # PARTIE 1 :
    # RECUPERER LES DONNEES SAISIES PAR LE PARTICIPANT AU SONDAGE VIA LE FORMULAIRE
    # ET ACTUALISE LES 4 VARIABLES GLOBALES EN CONSEQUENCE
    
    
    .... A compléter
    
    # PARTIE 2 :
    # TRAITEMENT DES DONNEES AFIN DE CALCULER : LE NOMBRE TOTAL DE PARTICIPANTS AU SONDAGE,
    # LA NOTE MOYENNE ATTRIBUEE PAR LES VISITEURS,
    # ET LE POURCENTAGE DE SECONDE, DE PREMIERE ET DE TERMINALE PARMI LES PARTICIPANTS AU SONDAGE
    
   
   .... A compléter
   
    # PARTIE 3 :
    # RENVOYER LA FEUILLE DE RESULTATS DU SONDAGE
    return render_template("resultat.html", .... A compléter)

app.run(debug=True)